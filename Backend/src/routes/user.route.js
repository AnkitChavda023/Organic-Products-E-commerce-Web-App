import {Router} from "express";
import { registerUser } from "../controllers/userRegister.controller.js";
import {upload} from "../middlewares/multer.middeleware.js"
import multer from "multer";

const abc = multer();

const router = Router();

router.route("/register").post(abc.none() , registerUser);

export default router;