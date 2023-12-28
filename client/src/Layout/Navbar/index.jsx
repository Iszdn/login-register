import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'
import "./index.css"
const Navbar = () => {
  const { decodedToken } = useContext(AuthContext)
  
  
  return (
    <div className='navbar'>

      <Link to="/">home</Link>



      {
        decodedToken ? (<><Link to="/account">account</Link> 
        {
          decodedToken.role==="admin" && <Link to="/admin">admin</Link> 
        }
        
        </>) : (<> <Link to="/login">login</Link> <Link to="/register">sign up</Link></>)
      }

    </div>
  )
}

export default Navbar