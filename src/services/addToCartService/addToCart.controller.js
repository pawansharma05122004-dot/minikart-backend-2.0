
import { CartModel } from "./addToCart.model.js";
const postCartItem = async (req, res) => {
    try {
        const { userId, productId, quantity } = req.body;
        if(!userId ){

            throw  'please enter userId'
        }

        if(!productId ){
            throw  'please enter productId'
        }
        if(!quantity ){
            throw  'please enter quantity'
        }
        const data = await CartModel.create(
            { userId: userId, productId: productId, quantity: quantity },

        )
        await data.save()
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
const getCartDetails = async (req, res) => {

    try {
        const { userId, } = req.body;
        console.log(userId)
        const data = await CartModel.find({ userId: userId })

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