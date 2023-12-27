import { createContext, useState } from "react";
import useLocalStorage from "../hook/useLocalStorage";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";

export const AuthContext=createContext()


const AuthProvider = ({ children }) => {
const [token, setToken] = useLocalStorage("user",null)
const [decodedToken, setDecodedToken] = useState(token ? jwtDecode(token) : null)

  useEffect(() => {
    try {
      setDecodedToken( jwtDecode(token))
    } catch (error) {
      console.log(error);
    }
  }, [token])
  

  function removeToken() {
    setToken(null)
    setDecodedToken(null)
    localStorage.removeItem("user")
  }


const data={removeToken,setToken,decodedToken}
    return (
      <AuthContext.Provider value={data}>
        {children}
      </AuthContext.Provider>
    );
  };

  export default AuthProvider