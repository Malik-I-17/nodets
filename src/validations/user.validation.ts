import { body, validationResult } from 'express-validator'
import { User } from "../models/User.model";


export const userValidation = [
    body('user_name').notEmpty().withMessage('Name is required').isString().withMessage('Name must be a string'),
    body('user_mobile').notEmpty().withMessage('Number is require').isInt().withMessage('Number must be integer').custom(
        async (item) => {
            const existingUser = await User.findOne({ user_mobile: item })
            if (existingUser) {
                throw new Error('User already exists')
            }
            return true
        }
    ),
    body('user_email').notEmpty().withMessage('Email is require').isEmail().withMessage('Invalid Email').custom(
        async (item) => {
            const existingUser = await User.findOne({ user_email: item })
            if (existingUser) {
                throw new Error('User already exists')
            }
            return true
        }
    ),
    body('user_organization').notEmpty().withMessage('organization is require')
]