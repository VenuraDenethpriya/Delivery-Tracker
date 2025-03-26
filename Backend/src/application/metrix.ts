import { Request,Response,NextFunction } from "express";


export const getMatrix = async(req:Request,res:Response, next:NextFunction)=>{
    try {
        const Matrix = await Matrix.find();
        return res.json(Matrix);

    } catch (error) {
        next(error);
    }
}