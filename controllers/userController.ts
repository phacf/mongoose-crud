import {userModel} from '../models/user';
import {Request, Response} from "express";
import {dbConnect} from "../models/db";

export class UserController{

    async createUser(req: Request, res: Response){
        try{
            await dbConnect();
            const {user} = req.body;
            const person = new userModel({
                name:user.name,
                email:user.email
            });
            await person.save();
            return res.status(201).json({person});
        }
        catch(error){
        console.error(error);
            return res.status(500).json({msg:'fodeu'});
        };
    };
};