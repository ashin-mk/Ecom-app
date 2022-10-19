import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logout from '../protectedcomponents/Logout'
import "./Headers.css"
const Headers = ({email}) => {
    const authToken=localStorage.getItem("authorization")
    const navigate=useNavigate()
  return (
    <div className='header'>
      
   <h1 id='ecart-Heading' onClick={()=>navigate("/products")}>E-CART!</h1>  
   <div id='rightBOx'>
     {authToken.length && 
        <div id='user-details'>{email}
        <div onClick={()=>navigate("/logout")}>Logout
          </div></div>
     }
    <button id='cart-N' onClick={()=>{navigate('/cart')}}>Cart</button>
    <button id='order-N' onClick={()=>{navigate('/order')}} >Orders</button>
    </div>   
    </div>
  )
}

export default Headers