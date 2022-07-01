import { Router } from "express";
import * as userController from '../controllers/userController.js';
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import userSchema from "../schema/userSchema.js";
var userRouter = Router();
userRouter.post('/register', validateSchemaMiddleware(userSchema), userController.register);
export default userRouter;
