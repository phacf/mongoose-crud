import {Router} from 'express';
import {UserController} from '../controllers/userController';

const user = new UserController();
export const router = Router();

router.route('/').post(user.createUser).get(user.getAll);
router.route('/:name').get(user.getByName)
//router.route('/:id').post(asdfsad).get(asdfsafs)

//router.post('/', user.createUser);
