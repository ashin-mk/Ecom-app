const express=require("express")
const jwt=require("jsonwebtoken")
const router=express.Router()
const products=require("../modals/itemSchema")
const order = require("../modals/OrderSchema")

router.get("/order", async(req,res)=>{
    // console.log(req)
    try {
        const email=jwt.verify(req.headers.authorization,process.env.SECRET_KEY)
        // console.log(email)
        const arr= await order.find({email:email})
        // console.log(arr)
        res.status(200).send({arr:arr,email:email})
        
    } catch (error) {
        res.status(400).send({email:email})
        console.log(error)
    }
})
router.post("/product/buynow", async(req,res)=>{
    try {
       const email=jwt.verify(req.headers.authorization,process.env.SECRET_KEY)
    //    console.log(req.body)
       const item= await products.find({_id:req.body.item_id})
       let count=item[0].in_Stock
       count=count-1
await products.updateOne({_id:item[0]._id},{in_Stock:count})
await order.create({item:item[0].item_name,
    quantity:1,
    image:item[0].image,
    price:item[0].price,
    item_id:item[0]._id,
email:email})

    res.status(200).send("successfully ordered")
    //    if(item_id.) 
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})
router.delete("/order/cancel",async(req,res)=>{
try {
   const email=jwt.verify(req.headers.authorization,process.env.SECRET_KEY)
   const item=await products.find({_id:req.body.itemid}) 
   count=item[0].in_Stock
   count++
   await products.updateOne({_id:req.body.itemid},{in_Stock:count})
   await order.deleteOne({item_id:req.body.itemid})
   res.status(200).send("successfully cancelled order")
} catch (error) {
    res.status(400).send("unauthorized user")
}
})
module.exports=router