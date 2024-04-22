const express=require("express")
const app=express()
const PORT=4001
app.use("*", (req,res,next)=>{
    return res.status(404).json("no tengo respuesta")
})
app.listen(PORT,()=>{
    console.log("escuchando el puerto")
})