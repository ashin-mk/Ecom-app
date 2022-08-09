const mongoose=require("mongoose")
const orderschema=mongoose.Schema({
    item:String,
    quantity:Number,
    image:String,
    price:String,
    item_id:String,
    email:String
})
const order=mongoose.model("orders",orderschema)
module.exports=order