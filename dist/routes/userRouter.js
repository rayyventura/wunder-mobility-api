import { Router } from "express";
import * as userController from '../controllers/userController.js';
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import userSchema from "../schema/userSchema.js";
var router = Router();
router.post('/register', validateSchemaMiddleware(userSchema), userController.register);
export default router;
