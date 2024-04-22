const express=require("express")
const { connectDB } = require("./src/config/db")
const { setError } = require("./src/config/error")
const app=express()
require("dotenv").config()
connectDB()

const PORT=4001

app.use("*", (req,res,next)=>{
    // return res.status(404).json("ruta no encontrada , vuelve a intentarlo")
    return next (setError(404,"route not found"))
})

app.use((error,req,res,next)=>{
    return res.status(error.status||500).json(error.message||"internal serve error")
})
app.listen(PORT,()=>{
    console.log(`escuchando el puerto ${PORT}`)
})