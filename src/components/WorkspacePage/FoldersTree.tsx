import { Tree, TreeDataNode } from "antd";
import { useEffect, useState } from "react"
import TranscriptionService from "../../utils/services/TranscriptionService";
import { DownOutlined, FileOutlined, FolderOutlined } from "@ant-design/icons";
export const FoldersTree = () => {
    const [treeData, setTreeData] = useState<TreeDataNode[]>();

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

    useEffect(() => {
        (async () => {
            const treeData = await TranscriptionService.getFoldersTree();
            const treeDataWithIcons = addIconsToTreeData(treeData);
            setTreeData(treeDataWithIcons);
        })()
    }, [])
    
    return(
        <Tree 
        switcherIcon={<DownOutlined />}
        showIcon
        blockNode
        treeData={treeData}
        className="min-w-full p-3 text-clip overflow-hidden"
        showLine />
    )
}