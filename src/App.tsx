import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import { StartPage } from './pages/StartPage';
import { ConfigProvider } from 'antd';
import { Workspace } from './pages/WorkspacePage';
import { UserEdit } from './pages/UserPage';
import { AuthPage } from './pages/AuthPage';
import { darkTheme, lightTheme } from './utils/theme';
import { useEffect } from 'react';
import UserService from './utils/services/UserService';
import { observer } from 'mobx-react-lite';
import { useAppStore } from './utils/contexts/AppStoreProvider';


const App = observer(() => {

    const pathName = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        (async() => {
            if(pathName.pathname === '/login')
            return;

            if(!UserService.isTokenValid()) {
                navigate('/login');
            }

            await appStore.setAuthUser();
        })()

    }, [pathName])

    const appStore = useAppStore();

    useEffect(() => {
        document.body.className = appStore.THEME ? 'dark-theme' : 'light-theme';
        // Для отладки
        console.log('Current theme:', appStore.THEME ? 'dark' : 'light');
      }, [appStore.THEME]);

    // const IS_THEME_DARK = useSelector((state: any) => state.IS_THEME_DARK)


    return (
        <ConfigProvider theme={appStore.THEME === false ? lightTheme : darkTheme}>
            <Routes>
                <Route path='/*' element={<AuthPage />} />
                <Route path='/startPage' element={<StartPage/>}/>
                <Route path="/workspace" element={<Workspace />} />
                <Route path="/edit" element={<UserEdit />} />
            </Routes>
        </ConfigProvider>
    );
})

export default App;
