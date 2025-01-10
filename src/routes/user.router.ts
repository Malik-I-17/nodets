import express from 'express';
import multer from 'multer';
const upload = multer();

import { updateProfile, userLogin, userRegisteration, verifyOtp } from '../controllers/user.controller';
import { authentication } from '../middleware/authentication';

const router = express.Router();


router.post('/register', userRegisteration);
router.post('/login', userLogin);
router.put('/upload-profile', authentication, upload.single('user_photo_url'), updateProfile);
router.put('/verify-otp', verifyOtp);

export default router;