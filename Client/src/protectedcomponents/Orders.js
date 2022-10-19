import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../unprotectedcomponents/product.css";
import fetchData from '../unprotectedcomponents/urlGen';
import Headers from '../unprotectedcomponents/Headers';

const Orders = () => {
  const navigate=useNavigate()
    const authtoken=localStorage.getItem("authorization")
    const [item,setItem]=useState([])
    const [email,setemail]=useState("")
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
      fetchData("GET","order",true).then((items)=>{setItem(items.data.arr)

     setemail(items.data.email) }).catch((err)=>console.log(err))
  },[])
  // console.log(item)
  const handleCart=(id)=>{
    setLoading(true)
    fetchData("DELETE","order/cancel",true,{itemid:id}).then(()=>navigate("/products"))
    .catch(()=>{setLoading(false);alert("some error occured")})
  }
    
  return (
    <div>
       <Headers email={email}/>
      <h4><em>Orders</em></h4>
      
     { loading && <div id='loading'>
                loading...
                </div>}

     {item && loading===false &&
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
     }{!item &&
      <div>No Active orders</div>
     }
    </div>
  )
}

export default Orders