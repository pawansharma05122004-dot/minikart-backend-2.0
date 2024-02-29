import mongoose, { Schema } from "mongoose";

const product = Schema({
    product_id: Schema.Types.ObjectId,
    product_name: {
        type: String,
        require: true
    },
    product_img: {
        // data:Buffer,
        type:String,
    },
    price: {
        type: Number,
        require: true,
    },

    product_type: {
        type: {
            type: String,
            enum: ['electronic,fashions,beauty,accesories']
        }
    }

},
    {
        timestamps: true
    })
export const ProductModel = mongoose.model('Product', product)