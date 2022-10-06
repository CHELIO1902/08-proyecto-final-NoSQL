import express from 'express';
import { userController } from '../controllers/index.js';

const router = express.Router();

router.route('/users').get(userController.getAll)
router.route('/users/:id')
    .get(userController.getUserById)
    .put(userController.updateUserById)
    .delete(userController.deleteUserById)

export default router;