import { Router } from "express";
import { getProductById, getProducts, postProducts,searchPrduct } from "./products.controller.js";
import { uploadStorage } from "../../middleware/multer.Middleware.js";
const productRouter = Router()


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
productRouter.route("/getProducts").get(getProducts);
productRouter.route("/getProductById").post(getProductById);
productRouter.route("/searchProduct").get(searchPrduct);


export default productRouter