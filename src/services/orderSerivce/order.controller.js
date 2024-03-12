import { OrderModel } from "./order.model.js"

const getOrderDetails = async (req, res) => {
    try {
        const {userID}= req.body
        const data = await OrderModel.find({userID:userID}).populate('customerDetails').populate('cartDetails')
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
        const { customerID, cartItemsId,totalAmount,orderDate } = req.body
        const data = await OrderModel.create({
            customerDetails: customerID, cartDetails: cartItemsId, totalAmount: totalAmount, orderDate: orderDate
        })

        await data.save()
        res.status(200).json({
            message: 'Order add succcesfully',
            result: 'data'
        })
    } catch (error) {
        res.status(500).json({
            message: 'Order not  add succcesfully',
            result: ''
        })
    }
}

export { getOrderDetails, postOrderDetails }