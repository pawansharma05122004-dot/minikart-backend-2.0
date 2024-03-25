
import { CartModel } from "./addToCart.model.js";

const postCartItem = async (req, res) => {
    try {
        const { userId, quantity, productId } = req.body;

        if (!userId) {
            return res.status(400).json({ message: "Please enter userId" });
        }

        if (!productId) {
            return res.status(400).json({ message: "Please enter productId" });
        }

        if (!quantity) {
            return res.status(400).json({ message: "Please enter quantity" });
        }

        let cartData = await CartModel.findOne({ userId: userId });
        
        if (cartData) {
            const isProductExist = cartData.products.some((product) => product.productId === productId);
            
            if (isProductExist) {
                console.log('Product already exists in the cart');
                return res.status(400).json({ message: 'Product already exists in the cart' });
            } else {
                cartData.products.push({ productId: productId, quantity: quantity });
            }

            const result = await cartData.save();

            res.status(201).json({
                message: 'Product added successfully',
                result: result
            });
        } else {
            const newCartItem = await CartModel.create({
                userId: userId,
                products: [{ productId: productId, quantity: quantity }],
            });

            res.status(201).json({
                message: 'Cart by UserId added successfully',
                result: newCartItem
            });
        }
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
        const data = await CartModel.find({ userId: userId }).populate('products.productId')

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