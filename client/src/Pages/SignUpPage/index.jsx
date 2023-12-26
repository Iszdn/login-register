import React, { useState } from 'react'

const SignUPPage = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleRegister=async (username,password)=>{
    const res=await fetch("http://localhost:5000/register",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
    body:JSON.stringify({username,password}),
    });

    const data=await res.json()
    console.log(data);
  };
  
  const HandleSubmit=(e)=>{
    e.preventDefault()
    setPassword("")
    setUsername("")
    console.log(username,password);
    handleRegister(username,password);
  }


  return (
    <div>
    <h2>Sign Up</h2>
    <form action="" onSubmit={HandleSubmit}>
        <label htmlFor="">Username</label>
        <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} />
      <br />
        <label htmlFor="">Password</label>
        <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <br />
        <button>sign up</button>
    </form>
</div>
  )
}

export default SignUPPage