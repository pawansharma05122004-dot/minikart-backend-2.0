import express from "express";
import dbConnect from "./dbConnection/dbconnect.js";
import router from "./src/services/usersService/users.routes.js";
import bodyParser from 'body-parser';
import cors from 'cors'
import productRouter from "./src/services/productsService/products.route.js";
const app = express()
const port = 8000
app.use(cors())
const options = {
    origin: 'http://localhost:3008',
    }
    app.use(cors(options))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(express.static('public'));
app.use("/api/v1/minikart/users", router)
app.use("/api/v1/minikart/products", productRouter)
app.listen(port, () => {
    dbConnect()
    console.log(`express app lisent in ${port}`)
})


