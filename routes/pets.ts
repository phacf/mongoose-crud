import {Router} from 'express';
import {PetController} from '../controllers/petsController';

const pet = new  PetController();
export const router = Router();

router.route('/').post(pet.createPet)