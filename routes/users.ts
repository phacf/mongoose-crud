import {Router} from 'express';
import {UserController} from '../controllers/userController';

const user = new UserController();
export const router = Router();
/*
router.route('/').post(asdfsad).get(asdfsafs)
router.route('/:id').post(asdfsad).get(asdfsafs)
*/
router.post('/', user.createUser);
