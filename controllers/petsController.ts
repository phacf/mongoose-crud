import {petModel} from '../models/pet';
import {userModel} from "../models/user";
import { Request, Response } from "express";

export class PetController{
    async createPet( req: Request, res: Response){
        try {
            const {ownerID, name, type} = req.body;
            let owner = await userModel.findById(ownerID);
            if(!owner){
                return res.status(404).json({ msg:'n tem esse dono' });
            }

            const pet = new petModel({
                ownerID,
                name,
                type,
            });
            await pet.save();

            owner.pets.push(pet._id);
            await owner.save();

            return res.status(201).json({ pet });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ msg: "fodeu" });
        }
    }
}