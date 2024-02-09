const mongoose=require("mongoose")
const userSchema=new mongoose.Schema(
    {
    name:String,
    age:String,
    mobNo:String,
    address:String,
    pincode:String,
    emailid:String,
    password:String
   }
)

module.exports=mongoose.model("user",userSchema)