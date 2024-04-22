const mongoose=require("mongoose")
const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.DB_URL)
        console.log("DDBB connected")

    }
    catch (error){
        console.log("error in the connection with DDBB")

    }
}
module.exports={connectDB}