const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const {travelmodel} = require("./models/travel")

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://thasneemazeez:thasneem38@cluster0.uk9okno.mongodb.net/travelgdb?retryWrites=true&w=majority&appName=Cluster0")

app.get("/",(req,res)=>{
    res.send("hello")
})

app.post("/add",(req,res)=>{
    let input=req.body
    let travel=new travelmodel(input)
    travel.save()
    res.json({"status":"success"})
})

app.get("/view",(req,res)=>{
    travelmodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch((error)=>{
        res.json(error)
    })
})

app.listen(8080,()=>{
    console.log("server started")
})

