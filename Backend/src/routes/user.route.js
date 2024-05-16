import {Router} from "express";
import { registerUser } from "../controllers/userRegister.controller.js";
import { loginUser } from "../controllers/userRegister.controller.js";
import { logoutUser } from "../controllers/userRegister.controller.js";
// import {upload} from "../middlewares/multer.middeleware.js"
import multer from "multer";

const abc = multer();
const abcd = multer();
const abcde = multer();

const router = Router();

router.route("/register").post(abc.none() , registerUser);

router.route("/login").post(abcd.none(),loginUser);

router.route("/logout").post(abcde.none(),  logoutUser)

// router.route("/change-password").post(verifyJWT, changeCurrentPassword)

export default router;