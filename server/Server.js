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
mongoose.connect("mongodb+srv://Ashindeedu:ashin123@ashinmk.rxye7.mongodb.net/ecom?retryWrites=true&w=majority",()=>{
    console.log("connected to mongodb")
},()=>{
    console.log("error connecting in mpongo db")
})
//body parser middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(multer.array())
app.use(cors())

// app.get("/",(req,res)=>{
//     res.send("backend")
// })

app.use("/",regUser)
app.use("/",Products)
app.use('/',Cart)
app.use("/",order)
