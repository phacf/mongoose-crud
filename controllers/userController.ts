import { userModel } from "../models/user";
import { petModel } from '../models/pet'
import { Request, Response } from "express";

export class UserController {
  async createUser(req: Request, res: Response) {
    try {
      const { name } = req.body;
      const { email } = req.body;

      const person = new userModel({
         name,
         email,
      });

      await person.save();

      return res.status(201).json({ person });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: "fodeu" });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const allPersons = await userModel.find();

      return res.status(200).json({ ...allPersons });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: "fodeu" });
    }
  }
//fazer update sempre com _id apos usar getAll
  async getByName(req: Request, res: Response) {
    try {
      const { name } = req.params;
      const person = await userModel.find({ name: name });
      return res.status(200).json({ ...person });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: "fodeu" });
    }
  }

  async updateByName(req: Request, res: Response) {
    try {
      const { name } = req.params;
      const fields = req.body;

      const options = {
        new: true,
      };
      const person = await userModel.findOneAndUpdate(
        { name: name },
       fields,
        options
      ).lean();

      return res.status(200).json({ ...person });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: "fodeu" });
    }
  }

  async findAllPets(req: Request, res: Response){
    try{
      const {id} = req.params;
      const person = await userModel.findById(id).lean();
      if(!person){
        return res.status(404).json({msg: 'num achei ninguem'})
      }
      const allPets = await petModel.find().in('_id',person.pets)
      return res.status(200).json({allPets})
    }
    catch (error) {
      console.log(error);
      return res.status(500).json({ msg: "fodeu" });
    }
  }
}
