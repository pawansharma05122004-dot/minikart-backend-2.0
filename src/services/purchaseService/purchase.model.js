import mongoose, { Schema } from "mongoose";

const buymodel = new Schema({
    name: {
        type: String
    },
    purchaseUserById: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    productDetailsById: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }
})

export const BuyModel = mongoose.model('BuyItem', buymodel)

