import { Router } from "express";
import { getProductById, getProducts, postProducts,checkTimeout } from "./products.controller.js";
import { uploadStorage } from "../../middleware/multer.Middleware.js";
const productRouter = Router()

getProductById
productRouter.route("/postProduct").post(uploadStorage.fields([
    {
        name: "product_img",
        maxCount: 1
    },
    {
        name: "thumbnail",
        maxCount: 4
    }
]), postProducts);
productRouter.route("/getProduct").get(getProducts);
productRouter.route("/getProductById").post(getProductById);
productRouter.route("/checkTimeout").post(checkTimeout);


export default productRouter