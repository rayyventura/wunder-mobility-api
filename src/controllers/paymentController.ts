import { Request, Response } from "express";
import axios from 'axios'

export async function pay(req: Request, res: Response){

    const paymentData = req.body;
    const paymentDataId = await axios.post('https://37f32cl571.execute-api.eu-central-1.amazonaws.com/default/wunderfleet-recruiting-backend-dev-save-payment-data',paymentData)

    
    res.status(200).send(paymentDataId.data)
    }
   