const express=require("express")
const app=express();
const path=require("path")
const shoproutes=require("./routes/shop.js")
app.use((req, res ,next)=>{
const time=new  Date();
const day=time.getDay();
const hour=time.getHours();

if(day>=1 && day<=5 && hour>=7 && hour <=17)
next();
else(res.sendFile(path.join(__dirname,"pages","closed.html")))
})
app.use(shoproutes)
app.get("/pages/style.css",(req,res)=>{
    res.sendFile(path.join(__dirname,"pages","style.css"))
})
app.listen(3009,()=>{
    console.log("server running")
})
