import mongoose, { connect } from "mongoose";

const dbConnect=()=>{
    try{
     mongoose.connect('mongodb://localhost:27017/miniKart')

    }catch(err){
        console.log(err)
    }



}
export default dbConnect;
