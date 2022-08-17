import { Request,Response,NextFunction } from 'express'
import data from '../data/data.json'
import { Data } from '../interface/datat.interface';

export class dataController{
     public static async getDataHandler(req:Request,res:Response){
        try {
            let newData:Data[] = await data;
             res.status(200).json(newData)
        } catch (error) {
            res.status(200).json({
               error: true,
               message:
                 "Data is not avaliable",
             });
        }
     }
     public static async getDataByNameHandler(req:Request,res:Response){
         try { 
           const newData:Data = await data.find((item)=>item.fname.toLowerCase()==req.params.name.toLowerCase() || item.lname.toLowerCase()==req.params.name.toLowerCase() )!
            if(newData){
               res.status(200).json(newData)
            }else{
               res.status(404).json({
                    message:"name is not available"
               })
            }
         } catch (error) {
          res.status(200).json({
               error: true,
               message:error,
             });
        
         }
     }
}