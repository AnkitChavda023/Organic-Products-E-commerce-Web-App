import {Router} from "express";
import { registerUser } from "../controllers/userRegister.controller.js";
import {upload} from "../middlewares/multer.middeleware.js"
const router = Router();

router.route("/register").post(registerUser)

export default router;