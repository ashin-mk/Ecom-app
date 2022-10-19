const Products=require("../modals/itemSchema")
const cart=require("../modals/cartschema")
const express=require('express')
const router=express.Router()
const jwt=require('jsonwebtoken')
router.post('/Cart/add',async(req,res)=>{
    // console.log(req.headers)
try {const useremail=jwt.verify(req.headers.authorization,process.env.SECRET_KEY)
   const data=await cart.find({item_id:req.body.item_id,user:useremail})
//    console.log(req.body)
   if(data.length){
    console.log("aaa")
    res.status(400).send("already exist in the cart")
   }else{
    await cart.create({item_img:req.body.item_img,user:useremail,item_id:req.body.item_id,item_name:req.body.item_name,price:req.body.price})
    res.status(200).send("item added succefully to cart")  
}
   
}
catch{
    res.status(400).send("Err")
}
})
router.get('/cart',(req,res)=>{
   try {
    const useremail=jwt.verify(req.headers.authorization,process.env.SECRET_KEY)
    //  console.log(useremail)
     cart.find({user:useremail}).then((data)=>{
       if(data.length){
        //  console.log(data)
        res.status(200).send({data:data,email:useremail})
       }
    else{
        res.send({email:useremail})
    }      
     })
   }catch{
res.send("unauthorized user")
   }
})
router.delete('/cart/delete',async(req,res)=>{
    const useremail=jwt.verify(req.headers.authorization,process.env.SECRET_KEY)
    // console.log(req.headers)
    const data=await cart.deleteOne({user:useremail,item_id:req.body.data})
    // console.log(req.body,useremail)
})
module.exports=router