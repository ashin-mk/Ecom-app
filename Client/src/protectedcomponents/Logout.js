import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Logout = () => {
const navigate=useNavigate()
  const handleUser=()=>{
    localStorage.setItem("authorization","")
navigate("/")
  }
  return (
    <div>
      <Link to={"/products"}><h1 style={{"color":"grey","textAlign":"center"}}>E-CART!</h1></Link>
<p><em>Click ok to logout</em></p>
      <button onClick={handleUser}>Ok</button>
    </div>
  )
}

export default Logout