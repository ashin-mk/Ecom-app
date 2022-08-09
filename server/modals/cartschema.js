const mongoose=require("mongoose")
const cartschema=new mongoose.Schema({
    item_img:String,
    user:String,
    item_id:String
})
const cart=mongoose.model("cart",cartschema)
module.exports=cart