import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import fetchData from "./urlGen"
const Signup = () => {
    const navigate=useNavigate()
    const [err,catcherr]=useState(false)
    const [inputchange,setinputChange]=useState({})
    const handleInputchange=(e,id)=>{
setinputChange({...inputchange,[id]:e.target.value})
    }
    const handleoutput=(e)=>{
        e.preventDefault ()
        // console.log(inputchange)
        fetchData("POST","Signup",false,inputchange).then((r)=>{
navigate("/login")
        }).catch((error)=>{
            console.log(error)
            catcherr(!err)
        })
    }
  return (
    <div key="12">
      <Link to={"/products"}><h1 style={{"color":"grey","textAlign":"center"}}>E-CART!</h1></Link>
        {!err&&
        <form action=''>
            <div>
            <label htmlFor="Username">Username </label>
            <input type="text" required id='Username' name='Username' onChange={(e)=>handleInputchange(e,"Username")}></input>
            </div>
            <div>
                <label htmlFor="Email">Email </label>
                <input type="email" id="Email" name="Email" required onChange={(e)=>handleInputchange(e,"Email")}></input>
            </div>
            <div>
                <label htmlFor="Number">Number </label>
                <input id="Number" name="Number" required type="Number" minLength="10" maxLength="10" onChange={(e)=>handleInputchange(e,"Number")}></input>
            </div>
            <div>
                <label htmlFor="Password">Password </label>
                <input type="password" id="Password" name="Password" required onChange={(e)=>handleInputchange(e,"Password")}></input>
            </div>
            <button onClick={(e)=>handleoutput(e)}>Submit</button>
        </form>}
        {err &&
        <>
        <p>User Exist</p>
        <Link to={"/"}><button>Home</button></Link>
        </>
        }
       <div style={{fontSize:"12px",marginTop:"15px",}}>
        Already have an account?  
        <Link to="/login"><button>Login</button></Link></div>
    </div>
  )
}

export default Signup