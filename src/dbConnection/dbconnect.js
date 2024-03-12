import mongoose, { connect } from "mongoose";

const dbConnect=async()=>{
    try{
     await mongoose.connect(process.env.MONGO_ATLAS_URL)

    }catch(err){
        console.log(err)
    }



}
export default dbConnect;
