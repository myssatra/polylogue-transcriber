import React, { useContext, useState, createContext, ReactNode } from 'react'

export type AuthContextType = {
  //user: User | null;
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}
  
type Props = { children: ReactNode}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children } : Props) => { 
    
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false); 

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);


  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>{children}</AuthContext.Provider>
  )

  }


  const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);

    if(!context){
        throw new Error('useAuth error')
    }

    return context;
}

export default useAuth;
