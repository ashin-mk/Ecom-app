import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './product.css'
import Headers from './Headers'
import fetchData from './urlGen'

const Products = () => {
  const navigate=useNavigate()
  const authToken=localStorage.getItem("authorization")
  const [items,setitems]=useState([])
  const [email,setemail]=useState("")
  const [loading,setLoading]=useState(false)
  useEffect(()=>{
    fetchData("GET","Products",true).then((itemdata)=>{
      console.log(itemdata)
setitems(itemdata.data.items)
setemail(itemdata.data.email)
    }).catch(()=>console.log("Unknown err"))
  },[])
  const handlecart=(item)=>{
// console.log(item)

// console.log(item)
// console.log(item._id)
const payload={
  item_id:item._id, item_img:item.image,item_name:item.item_name,price:item.price}
 
// console.log(payload)
fetchData("POST","Cart/add",true,payload).catch((err)=> {
  console.log(err)
})
navigate("/cart")
  }

  const handleBuy=(item)=>{
    if(item.in_Stock===0){
      console.log(item.in_Stock)
      alert("Out of stock")
      return
    }
    if(authToken.length){
      const payload={
        item_id:item._id
      }
setLoading(true)
  fetchData("POST","product/buynow",true,payload).then(()=>{navigate("/order")})
  .catch((err)=>{setLoading(false);alert("some error occured")})}
}
  return (
    <div id='products'>
    <Headers email={email}/>
    {
      loading && <div id='loading'>
      loading...
      </div>
    }
      {items && loading===false &&
        items.map((data,i)=>{
          return(
<div className='card' key={i}>
  <div className='content'>
  <div className='image-box'>
  <img className="image" src={data.image}/>
  </div>
  <div className='content-box'>
  <ul>
    <li>
     Item  : {data.item_name}
    </li>
    <li>
     Category : {data.category}
    </li>
    <li>Stock  :{data.in_Stock}</li>
    <li>Price  :{data.price}</li>
  </ul>
  <button onClick={()=>{handleBuy(data)}}>Buy Now</button>
  <button onClick={()=>handlecart(data)}>Add to cart</button>
  </div>
  </div>
  </div>)
        })
      }
    </div>
  )
}

export default Products