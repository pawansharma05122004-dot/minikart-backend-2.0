
import { mongoose, Schema } from "mongoose";

const addToCart = new Schema({
     userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require:true,
        unique:true
    },
    productById: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        require:true,
        unique:true
    },
     quantity:{
        type:String
     }
})

export const CartModel = mongoose.model('addToCart', addToCart)