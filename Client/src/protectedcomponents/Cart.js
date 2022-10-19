import React, { useEffect, useState } from 'react';
import "../unprotectedcomponents/product.css";
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
import fetchData from '../unprotectedcomponents/urlGen';
import Headers from '../unprotectedcomponents/Headers';
const Cart = () => {
  const [item,setitem]=useState([])
  const [email,setemail]=useState("")
  const authToken=localStorage.getItem("authorization")
  const navigate=useNavigate()
  // console.log(authToken)
 useEffect(()=>{
  fetchData("GET","Cart",true).then((items)=>{setitem(items.data.data)
    // console.log(items.data.data)
  setemail(items.data.email)}).catch((err)=>{
    console.log(err)
  })
  },[])
  const handleCart=(data)=>{
    fetchData("DELETE","cart/delete",true,{data:data}).catch((err)=>console.log(err))
navigate('/products')
  }
  
//  console.log(item)
  return (
    <div>
       <Headers email={email}/>
        <h4><em>Cart</em></h4>
        {item && 
        item.map((data,i)=>{
          return(
<div className='card' key={i}>
  <div className='content'>
  <div className='image-box'>
  <img className="image" src={data.item_img}/>
  </div>
  <div className='content-box'>
  <ul>
    <li>
     Item  : {data.item_name}
    </li>
    <li>Stock  :{data.in_Stock}</li>
    <li>Price  :{data.price}</li>
  </ul>
    <button onClick={()=>handleCart(data.item_id)}>
      delete
    </button>
    </div>
    </div>
  
  </div>
)
        })
      }
      {!item &&
      <div>
        the cart is empty
        </div>
      }
    </div>
  )
}

export default Cart