import mongoose, { Schema } from "mongoose";

const user = Schema({
    user_id: Schema.Types.ObjectId,
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: [true,'email is already exists'],
    },
    phone_number: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
    },
    customer: {
        type: Boolean,
        default:true
    },
},
    {
        timestamps: true
    })
export const UserModel = mongoose.model('User', user)