import { body, validationResult } from 'express-validator';
import { Test } from '../models/Test.model';

export const testValidation = [
    // Validation for 'district'
    body('district')
        .notEmpty().withMessage('District is required') 
        .isString().withMessage('District must be a string') 
        .isLength({ min: 3, max: 100 }).withMessage('District must be between 3 and 100 characters long'), 

    // Validation for 'mobileNumber'
    body('mobileNumber')
        .notEmpty().withMessage('Mobile number is required') 
        .matches(/^\d{10}$/).withMessage('Mobile number must be exactly 10 digits') 
        .custom(async (value) => {
            const existingTest = await Test.findOne({ mobileNumber: value });
            if (existingTest) {
                throw new Error('Mobile number already exists'); 
            }
            return true;
        }),
];

// // Middleware to handle validation errors
// export const validateRequest = (req, res, next) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//     }
//     next();
// };