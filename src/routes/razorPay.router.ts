import express from "express";

import { createOrder } from "../controllers/razorPay.controller";
import { authentication } from "../middleware/authentication";

const router = express.Router()


router.post('/create-order',authentication, createOrder)

export default router