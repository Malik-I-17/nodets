import express from 'express';

import { verifyToken } from '../middleware/verifyToken';
import { authentication } from '../middleware/authentication';
import {create} from '../controllers/sample.controller'
import{test} from '../controllers/test.controller'
import { errorValidation } from '../validations/errorValidation';
import { sampleValidation } from '../validations/sample.validation';
// import { demoquestion } from '../controllers/demoexamquestion.controller';
const router = express.Router();







router.post('/create', sampleValidation, errorValidation, create);
router.post('/test', test);
// router.post('/demoquestion', demoquestion);
export default router;
