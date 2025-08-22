import { Button, ConfigProvider, Flex, Form, Input, Layout, Modal, Tooltip, Tree, TreeDataNode, TreeProps } from "antd";
import { ReactNode, useEffect, useState } from "react"
import TranscriptionService from "../../../utils/services/TranscriptionService";
import { CloseOutlined, DeleteOutlined, DownOutlined, EditOutlined, FileOutlined, FolderOutlined, HeartFilled } from "@ant-design/icons";
import { Transcription, Treeview } from "../../../utils/lib/types";
import { useAppStore } from "../../../utils/contexts/AppStoreProvider";
import { observer } from "mobx-react-lite";
import DirectoryService from "../../../utils/services/DirectoryService";

interface CustomTreeNode extends TreeDataNode {
  id: number;
  name: string;
  isLeaf: boolean;
  children?: CustomTreeNode[];
}

export const FoldersTree = observer(() => {
    const [treeData, setTreeData] = useState<CustomTreeNode[]>([]);
    const { setSelectedTranscription, directoryUpdated } = useAppStore();
    const [confirmDelete, setConfirmDelete] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [newName, setNewName] = useState<string>('');
    const [editingNode, setEditingNode] = useState<CustomTreeNode | null>();


  const titleRender = (treeNode: CustomTreeNode): ReactNode => {
    const nodeName = treeNode.name as ReactNode;
    const isConfirming = confirmDelete === treeNode.key;
    const isLeaf = !treeNode.children 

    return (
      <div className="flex justify-between group w-full">
        <div className="space-x-1 max-w-[140px] overflow-hidden text-ellipsis whitespace-nowrap">
          <span>{isLeaf ? <FileOutlined /> : <FolderOutlined />}</span>
          <span title={treeNode.name}>{nodeName}</span>
        </div>
        <div>
        {isConfirming ? (
            <div className="group:flex">
              <Tooltip title="Отменить" arrow={false}>
                <Button type="text" icon={<span className="opacity-60"><CloseOutlined/></span>} size="small" onClick={() => setConfirmDelete(null)}/>
              </Tooltip>
              
              <Tooltip title="Удалить" arrow={false}>
                <Button type="text" danger icon={<span className="opacity-60"><DeleteOutlined /></span>} size="small" onClick={() => handleDelete(treeNode)}/>
              </Tooltip>          
            </div>
        ) : (
          <div className="hidden group-hover:flex">
            <Tooltip title="Редактировать" arrow={false}>
              <Button type="text" icon={<span className="opacity-60" onClick={() => handleEdit(treeNode)}><EditOutlined/></span>} size="small" />
            </Tooltip>
            
            <Tooltip title="Удалить" arrow={false}>
              <Button type="text" icon={<span className="opacity-60"><DeleteOutlined/></span>} size="small" onClick={() => setConfirmDelete(treeNode.key.toString())}/>
            </Tooltip>          
          </div>
        )}
        </div>
      </div>
    )
  }

  const handleDelete = async (treeNode: CustomTreeNode) => {
    if(treeNode.isLeaf){
      await TranscriptionService.deleteTranscription(treeNode.id);
    }
    else{
      await DirectoryService.deleteUserDirectory(treeNode.id);
    }
    fetchData();
    setConfirmDelete(null);
  }  

  const fetchData = async () => {
      const data: Treeview = await DirectoryService.getUserTreeview();
      const sortedDirectories = [...data.directories].sort((a,b) => a.id - b.id);
      const transformedData = sortedDirectories.map(dir => ({
        key: dir.id.toString(),
        isLeaf: false,
        name: dir.name,
        id: dir.id,
        children: dir.transcripts?.length ? dir.transcripts.map(transcript => ({
          key: `${dir.id}-${transcript.id}`,
          name: transcript.name,
          isLeaf: true,
          id: transcript.id,
        })) : []
      }))
      setTreeData(transformedData);
      console.log('transformedDataTest:',transformedData)
  };

  useEffect(() => {
    fetchData();
  }, [directoryUpdated])

  const onSelect: TreeProps['onSelect'] = (selectedKeys: React.Key[], info: any) => {
    (async() => {
      const selectedNode = info.node;
      console.log('info node',info.node)
      if(!selectedNode.children){
        try{
          const [,selectedTranscriptionId] = selectedNode.key.split('-');
          const transcription: Transcription = await TranscriptionService.getTranscriptionById(selectedTranscriptionId);
          setSelectedTranscription(transcription);
        }
        catch(error) {
          console.error("Ошибка при получении содержимого файла:", error);
          setSelectedTranscription(null);
        }
      } 
    })()
  }

  const handleEdit = async (treeNode: CustomTreeNode) => {
    setEditingNode(treeNode);
    setNewName(treeNode.name);
    setIsModalOpen(true);
  }

  const handleCancelEdit = () => {
    setEditingNode(null);
    setNewName('');
    setIsModalOpen(false);
  };

  const handleSave = async() => {
    if (!editingNode) return;
    if (editingNode.isLeaf)
    {
      console.log(newName)
      await TranscriptionService.updateTranscription(editingNode.id, {name: newName});
      //редактирование транскрипции
    } else {
      await DirectoryService.updateUserDirectory(editingNode.id, newName);
    }

    fetchData();
    setNewName('');
    setEditingNode(null);
    setIsModalOpen(false);
  }

  return(
      <Layout>
        <Tree
          switcherIcon={<DownOutlined />}
          onSelect={onSelect}
          titleRender={titleRender}
          blockNode
          treeData={treeData}
          className="min-w-full p-3 text-clip overflow-hidden"
          showLine />

        <Modal open={isModalOpen} title={editingNode?.isLeaf ? "Редактирование транскрипции" : "Редактирование папки"} footer={false} onCancel={handleCancelEdit}>
          <Input placeholder={editingNode?.isLeaf ? "Название транскрипции" : "Название папки"} className="my-3" value={newName} onChange={e => setNewName(e.target.value)}/>
          <Button className="w-full" type="primary" htmlType="submit" onClick={() => handleSave()}>Сохранить</Button>
        </Modal>
      </Layout>
  )
})
