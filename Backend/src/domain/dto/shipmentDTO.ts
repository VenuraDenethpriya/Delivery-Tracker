import { z } from "zod";

export const ShipmentDTO = z.object({
    trackingId: z.string(),
    carrier: z.string(),
    origin: z.string(),
    destination: z.string(),
    description: z.string().optional(),
    recipientName: z.string(),
    recipientEmail: z.string(),
});