import React, { useContext } from 'react'
import { AuthContext } from '../../context/authContext'

const AccountPage = () => {
  const { removeToken } = useContext(AuthContext)
  const { decodedToken } = useContext(AuthContext)

  return (
    <div> <h3>welcome</h3> 
    <h4>{decodedToken.username}</h4>
    <button onClick={removeToken}>log out</button></div>
  )
}

export default AccountPage