import { Router } from "express";
import paymentRouter from "./paymentsRouter.js";
import userRouter from "./userRouter.js";


const router = Router();

router.use(userRouter);
router.use(paymentRouter);

export default router;