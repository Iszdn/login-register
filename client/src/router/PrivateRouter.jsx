import React, { useContext } from 'react'
import { AuthContext } from '../context/authContext'
import {Navigate, Outlet} from "react-router-dom"
const PrivateRouter = ({roles}) => {
    const {decodedToken}=useContext(AuthContext)

  return (
    
    decodedToken  && roles.includes(decodedToken.role) ? <Outlet/> : <Navigate to={"/"}/>
  )
}

export default PrivateRouter    