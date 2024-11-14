import { FileAddOutlined, FolderAddOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Divider, Menu, Modal, Space } from "antd";
import { useModal } from "../hooks/useModal";
import { CreateTranscriptionForm } from "./CreateTranscriptionForm";
import { CreateFolderForm } from "./CreateFolderForm";

export function LeftSideBar(){

    const[isShowingAddTrans, toggleAddTrans] = useModal() 
    const[isShowingAddFordel, toggleAddFolder] = useModal()
    
    return(
        <div>
            <div className="bg-transparent">
                <Space direction="vertical" size={'middle'} className="w-2/3 m-3 h-full">
                    <Button className="w-full" onClick={() => toggleAddTrans()} key={"addTranscription"}><FileAddOutlined />Добавить расшифровку</Button>   
                    <Button className="w-full" onClick={() => toggleAddFolder()} key={"addFolder"}><FolderAddOutlined />Добавить папку</Button>
                </Space>
                <Divider className="border-white"/>
                <div className="absolute bottom-4 w-full">
                    <Divider className="border-white"/>
                    <div className="flex items-center space-x-4">
                        <Avatar icon={<UserOutlined />} size="default" className="ml-4" />
                        <div className="text-white">
                            <p>UserName</p>
                            <p>email@gmail.com</p>
                        </div>
                    </div>
                </div>         
            </div>

            <Modal title="Создание расшифровки"
                open={isShowingAddTrans}
                onCancel={toggleAddTrans}
                footer={[<Button className="w-full" type="primary">Расшифровать</Button>]}>
                    <CreateTranscriptionForm />
            </Modal>

            <Modal title="Создание папки"
                    open={isShowingAddFordel}
                    onCancel={toggleAddFolder}
                    footer={[<Button className="w-full" type="primary">Создать</Button>]}>
                <CreateFolderForm />
            </Modal>
        </div>
    )
}