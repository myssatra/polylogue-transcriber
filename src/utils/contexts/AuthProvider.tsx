import React, { createContext, ReactNode, useContext, useState } from "react";

export type AuthContextType = {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

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
    throw new Error('')
  }

  return context;

}
 