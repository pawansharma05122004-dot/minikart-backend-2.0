
import { mongoose, Schema } from "mongoose";

const addToCart = new Schema(
    {
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true,

    },

    products:[ {
        productsId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            require: true,
            // unique: true,
        },

        quantity: {
            type: Number,
            default: 1
        },
    }],
    active: {
        type: Boolean,
        default: true
    },

    modifiedOn: {
        type: Date,
        default: Date.now
    }
},
    { timestamps: true }
)

export const CartModel = mongoose.model('addToCart', addToCart)



