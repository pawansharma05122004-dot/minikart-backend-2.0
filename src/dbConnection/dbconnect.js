import mongoose, { connect } from "mongoose";

const dbConnect=async()=>{
    try{
     await mongoose.connect(process.env.MONGO_ATLAS_URL)
    }catch(error){
      throw error
    }
}
export default dbConnect;
