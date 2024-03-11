import { OrderModel } from "./order.model.js"

const getOrderDetails = async (req, res) => {
    try {
        const data = OrderModel.find()
        console.log(data)
        res.status(200).json({
            message: 'order get successfully',
            result: data
        })
    } catch (error) {
        res.status(500).json({
            message: error.message

        })
    }
}

const postOrderDetails = async (req, res) => {
    try {
        const { customerID, addToCartId } = req.body
        const data = OrderModel.create({
            customer: customerID, orderItems: addToCartId, totalAmount: totalAmount, orderDate: orderDate
        })
        await data.save()
        res.status(200).json({
            message: 'Order add succcesfully',
            result: data
        })
    } catch (error) {
        res.status(200).json({
            message: 'Order add succcesfully',
            result: data
        })
    }
}

export { getOrderDetails, postOrderDetails }