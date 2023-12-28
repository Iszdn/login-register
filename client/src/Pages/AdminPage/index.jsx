import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AdminPage = () => {

  const [users, setUsers] = useState([])

  async function getUsers() {
    const res=await axios("http://localhost:5000/")
    const data=res.data
    setUsers(data)
  }
  useEffect(() => {
    getUsers()
  }, [])
  

  return (
    <>
{
  users && users.map((x)=>(
    <div className='users'>
    <h3>{x.username}</h3> <button >delete user</button>
    </div>
    
  ))
}
    </>
  )
}

export default AdminPage