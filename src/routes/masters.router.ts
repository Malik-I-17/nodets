import express from 'express';
import { verifyToken } from '../middleware/verifyToken';
import { authentication } from '../middleware/authentication';
import { categoryCreate } from '../controllers/masters/category.controller';
const router = express.Router();


router.post('/category', categoryCreate );
// router.post('/plan-details', plandetailsCreate );
// router.get('/get-userplan', planDetails);

export default router;
