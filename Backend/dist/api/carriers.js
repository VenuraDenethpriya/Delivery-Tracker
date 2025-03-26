import express from 'express';
import { asyncHandler } from '../utills.js';
import { getCarriers } from '../application/carriers.js';
export const carrierRouter = express.Router();
carrierRouter
    .route('/')
    .get(asyncHandler(getCarriers));
//# sourceMappingURL=carriers.js.map