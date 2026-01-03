import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("")
    const Navigate= useNavigate()

    function handleLogin(){
        if(email==="admin@gmail.com" && password==="admin1234"){
            // localStorage.setItem("isLoggedIn","True")
            alert("Login to Admin Page")
            Navigate("/adminDashboard")
        }else if(email==="customer@gmail.com" && password==="customer1234"){
           localStorage.setItem("isLoggedIn","True")
            alert("Login Succesful")
            Navigate("/Dashboard")
        }else{
            alert("Wrong Email or Password")
        }
    }
  return (
    <div>
       
        <h1>Login Page</h1>
      <input type="email" value={email} placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value) } style={{height:20, width:200, textAlign:"center"}}/> <br /> <br />
       <input type="password" value={password} placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value) } style={{height:20, width:200,textAlign:"center" }}/> <br /><br />
       <button onClick={handleLogin} style={{background:"blue", color:"white"}}>Login</button>
    
    </div>
  )
}

export default Login
