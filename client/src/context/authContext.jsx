import { createContext, useState } from "react";

export const AuthContext=createContext()


const AuthProvider = ({ children }) => {
const [user, setUser] = useState(null)
const [token, setToken] = useState(null)

const data={user,setUser}
    return (
      <AuthContext.Provider value={data}>
        {children}
      </AuthContext.Provider>
    );
  };

  export default AuthProvider