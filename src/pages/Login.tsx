import { Button, Card, Tabs } from "antd";
import { LoginForm } from "../components/LoginForm";
import { RegistrationForm } from "../components/RegistrationForm";

const { TabPane } = Tabs;

export function Login(){
    return(
        <div className="flex flex-col items-center justify-center ">
            <Card className="min-w-96 m-52">
                <Tabs type="card">
                    <TabPane tab="Вход" key="1">
                        <LoginForm />
                        <Button className="w-full" type="primary">Войти</Button>
                    </TabPane>
                    <TabPane tab="Регистрация" key="2">
                        <RegistrationForm />
                        <Button className="w-full" type="primary">Зарегистрироваться</Button>
                    </TabPane>
                </Tabs>
            </Card>           
        </div>       
    )
}