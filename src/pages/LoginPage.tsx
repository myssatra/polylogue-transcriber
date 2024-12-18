import { Card, Tabs } from "antd";
import { Registration } from "../components/Registration";
import { Login } from "../components/Login"

const { TabPane } = Tabs;

export function LoginPage(){

    return(
        <div className="flex flex-col items-center justify-center ">
            <Card className="min-w-96 m-52">
                <Tabs type="card">
                    <TabPane tab="Вход" key="1">
                        <Login />
                    </TabPane>
                    <TabPane tab="Регистрация" key="2">
                        <Registration />
                    </TabPane>
                </Tabs>
            </Card>     
        </div>       
    )
}