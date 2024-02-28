import { ProductModel } from "./products.model.js"


const postProducts = async (req, res) => {
    try {
        const { product_name, price, product_type } = req.body
        const data = await ProductModel.create({ product_name: product_name, price: price, product_type: product_type })
        console.log(data)
        await data.save();
        res.status(200).json({
            mesaage: 'product add successfully'
        })

    } catch {
        res.status(500).json({
            mesaage: 'Error'
        })
    }
}

const getProducts = async (req, res) => {
    try {
        const data = await ProductModel.find()
        res.status(200).json({
            mesaage: data
        })

    } catch {
        res.status(500).json({
            mesaage: 'Error'
        })
    }
}

export  { postProducts, getProducts }
// module.exports = {postProducts: postProducts,getProducts: getProducts}
