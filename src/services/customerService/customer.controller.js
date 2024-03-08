import { CustomerModel } from "./customer.model.js";

const createOrder = async (req, res) => {
    try {
        const { name,
            address,
            phone_number,
            pinCode,
            locality,
            city,
            landmark,
            address_type,
            alternat_phone, } = req.body
        const data = await CustomerModel.create({
            name,
            address,
            phone_number,
            pinCode,
            locality,
            city,
            landmark,
            address_type,
            alternat_phone
        })
        await data.save();
        res.status(200).json(({
            message: 'Customer Order Get',
            result: data
        }))

    } catch (error) {
        res.status(500).josn({
            message: error
        })
    }
}

export { createOrder }