import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../unprotectedcomponents/product.css";
import fetchData from '../unprotectedcomponents/urlGen';

const Orders = () => {
  const navigate=useNavigate()
    const authtoken=localStorage.getItem("authorization")
    const [item,setItem]=useState([])
    const [email,setemail]=useState()
    useEffect(()=>{
      fetchData("GET","order",true).then((items)=>{setItem(items.data.arr)

     setemail(items.data.email) }).catch((err)=>console.log(err))
  },[])
  // console.log(item)
  const handleCart=(id)=>{
    fetchData("DELETE","order/cancel",true,{itemid:id}).then(()=>navigate("/products"))
  }
    
  return (
    <div>
       <header className='header'>
       <Link to={"/products"}><h1 style={{"color":"grey","textAlign":"center", overflow:"hidden"}}>E-CART!</h1></Link>
        <Link to="/Logout"><button>Logout</button></Link>
       {authtoken.length && <p>{email}</p>}</header>
      <h4><em>Orders</em></h4>
     {item && 
     item.map((item,i)=>{
      return(
        <div key={i} >
    <div className="card1">
    <span> <img src={item.image} className="image1"/></span>
    <span className='itemname'><p className='para'>item : {item.item_id}</p>
    <p className='para'>Quantity:{item.quantity}</p>
    <p className='para'>Price:{item.price}</p>
    <button onClick={()=>handleCart(item.item_id)}>
      cancel order
    </button>
    </span>
    </div>
    </div>
      )
     }
     )
     }{item.length===0 &&
      <div>No Active orders</div>
     }
    </div>
  )
}

export default Orders