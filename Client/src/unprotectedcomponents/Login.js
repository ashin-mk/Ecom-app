import React from 'react';
import { useState } from 'react';
import "./product.css"
import "../App.css"
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import fetchData from "./urlGen"
const Login = () => {
  const [inputchange,setinput]=useState({})
  const navigate=useNavigate()
  const handleinput=(e,id)=>{

setinput({...inputchange,[id]:e.target.value})
  }
  const handleoutput=(e)=>{
    e.preventDefault()
    // console.log(inputchange)
    fetchData("POST","Login",false,inputchange).then(loginData=>{
  // console.log(loginData)
  localStorage.setItem("authorization",loginData.data.authtoken)
  navigate("/products")
}).catch(()=>{
  navigate("/login")
})

  }
  return (
    <div>
      <Link to={"/products"}><h1 style={{"color":"grey","textAlign":"center"}}>E-CART!</h1></Link>
      <form>
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' required onChange={(e)=>handleinput(e,"Email")}></input>
        <label htmlFor='Password'>Password</label>
        <input type='password' required onChange={(e)=>handleinput(e,"Password")}></input>
        <button onClick={handleoutput}>Login</button>
      </form>
    </div>
  )
}

export default Login