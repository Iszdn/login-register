import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AdminPage = () => {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    const res = await axios.get("http://localhost:5000/");
    const data = res.data;
    setUsers(data);
  }

  async function deleteUser(id) {
    try {
      await axios.delete(`http://localhost:5000/${id}`);
      getUsers(); 
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      {users &&
        users.map((user) => (
          <div className='users' key={user._id}>
            <h3>{user.username}</h3>
            <button onClick={() => deleteUser(user._id)}>Delete User</button>
          </div>
        ))}
    </>
  );
};

export default AdminPage;
