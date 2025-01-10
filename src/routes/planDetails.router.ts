import express from 'express';
import { verifyToken } from '../middleware/verifyToken';
import { authentication } from '../middleware/authentication';
import {plandetailsCreate } from '../controllers/planDetails.controller';
const router = express.Router();



router.post('/plan-details', plandetailsCreate );
// router.get('/get-userplan', planDetails);

export default router;
