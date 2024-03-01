import mongoose, { Schema } from "mongoose";

const buymodel = new Schema({
    name: {
        type: String
    },
    purchaseUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    productDetails: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }
})

export const BuyModel = mongoose.model('BuyItem', buymodel)

