const mongoose=require('mongoose')
const itemSchema=new mongoose.Schema({
item_name:String,
category:String,
id:Number,
price:Number,
description:String,
in_Stock:Number,
image:String
})
const item=mongoose.model("Products",itemSchema)
module.exports=item