import mongoose, { Schema } from "mongoose";

const product = Schema({
    product_id: Schema.Types.ObjectId,

    product_name: {
        type: String,
        require: true
    },
    product_img: {
        type:String,
        require: true
    },

    price: {
        type: Number,
        require: true,
    },

    device_type: {
        type: {
            type: String,
            enum: ['electronic,fashions,beauty,accesories']
        }
    },
    discount:{
        type:String
    },

    thumbnail:{
        type:String
    },
    product_description: {

        type:String,
    },

    brand:{
      type:String
    },

    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",

      },


},
    {
        timestamps: true
    })
export const ProductModel = mongoose.model('Product', product)