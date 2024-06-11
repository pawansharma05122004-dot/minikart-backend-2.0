import mongoose, { Schema } from "mongoose";

const product = Schema({
    product_id: Schema.Types.ObjectId,

    product_name: {
        type: String,
        require: true
    },

    product_img: {
        type: String,
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

    discount: {
        type: String
    },

    thumbnail: {
        type: String
    },

    product_description: {
        type: String,
    },

    features:{
     type:String
    },

    specifications:{
        type:{
            type:String
        },
    
        model:{
            
            type:String
        },
    
        brand: {
            type: String
        },
        sensivity:{
            type:String
        },
        weight:{
            type:String
        }
    },
    available_offers:{
        type:String,
        default:'No Offers'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    category: { type: String },
    reviews: [
        {
            name: { type: String, required: true },
            rating: { type: Number, required: true },
            comment: { type: String, required: true },
            user: {
                type: Schema.Types.ObjectId,
                required: true,
                ref: "User",
            },
        },
        {
            timestamps: true,
        },
    ],
},
    {
        timestamps: true
    })

product.index({product_description:'text',product_name:'text'})  
export const ProductModel = mongoose.model('Product', product)