import express from "express";
import dbConnect from "./dbConnection/dbconnect.js";
import router from "./src/users/users.routes.js";
import bodyParser from 'body-parser';
const app = express()
const port = 3000
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use("/api/v1/minikart", router)
app.listen(port, () => {
    dbConnect()
    console.log(`express app lisent in ${port}`)
})


