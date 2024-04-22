const express=require("express")
const { connectDB } = require("./src/config/db")
const app=express()
require("dotenv").config()
connectDB()

const PORT=4001

app.use("*", (req,res,next)=>{
    return res.status(404).json("ruta no encontrada , vuelve a intentarlo")
})
app.listen(PORT,()=>{
    console.log(`escuchando el puerto ${PORT}`)
})