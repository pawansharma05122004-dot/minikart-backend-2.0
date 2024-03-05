import { Router } from "express";
import {getCartDetails, postCartItem} from './addToCart.controller.js'
const cartRouter =Router()

cartRouter.route('/getaddToCart').post(getCartDetails)
cartRouter.route('/postCartItem').post(postCartItem)


export default cartRouter;