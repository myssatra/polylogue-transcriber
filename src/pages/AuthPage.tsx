import { Card, ConfigProvider, Flex, Layout, Tabs } from "antd";
import { Registration } from "../components/AuthPage/RegistrationForm";
import { Login } from "../components/AuthPage/LoginForm"
import { observer } from "mobx-react-lite";
import { useAppStore } from "../utils/contexts/AppStoreProvider";
import { darkSideTheme, darkTheme, lightTheme } from "../utils/theme";

const { TabPane } = Tabs;
export const AuthPage = observer(() => {

    return(
        <Layout style = {{height: '100%'}}>
            <Flex vertical style={{width: '100%', justifyContent: 'center', alignItems: 'center', flexGrow: '1', padding: 10, height: '100%'}}> 
                <Card className="min-w-96">
                    <Tabs type="card">
                        <TabPane tab="Вход" key="1">
                            <Login />
                        </TabPane>
                        <TabPane tab="Регистрация" key="2">
                            <Registration />
                        </TabPane>
                    </Tabs>
                </Card>     
            </Flex>
        </Layout>
    )
})