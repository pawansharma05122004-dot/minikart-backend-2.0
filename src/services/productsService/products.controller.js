import { ProductModel } from "./products.model.js"
import { uploadOnCloudinary } from "../../utils/cloudnairy.js";

const postProducts = async (req, res, next) => {

    try {
        const { product_name, price,
            device_type,
            discount,
            product_description,
            brand
        } = req.body

        let avatarLocalPath = req.files.product_img[0].path;
        let thumbnailImage;

        if (req.files && Array.isArray(req.files.thumbnail) && req.files.thumbnail.length > 0) {
            thumbnailImage = req.files.thumbnail[0].path
        }
        if (!avatarLocalPath) {
            throw 'avatar is requires'
        }

        if (!thumbnailImage) {
            throw "thumbnail Image is required"
        }

        const avatar = await uploadOnCloudinary(avatarLocalPath)
        const thumbnail = await uploadOnCloudinary(thumbnailImage)


        const data = await ProductModel.create({
            product_img: avatar.url,
            product_name,
            price,
            device_type,
            discount,
            thumbnail: thumbnail?.url || "",
            product_description,
            brand
        })
        await data.save();
        res.status(200).json({
            mesaage: 'product add successfully'
        })
        next()
    } catch (err) {
        res.status(500).json({
            mesaage: err.message
        })
    }
}

const getProducts = async (req, res) => {
    try {
        const data = await ProductModel.find()
        res.status(200).json({
            result: data,
            message: 'success'
        })
    } catch (error) {
        res.status(500).json({
            mesaage: error.message
        })
    }
}

const getProductById = async (req, res) => {
    try {
        if (!req.body.productById) {
            res.status(404).json({
                mesaage: "prodcut id is not present",
            })
        }
        const data = await ProductModel.findById(req.body.productById)
        const relatedData = await ProductModel.find({ product_name: data.product_name })
        res.status(200).json({
            result: { data, relatedData },
            message: 'succes'
        })
    } catch (error) {
        res.status(500).json({
            mesaage: error.message
        })
    }
}

const searchPrduct = async (req, res) => {
    try {
        const searchItem = req.query.key;
        const result = await ProductModel.find({ $or: [{ product_name: searchItem }, { product_tyoe: searchItem }] })
        if (result.length !== 0) {
            res.status(200).json({
                result: result,
                message: 'Product Search Successfully'
            })
        } else {
            res.status(200).json({
                message: 'Item is not present'
            })
        }
    } catch (err) {
        res.status(500).json({
            result: err,
            message: 'Something went wrong'
        })
    }

}

export { postProducts, getProducts, getProductById, searchPrduct }

