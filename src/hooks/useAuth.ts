import { useContext } from 'react'
import { AuthContext, AuthContextType } from '../store/AuthProvider';

const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);

    if(!context){
        throw new Error('useAuth error')
    }

    return context;
}

export default useAuth;
