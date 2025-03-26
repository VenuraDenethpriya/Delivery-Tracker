import { ShipmentDTO } from "../domain/dto/shipmentDTO.js";
export const getShipments = async (req, res, next) => {
    try {
        const shipments = await Shipments.find();
        return res.json(shipments);
    }
    catch (error) {
        next(error);
    }
};
export const createShipments = async (req, res, next) => {
    try {
        const result = await ShipmentDTO.safeParse(req.body);
        if (!result.success) {
            return res.status(400).json(result.error);
        }
        const shipment = await Shipments.create(result.data);
        return res.json(shipment);
    }
    catch (error) {
        next(error);
    }
};
export const getShipmentsById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const shipments = await Shipments.findById(id);
        if (!shipments) {
            return res.status(404).json({ message: "Shipment not found" });
        }
        return res.json(shipments);
    }
    catch (error) {
        next(error);
    }
};
export const updateShipments = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await ShipmentDTO.safeParse(req.body);
        if (!result.success) {
            return res.status(400).json(result.error);
        }
        const shipments = await Shipments.findByIdAndUpdate(id, result.data, { new: true });
        if (!shipments) {
            return res.status(404).json({ message: "Shipment not found" });
        }
        return res.json(shipments);
    }
    catch (error) {
        next(error);
    }
};
export const patchShipments = async (req, res, next) => {
    try {
        const { id } = req.params;
        const shipments = await Shipments.findById(id);
        if (!shipments) {
            return res.status(404).json({ message: "Shipment not found" });
        }
        shipments.set(req.body);
        const updatedShipments = await shipments.save();
        return res.json(updatedShipments);
    }
    catch (error) {
        next(error);
    }
};
//# sourceMappingURL=shipment.js.map