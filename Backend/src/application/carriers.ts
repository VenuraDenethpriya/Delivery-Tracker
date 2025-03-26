import { Request,Response,NextFunction } from "express";


export const getCarriers = async(req:Request,res:Response, next:NextFunction)=>{
    try {
        const Carriers = await Carriers.find();
        return res.json(Carriers);
        

    } catch (error) {
        next(error);
    }
}