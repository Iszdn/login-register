import React, { useContext } from 'react'
import { AuthContext } from '../context/authContext'
import {Navigate, Outlet} from "react-router-dom"
const PrivateRouter = () => {
    const {user}=useContext(AuthContext)
  return (
    
    user ? <Outlet/> : <Navigate to={"/register"}/>
  )
}

export default PrivateRouter    