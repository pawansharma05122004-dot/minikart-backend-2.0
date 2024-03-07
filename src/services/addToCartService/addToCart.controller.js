
import { CartModel } from "./addToCart.model.js";
const postCartItem = async (req, res) => {
    try {
        const { userId, productById, quantity } = req.body;
        const productId = await CartModel.find({ productById })
        if (!userId) {
            throw res.status(404).json({
                message: "Please enter userId"
            })
        }
        if (!productById) {
            throw res.status(404).json({
                message: "Please enter productId"
            })
        }
        if (!quantity) {
            throw res.status(404).json({
                message: "Please enter quantity"
            })
        }
        if (productId) {
            res.status(200).json({
                message: 'Existing Cart Data',
                result: productId
            })
        } else {

            const data = await CartModel.create(
                { userId: userId, productById: productById, quantity: quantity },

            )
            await data.save()
            res.status(200).json({
                message: 'item added successfully',
                result: data
            })

        }

    } catch (error) {
        res.status(500).json({
            message: 'item added not successfully',
            result: error
        })
    }

}
const getCartDetails = async (req, res) => {

    try {
        const { userId, } = req.body;
        if (!userId) {
            throw 'userId is not present'
        }
        const data = await CartModel.find({ userId: userId }).populate('productById')

        res.status(200).json({
            message: 'item added successfully',
            result: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'item added not successfully',
            result: error
        })
    }

}

export { getCartDetails, postCartItem }