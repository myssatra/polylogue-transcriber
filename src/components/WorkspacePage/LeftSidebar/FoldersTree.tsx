import { Tree, TreeDataNode, TreeProps } from "antd";
import { useEffect, useState } from "react"
import TranscriptionService from "../../../utils/services/TranscriptionService";
import { DownOutlined, FileOutlined, FolderOutlined } from "@ant-design/icons";
import { Transcription, Treeview } from "../../../utils/lib/types";
import { DirectoryTreeProps } from "antd/es/tree";
import { useAppStore } from "../../../utils/contexts/AppStoreProvider";
import { observer } from "mobx-react-lite";
import DirectoryService from "../../../utils/services/DirectoryService";

interface CustomTreeNode extends TreeDataNode {
  directory_id?: number;
}

export const FoldersTree = observer(() => {
    const [treeData, setTreeData] = useState<TreeDataNode[]>([]);
    const { setSelectedTranscription } = useAppStore();

      // тест дерева
  // const [treeview, setTreeView] = useState<Treeview>();

//   useEffect(() => {
//     (async () => {
//       // const authUser: User = await UserService.getAuthUser();
//       // console.log("userId", authUser.id);
//       const treeview: Treeview = await TranscriptionService.getUserTreeview();

//       setTreeView(treeview);
//       console.log('treeview test:', treeview)
//   })();
// }, []);

  useEffect(() => {
    const fetchData = async() => {
      const data: Treeview = await DirectoryService.getUserTreeview();
      const sortedDirectories = [...data.directories].sort((a,b) => a.id - b.id);
      const transformedData = sortedDirectories.map(dir => ({
        key: dir.id.toString(),
        title: dir.name,
        isLeaf: false,
        children: dir.transcripts?.length ? dir.transcripts.map(transcript => ({
          key: `${dir.id}-${transcript.id}`,
          title: transcript.name,
          isLeaf: true
        })) : []
      }))
      setTreeData(transformedData);
      console.log('transformedDataTest:',transformedData)
    }
    fetchData();
  },[]);

  const addIconsToTreeData = (data: TreeDataNode[]): TreeDataNode[] => {
      return data.map(node => ({
          ...node,
          icon: node.isLeaf ? <FileOutlined /> : <FolderOutlined />,
      }));
    };

  const onSelect: TreeProps['onSelect'] = (selectedKeys: React.Key[], info: any) => {
    (async() => {
      const selectedNode = info.node;
      console.log('info node',info.node)
      if(!selectedNode.children){
        try{
          const [,selectedTranscriptionId] = selectedNode.key.split('-');
          const transcription: Transcription = await TranscriptionService.getTranscriptionById(selectedTranscriptionId);
          console.log('DDDDDDDDDDDDDDDDDDDDDDDDDD',transcription);
          setSelectedTranscription(transcription);
        }
        catch(error) {
          console.error("Ошибка при получении содержимого файла:", error);
          setSelectedTranscription(null);
        }
      } 
    })()
  }

  useEffect(() => {
          const treeDataWithIcons = addIconsToTreeData(treeData);
          setTreeData(treeDataWithIcons);
          console.log('хуйня', treeData);
  }, [])

  const onExpand: DirectoryTreeProps['onExpand'] = (keys, info) => {
    console.log('Trigger Expand', keys, info);
  };

  return(
      <Tree
        switcherIcon={<DownOutlined />}
        onSelect={onSelect}
        showIcon
        blockNode
        treeData={treeData}
        className="min-w-full p-3 text-clip overflow-hidden"
        showLine />
  )
})
