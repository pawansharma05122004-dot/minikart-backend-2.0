import { Router } from "express";
import {getCartDetails} from './addToCart.controller.js'
const cartRouter =Router()

cartRouter.route('/addToCart').post(getCartDetails)

export default cartRouter;