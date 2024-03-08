import mongoose, { Schema } from "mongoose";

const Customer = new Schema({
    name:{
        type:String,
        require:true
    },
    Address:{
        type:String,
        require:true
    },
    phoneNumber:{
        type:String,
        require:true
    },
    pinCode:{
        type:String,
        require:true
    },
    locality:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    landMark:{
        type:String,
        require:true
    },
    addressType:{
        type:String,
        require:true
    },

})