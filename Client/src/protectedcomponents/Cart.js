import React, { useEffect, useState } from 'react';
import "../unprotectedcomponents/product.css";
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
import fetchData from '../unprotectedcomponents/urlGen';
const Cart = () => {
  const [item,setitem]=useState([])
  const [email,setemail]=useState([])
  const authToken=localStorage.getItem("authorization")
  const navigate=useNavigate()
  // console.log(authToken)
 useEffect(()=>{
  fetchData("GET","Cart",true).then((items)=>{setitem(items.data.data)
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
        <header className='header'>
        <Link to={"/products"}><h1 style={{"color":"grey","textAlign":"center"}}>E-CART!</h1></Link>
        <Link to="/Logout"><button>Logout</button></Link>
        {authToken.length && <p>{email}</p>}</header>
        <h4><em>Cart</em></h4>
      {item && 
        item.map((data,i)=>{
return(
  <div key={i} >
    <div className="card1">
    <span> <img src={data.item_img} className="image1"/></span>
    <span className='itemname'>item : {data.item_id}
    <button onClick={()=>handleCart(data.item_id)}>
      delete
    </button>
    </span>
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