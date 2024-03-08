
import { CartModel } from "./addToCart.model.js";

const postCartItem = async (req, res) => {
    try {
        const {userId, productById, quantity } = req.body;
        if (!userId) {
            return res.status(400).json({ message: "Please enter userId" });
        }
        if (!productById) {
            return res.status(400).json({ message: "Please enter productId" });
        }
        if (!quantity) {
            return res.status(400).json({ message: "Please enter quantity" });
        }

        const newCartItem = await CartModel.create({
            userId: userId,
            productById: productById,
            quantity: quantity
        });
        await newCartItem.save();

        res.status(201).json({
            message: 'Item added successfully',
            result: newCartItem
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error adding item to cart',
            error: error.message
        });
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
            result: error.message
        })
    }

}

export { getCartDetails, postCartItem }