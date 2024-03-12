import { Router } from "express";
import { getOrderDetails, postOrderDetails } from "./order.controller.js";

const orderRouter = Router();

orderRouter.route('/getOrderDetails').post(getOrderDetails)
orderRouter.route('/postOrderDetails').post(postOrderDetails)

export default orderRouter