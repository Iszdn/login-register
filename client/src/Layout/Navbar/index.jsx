import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'
import "./index.css"
const Navbar = () => {
  const { decodedToken } = useContext(AuthContext)
  const { removeToken } = useContext(AuthContext)
  
  return (
    <div className='navbar'>

      <Link to="/">home</Link>



      {
        decodedToken ? (<><Link to="/account">account</Link> <Link to="/admin">profile</Link>  <button onClick={removeToken} >log out</button></>) : (<> <Link to="/login">login</Link> <Link to="/register">sign up</Link></>)
      }

    </div>
  )
}

export default Navbar