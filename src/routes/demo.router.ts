import express from 'express';
import { verifyToken } from '../middleware/verifyToken';
import { authentication } from '../middleware/authentication';
import { getQuestions, questionCreate } from '../controllers/demoExamQuestion.controller';
const router = express.Router();



router.post('/create', questionCreate);
router.get('/get-question', getQuestions);

export default router;