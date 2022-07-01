import { Router } from "express";
import * as paymentController from '../controllers/paymentController.js';
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import paymentSchema from "../schema/paymentSchema.js";
var paymentRouter = Router();
paymentRouter.post('/payment/data', validateSchemaMiddleware(paymentSchema), paymentController.pay);
export default paymentRouter;
