import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Logout.css"
const Logout = () => {
const navigate=useNavigate()
  const handleUser=()=>{
    localStorage.setItem("authorization","")
navigate("/")
  }
  return (
    <div id='logout-N'>
<p><em>Click ok to logout</em></p>
      <button onClick={handleUser}>Ok</button>
    </div>
  )
}

export default Logout