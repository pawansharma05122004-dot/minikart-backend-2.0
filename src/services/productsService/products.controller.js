import { ProductModel } from "./products.model.js"
import fs from 'fs';
import path from 'path'
import { uploadOnCloudinary } from "../../utils/cloudnairy.js";

const postProducts = async (req, res, next) => {
    try {
        const { product_name, price, product_type } = req.body
        console.log(req.file.path)
        const avatarLocalPath = req.file.path;

        if (!avatarLocalPath) {
            console.log('avatar file   is requires')
        }

        const avatar = await uploadOnCloudinary(req.file.path)
        console.log('contoller', avatar.url)
        const data = await ProductModel.create({
            product_img: avatar.url
            , product_name, price, product_type
        })

        await data.save();
        res.status(200).json({
            mesaage: 'product add successfully'
        })
        next()

    } catch (err) {
        throw err

    }
}

const getProducts = async (req, res) => {
    try {
        const data = await ProductModel.find()
        res.status(200).json({
            result: data,
            message: 'succes'
        })

    } catch {
        res.status(500).json({
            mesaage: 'Error'
        })
    }
}

const getProductById = async (req, res) => {
    console.log(req.body.productById)
    try {
        const data = await ProductModel.findById(req.body.productById)
        console.log(data)
        res.status(200).json({
            result: data,
            message: 'succes'
        })

    } catch {
        res.status(500).json({
            mesaage: 'Error'
        })
    }
}
export { postProducts, getProducts,getProductById }

