const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")

const userRoute=require("./controllers/userRouter")

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://gowri:gowri123@cluster0.ysfaxj8.mongodb.net/userDb?retryWrites=true&w=majority",
{useNewUrlParser:true}
)

app.use("/api/user",userRoute)


app.listen(3002,()=>{
    console.log("Server Running")
})
