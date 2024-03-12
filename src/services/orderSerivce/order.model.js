import mongoose, { Schema } from 'mongoose'

const orderSchema = new Schema({
    orderID: Schema.Types.ObjectId,
    customerDetails: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'customer',
    },
    cartDetails:
    {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'addToCart'
    },
    orderDate: {
        type: String,
        required: true
    },
    totalAmount: {
        type: Number,
        required: true,
        default: 0.0,
    },
},
    {
        timestamps: true,
    }
)
export const OrderModel = mongoose.model('Order', orderSchema)

