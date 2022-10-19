import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import fetchData from "./urlGen"
import "./Signup.css"
const Signup = () => {
    const navigate=useNavigate()
    const [err,catcherr]=useState(false)
    const [inputchange,setinputChange]=useState({})
    const [loading,setLoading]=useState(false)
    const handleInputchange=(e,id)=>{
setinputChange({...inputchange,[id]:e.target.value})
    }
    const handleoutput=(e)=>{
        setLoading(true)
        console.log("oworking",e)
        e.preventDefault ()
        // console.log(inputchange)
        fetchData("POST","Signup",false,inputchange).then((r)=>{
            catcherr(false)
            setLoading(false)
navigate("/login")
        }).catch((error)=>{
            console.log("error")   
            setLoading(false)
            catcherr(true)
           
        })
    }
    
  return (
    <div id='Signup-page'>
        {!err&& loading===false &&<>
        <div className='Signup-Heading'>
      <h1>E-CART!</h1>
      <p>Already have an account?</p> 
        <Link to="/login"><button>Login</button></Link></div>
        
        
        <div id='signup-form'>
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
            <button onClick={handleoutput}>Submit</button>
        </form>
        </div>
        </>}
        
        {err &&
        <div id='error'>
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

export default Signup