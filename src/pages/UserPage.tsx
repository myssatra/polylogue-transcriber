import { ArrowLeftOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Flex, FloatButton, Input, ConfigProvider, theme, Layout } from "antd";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

export const UserEdit = observer(() => {

    const navigate = useNavigate()
;
    return(
        <Layout style={{height: '100%'}}>
            <Flex className="w-full justify-center p-5">
                <Button icon={<ArrowLeftOutlined/>} onClick={() => navigate('/workspace')} />
                <div className="flex flex-col justify-items-center w-[500px]">
                    <Card title={<span >Профиль</span>} className="max-h-fit w-full">
                        <div className="flex flex-row space-x-5">
                            <Avatar icon={<UserOutlined/>} size={100} className="!w-1/3"></Avatar>
                            <div className="flex flex-col space-y-5 w-full">
                                Имя пользователя
                                <Input />
                                <Button type="primary">Сохранить</Button>
                            </div>
                        </div>
                    </Card>
                </div>
            </Flex>
        </Layout>
    )
})