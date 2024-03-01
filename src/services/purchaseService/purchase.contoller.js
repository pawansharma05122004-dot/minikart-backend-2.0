import { BuyModel } from "./purchase.model.js"

const getBuyDetails = async (req, res) => {
    try {
        const { purchaseUser, productDetails } = req.body;
        const data = await BuyModel.findOneAndUpdate(
            { purchaseUser, productDetails },
            { $setOnInsert: { purchaseUser, productDetails } },
            { new: true, upsert: true }
        ).populate('purchaseUser', { name: 2, email: 1 })
         .populate('productDetails', { product_name: 1, price: 1 });

        res.status(200).json({
            message: 'Item order retrieved successfully',
            result: data
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: 'Error retrieving item order'
        });
    }
};

export {getBuyDetails}

