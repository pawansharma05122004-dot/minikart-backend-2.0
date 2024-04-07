import express from "express";
import dbConnect from "./src/dbConnection/dbconnect.js";
import router from "./src/services/usersService/users.routes.js";
import bodyParser from 'body-parser';
import cookieParser from "cookie-parser";
import cors from 'cors'
import 'dotenv/config'
import productRouter from "./src/services/productsService/products.route.js";
import cartRouter from "./src/services/addToCartService/addToCart.route.js";
import customerRouter from "./src/services/customerService/customer.route.js";
import orderRouter from "./src/services/orderSerivce/order.route.js";
import paymentRouter from "./src/services/stripePaymentService/payment.route.js";
const app = express()

const port = process.env.LOCAL_PORT


app.use(cors())
const options = {
    origin: [process.env.PRODUCTION_FRONTEND_URL]
}
app.use(cors(options))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(express.static('public'));
app.use(cookieParser())


//users router
app.use(`${process.env.BASE_URL}/users`, router)

//product router
app.use(`${process.env.BASE_URL}/products`, productRouter)

// cartRouter router
app.use(`${process.env.BASE_URL}/cartItem`, cartRouter)

// cartRouter router
app.use(`${process.env.BASE_URL}/customer`, customerRouter)

// Order router
app.use(`${process.env.BASE_URL}/order`, orderRouter)
//Order Payment
app.use(`${process.env.BASE_URL}/orderPayment`, paymentRouter)

app.get('/',(req,res)=>{
    res.json({message:'api is running'})
})
app.listen(port, async() => {
    await dbConnect()
    console.log(`express app lisent in ${port}`)
})


