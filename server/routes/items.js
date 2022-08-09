const express=require('express')
const router=express.Router()
const item=require('../modals/itemSchema')
const jwt=require('jsonwebtoken')

router.post('/Products/add',async(req,res)=>{
   await item.insertMany(req.body)
    res.status(200).send('Data added successfully')
    // console.log(req.body)
})
router.get('/Products',async(req,res)=>{
   const useremail=jwt.verify(req.headers.authorization,process.env.SECRET_KEY)
   const data= await item.find()
   res.status(200).send({items:data,email:useremail})
})
module.exports=router