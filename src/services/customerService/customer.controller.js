import { CustomerModel } from "./customer.model.js";

const createCustomerDetail = async (req, res) => {
    try {
        const { name,
            address,
            phone_number,
            pinCode,
            locality,
            city,
            landmark,
            address_type,
            alternat_phone,
            addressArea,
            userID
        } = req.body
        
        const data = await CustomerModel.create({
            name: name,
            address: address,
            phone_number: phone_number,
            pinCode: pinCode,
            locality: locality,
            city: city,
            landmark: landmark,
            address_type: addressArea,
            alternat_phone: alternat_phone,
            user: req.userId
        })
        await data.save();
        res.status(200).json(({
            message: 'Customer Order Get',
            result: data
        }))

    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}
const getCustomerDetail = async (req, res) => {
    try {
        const result = await CustomerModel.find({user:req.userId})
        if (result) {
            res.status(200).json({
                success: true,
                messsge: 'Customer Get Successfully',
                result: result
            })
        }
    } catch (err) {
        res.status(500).json({
            message: err
        })
    }
}

export { createCustomerDetail, getCustomerDetail }