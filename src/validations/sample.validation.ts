import { body, validationResult } from 'express-validator';
import { Sample } from '../models/Sample.model';

export const sampleValidation = [
    body('name')
        .notEmpty().withMessage('Name is required')
        .isString().withMessage('Name must be a string')
        .custom(async (value) => {
            const existingSample = await Sample.findOne({ name: value });
            if (existingSample) {
                throw new Error('Name already exists');
            }
            return true;
        }),
    body('age').notEmpty().withMessage('Age is required').isInt().withMessage('Age must be an integer'),
];


