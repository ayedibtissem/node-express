const express=require("express")
const router=express.Router();
const path=require("path")
router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"../","pages","home.html"))
}

)
router.get("/contact",(req,res)=>{
    res.sendFile(path.join(__dirname,"../","pages","contact.html"))
}

)
router.get("/ourServices",(req,res)=>{
    res.sendFile(path.join(__dirname,"../","pages","services.html"))
}

)


module.exports=router;