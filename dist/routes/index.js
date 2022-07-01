import { Router } from "express";
import paymentRouter from "./paymentsRouter.js";
import userRouter from "./userRouter.js";
var router = Router();
router.use(userRouter);
router.use(paymentRouter);
export default router;
