const mongoose=require('mongoose')
const itemSchema=new mongoose.Schema({
item_name:String,
category:String,
price:Number,
discounted_price:Number,
in_Stock:Number,
image:String
})
const item=mongoose.model("Products",itemSchema)
module.exports=item