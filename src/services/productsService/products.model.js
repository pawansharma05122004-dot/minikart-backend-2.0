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

    brand: {
        type: String
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    category: { type: String, required: true },
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
export const ProductModel = mongoose.model('Product', product)