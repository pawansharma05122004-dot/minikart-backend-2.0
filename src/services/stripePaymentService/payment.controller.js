
import Stripe from "stripe";
const stripe =Stripe(process.env.STRIPE_SECRET_KEY)

const postPaymentDetails =async(req,res)=>{
   try {

    const product =req.body
      const session = await stripe.checkout.sessions.create({
        payment_method_types :['card'],
        line_items:[
            {
                price_data:{
                    currency:"inr",
                    product_data:{
                        name:product.name
                    },
                    unit_amount:product.price*100
                },
                quantity:product.quantity
            },

        ],
        mode:'payment',
        success_url:'http://localhost:3008/paymentSuccess',
        cancel_url:"http://localhost:3008/addToCart"
      })
      res.json({
        id:session.id,
        meessage:'payment successfully'
      })
   } catch (error) {
       res.status(500).json({
        message:'somthing went to wrong'
       })
   }
}

export {postPaymentDetails}