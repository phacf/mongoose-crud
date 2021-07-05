import { userModel } from "../models/user";
import { Request, Response } from "express";
//import { dbConnect } from "../models/db";

export class UserController {
  async createUser(req: Request, res: Response) {
    try {
      const { name } = req.body;
      const { email } = req.body;

      const person = new userModel({
        name: name,
        email: email,
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
        rawResult: true,
      };
      const person = await userModel.findOneAndUpdate(
        { name: name },
        fields,
        options
      );

      return res.status(200).json({ ...person });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: "fodeu" });
    }
  }
}
