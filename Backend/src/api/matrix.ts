import express from 'express';
import { asyncHandler } from '../utills.js';
import { getMatrix } from '../application/metrix.js';

export const MatrixRouter = express.Router();

MatrixRouter
        .route('/')
        .get(asyncHandler(getMatrix));