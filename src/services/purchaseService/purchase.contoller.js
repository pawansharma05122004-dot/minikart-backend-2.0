import { BuyModel } from "./purchase.model.js"

const postBuyDetails =async(req,res)=>{
    try{
     const createBuyDetails =  await BuyModel.create({
        purchaseUser:req.body.purchaseUser,
        productDetails:req.body.productDetails
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

const getBuyDetails =async(req,res)=>{
    try{
     const data =  await BuyModel.find({
        purchaseUser:req.body.purchaseUser,
        productDetails:req.body.productDetails
    }).populate('purchaseUser',{ name: 2,email: 1 }).populate('productDetails',{product_name:1,price:1})

     res.status(200).json({
        message:'item order succesfully',
        result:data
     })
    }catch(err){
        throw err
    }
}

export {postBuyDetails,getBuyDetails}

