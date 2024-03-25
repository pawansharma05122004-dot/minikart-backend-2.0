import { Router } from "express";
import {signUp,logIn,logOutUser} from './users.controller.js'
// import verifyToken from '../../middleware/authMiddleware.js'
// import validate from '../middleware/validatior.js'
const router = Router()

router.route("/signUp").post(signUp);
router.route("/login").post( logIn);
router.route("/logOut").post( logOutUser);
export default router