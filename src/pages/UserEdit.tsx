import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Input } from "antd";

export function UserEdit(){
    return(
        <div className="flex flex-col justify-items-center" style={{width: "500px"}}>
            <Card title={<span className="text-white">Профиль</span>} className="bg-transparent border-white max-h-fit m-10 text-white w-full">
                <div className="flex flex-row space-x-5">
                    <Avatar icon={<UserOutlined/>} size={100} className="!w-1/3"></Avatar>
                    <div className="flex flex-col space-y-5 w-full">
                        Логин
                        <Input />
                        <Button type="primary">Сохранить</Button>
                    </div>
                </div>
            </Card>
        </div>
    )
}