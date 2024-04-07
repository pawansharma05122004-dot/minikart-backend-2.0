import { Router } from "express";
import {getCartDetails, postCartItem} from './addToCart.controller.js'
import verifyToken from "../../middleware/auth.Middleware.js";
const cartRouter =Router()

cartRouter.route('/getaddToCart').get(verifyToken,getCartDetails)
cartRouter.route('/postCartItem').post(verifyToken,postCartItem)


export default cartRouter;