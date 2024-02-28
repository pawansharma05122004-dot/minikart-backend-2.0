import { Router } from "express";
import { getProducts, postProducts } from "./products.controller.js";

const productRouter = Router()

productRouter.route("/postProduct").post(postProducts);
productRouter.route("/getProduct").get(getProducts);
// postProducts
// getProducts
export default productRouter