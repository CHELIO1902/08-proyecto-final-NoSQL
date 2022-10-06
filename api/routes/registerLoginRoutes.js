import express from 'express';
import { registerController } from '../controllers/index.js';
import { createUserValidator } from '../middlewares/index.js';

const router = express.Router();

router.route('/register').post(createUserValidator, registerController.register)
router.route('/login').post(registerController.login)

export default router;