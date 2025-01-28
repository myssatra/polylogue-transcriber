import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { ConfigProvider, theme } from "antd";

const PrivateRoute =  () => {
    const { isAuthenticated } = useAuth();
    console.log(isAuthenticated)

    return isAuthenticated ? (
        <Outlet />   
    ) : (<Navigate to={'/login'} />)
}

export default PrivateRoute;