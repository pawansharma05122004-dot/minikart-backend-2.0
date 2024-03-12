import { UserModel } from "./users.model.js";

import jwt from 'jsonwebtoken'
import matches from "express-validator";


const signUp = async (req, res) => {
    try {
        const { name, email, password, customer, phone_number } = req.body
        const user = new UserModel({ name, email, customer, password: password, phone_number });
        await user.save()
        res.status(200).json({ success: true, result: user })
    } catch (error) {
        res.status(500).json({
            mesaage: error.message
        })
    }
}

const logIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email: email });

        if (!user) {
            return res.status(401).json({ err: 'Authontication Field' })
        }
        const token = jwt.sign({ userId: user._id }, 'tarun@1234', {
            expiresIn: '1h'
        })

        res.cookie('token',token, { httpOnly: true, secure: true, maxAge: 3600000 })
        res.status(200).json({
            success: true, token: token, user: {
                user: user
            }
        })
    } catch (error) {
        res.status(500).json({
            mesaage: error.message
        })
    }
}

export { signUp, logIn }
