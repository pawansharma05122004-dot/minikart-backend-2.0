
import { CartModel } from "./addToCart.model.js";
const getCartDetails = async(req,res)=>{

    try {
        const data = await CartModel.find()
          res.staus(200).json({
            message:'item added successfully',
            result:data
          })
    } catch (error) {
        res.staus(500).json({
            message:'item added not successfully',
            result:error
          })
    }

}

export  {getCartDetails}