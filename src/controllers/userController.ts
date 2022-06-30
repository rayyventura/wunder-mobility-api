import { Request, Response } from "express";
import * as userService from '../services/userService.js';

export interface UserData{
firstName:string;
lastName:string;
phone:string;
street:string;
number:string;
zipCode:string;
city:string;
accountOwner:string;
iban:string
}

export async function register(req: Request, res: Response){

const data:UserData = req.body;

await userService.register(data)

res.sendStatus(201)
}