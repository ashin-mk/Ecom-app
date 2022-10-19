const User=require('../modals/CreateuserSchema')
const express=require('express')
const bcrypt=require("bcrypt")
const jwt=require('jsonwebtoken')
const salt=10
const router=express.Router()

router.post('/signup',async(req,res)=>{
  
        const data= await User.find({Email:req.body.Email})
    console.log(data)
if(data.length){
    res.status(400).send("user exist")
}else{
    bcrypt.genSalt(salt,(salterr,saltval)=>{
        if(!salterr){ 
            bcrypt.hash(req.body.Password,saltval,async(hasherr,hashval)=>{
                if (!hasherr){
               await User.create({Username:req.body.Username,Email:req.body.Email,Number:req.body.Number,Password:hashval})
                    res.status(200).send("User created Successfully")
                }else{
                    res.status(400).send("err")
                }
            })
        }
    })
}
    })

router.post('/login',async(req,res)=>{
    // console.log(req.body)
    const data=await User.find({Email:req.body.Email})
    if(data.length){
        // console.log(data)
        bcrypt.compare(req.body.Password,data[0].Password).then((val)=>{
            if(val){
                const authtoken =jwt.sign(data[0].Email , process.env.SECRET_KEY)
                    res.status(200).send({authtoken})
                    // res.redirect("/Products")
                    // console.log(authtoken)
            }else{
                res.status(400).send("Inavalid password")
            }
        })
    }else{
        res.status(400).send("USER DOESNOT EXIST")
    }
})



    
module.exports=router