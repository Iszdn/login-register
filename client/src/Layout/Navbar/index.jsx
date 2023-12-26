import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'
import "./index.css"
const Navbar = () => {
const  {user}=useContext(AuthContext)

  return (
    <div className='navbar'>
      
        <Link to="/">home</Link>
        
       <Link to="/login">login</Link>
       
{
 user ? ( <><Link to="/account">account</Link>  <Link>log out</Link></>)  :  (<Link to="/register">sign up</Link> )
}
        
    </div>
  )
}

export default Navbar