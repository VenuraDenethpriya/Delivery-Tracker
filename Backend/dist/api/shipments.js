import express from 'express';
import { createShipments, getShipments, getShipmentsById, patchShipments, updateShipments } from '../application/shipment.js';
import { asyncHandler } from '../utills.js';
export const shipmentRouter = express.Router();
shipmentRouter
    .route('/')
    .get(asyncHandler(getShipments))
    .post(asyncHandler(createShipments));
shipmentRouter
    .route('/:id')
    .get(asyncHandler(getShipmentsById))
    .put(asyncHandler(updateShipments))
    .patch(asyncHandler(patchShipments));
;
//# sourceMappingURL=shipments.js.map