import { Route, Routes } from 'react-router-dom';
import './App.css';
import { StartPage } from './pages/StartPage';
import { Layout } from 'antd';
import { Login } from './pages/Login';
import { Workspace } from './pages/Workspace';
import { UserEdit } from './pages/UserEdit';

function App() {

  const isLogin = true;

  return (
    <>
        <Layout className="flex flex-col bg-zinc-800 p-0 h-screen items-center" >
            {/* <Header className="flex p-0">
                <Navigation />
            </Header> */}
            
            {/* <Layout className="max-h-fit">
                {isLogin &&
                    <Sider className="bg-zinc-700 top-0 bottom-0 right-0 text-white" width={"15vw"}>
                        <LeftSideBar />
                    </Sider>
                 }
                

                <Content className="flex-1 bg-zinc-800 p-10"> */}
                  <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/startpage" element={<StartPage />} />
                    <Route path="/" element={<Workspace />} />
                    <Route path="/edit" element={<UserEdit />} />
                  </Routes>
                    
                  {/* </Content>

                {isLogin &&
                    <Sider className="bg-zinc-700 top-0 bottom-0 right-0" width={"15vw"}>
                        <RightSideBar />
                    </Sider>
                }
                
            </Layout> */}
        </Layout>
    </>
    );
}

export default App;
