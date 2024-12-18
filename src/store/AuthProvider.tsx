import React, { createContext, PropsWithChildren, ReactNode, useContext, useState } from "react";

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

  // const [user, setUser] = useState<User | null>(null);

  // const login = (userData: User) => {
  //   setUser(userData);
  // } 

  // const logout = () => {
  //   setUser(null);
  // }

  return (
   <AuthContext.Provider value={{ isAuthenticated, login, logout }}>{children}</AuthContext.Provider>
  )
}

// export const useAuth = () => {
//   const context = useContext(AuthContext);

//   if(context === undefined){
//     throw new Error('useAuth use only with AuthContext')
//   }

// }

 export default AuthProvider;
