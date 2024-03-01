import { BuyModel } from "./purchase.model.js"

const postBuyDetails =async(req,res)=>{
    try{
     const createBuyDetails =  await BuyModel.create({
        purchaseUserById:req.body.purchaseUserById,
        productDetailsById:req.body.purchaseUserById
    })
    await createBuyDetails.save()
     res.status(200).json({
        message:'item order succesfully',
        result:createBuyDetails
     })
    }catch(err){
        throw err
    }

}

export {postBuyDetails}

