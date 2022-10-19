const express=require('express')
const app=express()
// const jwt=require('jsonwebtoken')
// const bcrypt=require('bcrypt')
const mongoose=require('mongoose')
const multer=require('multer')()
const cors=require('cors')
const regUser=require('./routes/signup')
const Products= require('./routes/items')
const Cart=require("./routes/cart")
const order=require("./routes/Order")
require('dotenv').config()

app.listen(process.env.PORT || 3001 ,(err)=>{
   if(!err){ console.log("server is running")}
   else {console.log("error running server")}
})
//
const db="mongodb://localhost/ecom"

mongoose.connect(db,()=>{
    console.log("connected to mongodb")
},()=>{
    console.log("error connecting in mpongo db")
})
//body parser middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(multer.array()) //Multer is a middleware designed to handle multipart/form-data in forms. It is similar to the popular Node.js body-parser, which is built 
//into Express middleware for form submissions. But, Multer differs in that it supports multipart data, only processing multipart/form-data forms.
app.use(cors())

// app.get("/",(req,res)=>{
//     res.send("backend")
// })

app.use("/",regUser)
app.use("/",Products)
app.use('/',Cart)
app.use("/",order)
