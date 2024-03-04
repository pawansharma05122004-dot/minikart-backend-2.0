
import { mongoose, Schema } from "mongoose";

const addToCart = new Schema({
     userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
     quantity:{
        type:String
     }
})

export const CartModel = mongoose.model('addToCart', addToCart)