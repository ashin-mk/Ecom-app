const Products=require("../modals/itemSchema")
const cart=require("../modals/cartschema")
const express=require('express')
const router=express.Router()
const jwt=require('jsonwebtoken')
router.post('/Cart/add',(req,res)=>{
    // console.log(req.headers)
try {const useremail=jwt.verify(req.headers.authorization,process.env.SECRET_KEY)
    // console.log(useremail)
    // console.log(req.body)
cart.create({item_img:req.body.item_img,user:useremail,item_id:req.body.item_id }).then(()=>{
//    co
    res.status(200).send("item added succefully to cart")
})
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
        // console.log(data)
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