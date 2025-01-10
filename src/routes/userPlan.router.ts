import express from 'express';
import { verifyToken } from '../middleware/verifyToken';
import { authentication } from '../middleware/authentication';
import {userplandetailsCreate,planDetails } from '../controllers/userPlanDetails.controller';
const router = express.Router();



router.post('/payment-details', userplandetailsCreate );
router.get('/get-payments', planDetails);

export default router;