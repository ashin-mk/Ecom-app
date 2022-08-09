const mongoose=require('mongoose')
const createuser=mongoose.Schema(
   { Username:String,
    Email:{
        type:String,
        required:true,
        unique:true
    },
    Number:Number,
    Password:String}
)
const User=mongoose.model('Users',createuser)
module.exports=User