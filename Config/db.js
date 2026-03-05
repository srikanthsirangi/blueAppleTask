const mongoose=require("mongoose")
const connectDB=async()=>{
    try{
    await mongoose.connect("mongodb+srv://srikanthsirangi7_db_user:ViWOWWnrxA5EgtR5@cluster0.mcvgvel.mongodb.net/SeatBooking?appName=Cluster0")
    console.log("Connected to the database")
    }catch{
        console.log("Error connecting to the database")
    }
}
module.exports=connectDB;
