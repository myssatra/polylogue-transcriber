import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import { StartPage } from './pages/StartPage';
import { Layout } from 'antd';
import { Workspace } from './pages/Workspace';
import { UserEdit } from './pages/UserEdit';
import { LoginPage } from './pages/LoginPage';
import PrivateRoute from './store/PrivateRoute';
import AuthProvider from './store/AuthProvider';

function App() {

    // UserService.getUser(1).then((response) => {
    //     const emily = response;
      
    //     // Логиним пользователя
    //     UserService.loginUser(emily).then((response) => {
    //       console.log(response.data);
    //     })
    //   }).then(console.log);

    return (
        <Layout className="flex flex-col bg-zinc-800 p-0 items-center min-h-[100dvh]" >
            <AuthProvider>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route  path='/' element={<PrivateRoute/>}>
                        <Route path='/startPage' element={<StartPage/>}/>
                        <Route path="/" element={<Workspace />} />
                        <Route path="/edit" element={<UserEdit />} />
                    </Route>
                    {/* </AuthProvider> PrivateRoute element={<StartPage />} /> */}
                </Routes>
            </AuthProvider>
        </Layout>
    );
}

export default App;
