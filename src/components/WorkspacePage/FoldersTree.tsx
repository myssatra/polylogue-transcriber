import { Tree, TreeDataNode, TreeProps } from "antd";
import { useEffect, useState } from "react"
import TranscriptionService from "../../utils/services/TranscriptionService";
import { DownOutlined, FileOutlined, FolderOutlined } from "@ant-design/icons";
import { Transcription } from "../../utils/lib/types";
import { DirectoryTreeProps } from "antd/es/tree";
import { useAppStore } from "../../utils/contexts/AppStoreProvider";
import { observer } from "mobx-react-lite";

export const FoldersTree = observer(() => {
    const [treeData, setTreeData] = useState<TreeDataNode[]>();
    const { setSelectedTranscription } = useAppStore();

    const addIconsToTreeData = (data: TreeDataNode[]): TreeDataNode[] => {
        return data.map(node => {
          const newNode = {
            ...node,
            icon: <FolderOutlined />,
          };
          if (newNode.children) {
            newNode.children = addIconsToTreeData(newNode.children).map( child => ({
              ...child,
              icon: <FileOutlined />
            }));
          }
          return newNode;
        });
      };

    const onSelect: TreeProps['onSelect'] = (selectedKeys: React.Key[], info: any) => {
      (async() => {
        const selectedNode = info.node;
        if(!selectedNode.children){
          try{
            const transcription: Transcription = await TranscriptionService.getTranscriptionByKey(selectedNode.key);
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
        (async () => {
            const treeData = await TranscriptionService.getFoldersTree();
            const treeDataWithIcons = addIconsToTreeData(treeData);
            setTreeData(treeDataWithIcons);
        })()
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