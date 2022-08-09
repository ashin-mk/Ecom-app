import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './product.css'
import fetchData from './urlGen'

const Products = () => {
  const navigate=useNavigate()
  const authToken=localStorage.getItem("authorization")
  const [items,setitems]=useState([])
  const [email,setemail]=useState([])
  useEffect(()=>{
    fetchData("GET","Products",true).then((itemdata)=>{
setitems(itemdata.data.items)
setemail(itemdata.data.email)
    }).catch(()=>console.log("Unknown err"))
  },[])
  const handlecart=(item)=>{
// console.log(item)

// console.log(item)
// console.log(item._id)
const payload={
  item_id:item._id, item_img:item.image}
 
// console.log(payload)
fetchData("POST","Cart/add",true,payload).catch((err)=> {
  console.log(err)
})
navigate("/cart")
  }

  const handleBuy=(item)=>{
    if(item.in_Stock===0){
      console.log(item.in_Stock)
      navigate("/")
      return
    }
    if(authToken.length){
      const payload={
        item_id:item._id
      }

  fetchData("POST","product/buynow",true,payload).then(()=>{navigate("/order")})
  .catch((err)=>console.log(err))}
  else{
    navigate("/login")
  }
}
  return (
    <div>
     <header className='header'>
     <Link to={"/products"}><h1 style={{"color":"grey","textAlign":"center", overflow:"hidden"}}>E-CART!</h1></Link>
     {authToken.length && <>
      <Link to="/Logout"><button>Logout</button></Link>
     <div>{email}</div></>}
     <Link to={'/cart'}> <button className='cart'>Cart</button></Link>
     <Link to={'/order'}><button className='cart'>Orders</button></Link>
     </header>
      {
        items.map((data,i)=>{
          return(
<div className='card' key={i}>
  <img className="image" src={data.image}/>
  <ul>
    <li>
     Item  : {data.item_name}
    </li>
    <li>
    Discounted Price  : {data.discounted_price}
    </li>
    <li>
     Category : {data.category}
    </li>
    <li>Stock  :{data.in_Stock}</li>
    <li>Price  :{data.price}</li>
  </ul>
  <button onClick={()=>{handleBuy(data)}}>Buy Now</button>
  <button onClick={()=>handlecart(data)}>Add to cart</button>
  </div>)
        })
      }
    </div>
  )
}

export default Products