import React from 'react';
import { useState } from 'react';
import "./Login.css"
import { useNavigate } from 'react-router-dom';
import fetchData from "./urlGen"
const Login = () => {
  const [inputchange,setinput]=useState({})
  const [loading,setLoading]=useState(false)
  const [err,catcherr]=useState(false)
  const navigate=useNavigate()
  const handleinput=(e,id)=>{

setinput({...inputchange,[id]:e.target.value})
  }
  const handleoutput=(e)=>{
    e.preventDefault()
    setLoading(true)
    // console.log(inputchange)
    fetchData("POST","Login",false,inputchange).then(loginData=>{
  // console.log(loginData)
  localStorage.setItem("authorization",loginData.data.authtoken)
  setLoading(false)
  navigate("/products")
}).catch(()=>{
  setLoading(false)
  catcherr(true)
  navigate("/login")
})

  }
  return (
    <div id='login-page'>
      {!err && !loading &&  <>
     <h1 >E-CART!</h1>
     <p id='qs'>Don't Have An Account?</p>
     <button id="toSignup" onClick={()=>navigate("/")}>Signup</button>
     <div id="login-box">
      <form>
        <div className='login-details'>
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' required onChange={(e)=>handleinput(e,"Email")}></input>
        </div>
        <div className='login-details'>
        <label htmlFor='Password'>Password</label>
        <input type='password' required onChange={(e)=>handleinput(e,"Password")}></input>
        </div>
        <button onClick={handleoutput}>Login</button>
      </form>
      </div>
      </>}
      {err &&
        <div id='err'>
        <p>Some Error Occured !</p>
        <button onClick={()=>catcherr(false)}>Back</button>
        </div>
        }
         {
            loading && <div id='loading'>
                loading...
                </div>
        }
    </div>
  )
}

export default Login