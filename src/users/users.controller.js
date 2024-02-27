import { UserModel } from "./users.model.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import  matches from "express-validator";
// import verifyToken from '../middleware/authMiddleware.js'

const signUp =async (req, res) => {
    try {
        const {name,email,password,customer} = req.body
        const hashPassword = await bcrypt.hash(password,10)
    //    const strongPassword = hashPassword.matches((/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/, "i").withMessage('Password should be combination of one uppercase , one lower case, one special char, one digit and min 8 , max 20 char long'))
        const user = new UserModel({name,email,customer,password:hashPassword});
        await user.save()
        res.status(200).json({ success: true, result: user })
    } catch (err) {
        console.log(err)
    }
}

const logIn = async (req, res) => {
    try {
        const {email ,password} = req.body;
        const user = await UserModel.findOne({email:email});
        console.log(user)
        if(!user){
            res.status(401).json({err:'Authontication Field'})
        }
        const passwordMatch =  await bcrypt.compare(password,user.password);
        if(!passwordMatch){
           return res.status(401).json({err:'Invalid Password'})
        }
        const token= jwt.sign({userId:user._id}, 'tarun@1234',{
            expiresIn:'1h'
        })
        console.log(token)
        res.status(200).json({ success: true, token: token,user:{
            user:user
        } })
    } catch (err) {
        res.status(500).json({error:'Login Field'})
    }
}

export { signUp,logIn }