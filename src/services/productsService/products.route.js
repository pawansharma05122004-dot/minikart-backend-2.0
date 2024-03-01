import { Router } from "express";
import { getProducts, postProducts } from "./products.controller.js";
import { uploadStorage } from "../../middleware/multer.Middleware.js";
const productRouter = Router()


productRouter.route("/postProduct").post(uploadStorage.single("file"),postProducts);
productRouter.route("/getProduct").get(getProducts);

export default productRouter