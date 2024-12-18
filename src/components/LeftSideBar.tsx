import { FileAddOutlined, FolderAddOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Divider, Dropdown, MenuProps, Modal, Space } from "antd";
import { useModal } from "../hooks/useModal";
import { CreateTranscription } from "./CreateTranscription";
import { CreateFolder } from "./CreateFolder";
import { Link, useNavigate } from "react-router-dom";
import { User } from "../lib/types";
import UserService from "../services/UserService";

type LeftSideBarProps = {
    authUser? : User | null,
    titles?: string[]
}


export function LeftSideBar({authUser, titles} : LeftSideBarProps) {

    const[isShowingAddTrans, toggleAddTrans] = useModal() 
    const[isShowingAddFordel, toggleAddFolder] = useModal()

    const navigate = useNavigate();
    
    const onLogoutUser = () => {
        UserService.logoutUser();
        navigate('/login'); 
        console.log('checkLogout')
    }

    const items: MenuProps['items'] = [
        {
          key: '1',
          label : (
            <Link to='/edit'>Редактировать профиль</Link>
          ) 
        },
        {
          key: '2',
          label: (
            <div onClick={onLogoutUser}>Выход</div>
          )
        },
      ];
    
    return(
        <>
            <div className="bg-transparent flex flex-col justify-center items-center w-full">
                <Space direction="vertical" size={'middle'} className="mt-6 h-full">
                    <Button className="min-w-[210px]" onClick={() => toggleAddTrans()} key={"addTranscription"}><FileAddOutlined />Добавить расшифровку</Button>   
                    <Button className="min-w-[210px]" onClick={() => toggleAddFolder()} key={"addFolder"}><FolderAddOutlined />Добавить папку</Button>
                </Space>

                <Divider className="border-white"/>
                    <ul className="text-white">
                        <li>{titles}</li>
                    </ul>
                <div className="absolute bottom-1 w-full">
                    {/* <Divider className="border-white"/> */}
                    <Dropdown menu={{items}} className="m-2">
                        <Card className="bg-zinc-700 m-2 border-zinc-500" size="small">
                            <div className="flex items-center space-x-4">
                                <Avatar icon={<UserOutlined />} size="default" className="ml-4" />
                                <div className="text-white overflow-hidden overflow-ellipsis max-w-[170px]">
                                    <p data-tooltip-target="">{authUser?.username}</p>
                                    <p>{authUser?.email}</p>
                                </div>
                            </div>
                        </Card>
                    </Dropdown>
                </div>         
            </div>

            <Modal title="Создание расшифровки"
                open={isShowingAddTrans}
                onCancel={toggleAddTrans}
                footer={[<Button className="w-full" type="primary">Расшифровать</Button>]}>
                    <CreateTranscription />
            </Modal>

            <Modal title="Создание папки"
                    open={isShowingAddFordel}
                    onCancel={toggleAddFolder}
                    footer={[<Button className="w-full" type="primary">Создать</Button>]}>
                <CreateFolder />
            </Modal>
        </>
    )
}