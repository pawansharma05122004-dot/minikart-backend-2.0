import mongoose, { Schema } from "mongoose";

const Customer = new Schema({
    name:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    phone_number:{
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

    city:{
        type:String,
        require:true
    },
    landmark:{
        type:String,
        require:true
    },
    address_type:{
        type:String,
        require:true
    },
    alternat_phone:{
        type:String,
        require:true
    },

})

export const CustomerModel = mongoose.model('customer',Customer)