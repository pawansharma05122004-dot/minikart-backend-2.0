import { Router } from "express";
import { createOrder } from "./customer.controller.js";
const customerRouter = Router()


customerRouter.route('/createOrder').post(createOrder)

export default customerRouter;