import express from 'express';
import { userController } from '../controllers/index.js';
import { createUserValidator } from '../middlewares/index.js';

const router = express.Router();

router.route('/register').post(createUserValidator, userController.createUser)
router.route('/users').get(userController.getAll)

export default router;