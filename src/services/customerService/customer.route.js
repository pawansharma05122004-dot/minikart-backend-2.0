import { Router } from "express";
import { createCustomerDetail,getCustomerDetail } from "./customer.controller.js";
import verifyToken from '../../middleware/auth.Middleware.js' 
const customerRouter = Router()

customerRouter.route('/createCustomerDetail').post(verifyToken,createCustomerDetail);
customerRouter.route('/getCustomerDetail').get(verifyToken,getCustomerDetail);

export default customerRouter;