import { TreeDataNode } from "antd";

export const foldersTree: TreeDataNode[] = [
    {
        title: 'Folder1',
        key: '1',
        children: [
            {
                title: 'Interview with John Doe',
                key: '1-1'
            },
            {
                title: 'Tech Conference Keynote',
                key: '1-2'
            }
        ]
    },
    {
        title: 'Folder2',
        key: '2',
        children: [
            {
                title: 'Panel Discussion on AI',
                key: '2-1'
            }
        ]
    },
    {
        title: 'Folder3',
        key: '3',
        children: [
            {
                title: 'Comprehensive Transcript of the Strategic Planning Session',
                key: '3-1'
            }
        ]
    }
]
