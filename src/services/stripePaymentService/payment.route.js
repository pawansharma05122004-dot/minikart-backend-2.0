import { Router } from "express";
import { postPaymentDetails } from "./payment.controller.js";
const paymentRouter = Router()

paymentRouter.route('/postPayment').post(postPaymentDetails);

export default paymentRouter
