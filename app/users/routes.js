import express from 'express';
import { login, authenticate } from '../_auth/index.js';
import { validateLogin, validateRegister } from '../_common/validation.js';
import * as controller from './userController.js';

const router = express.Router();

router.post('/login', validateLogin, login);

router.post('/users', validateRegister, controller.register);
router.get('/users', authenticate, controller.listUsers);
router.get('/users/:userId', authenticate, controller.getUser);
router.delete('/users/:userId', authenticate, controller.deleteUser);

export default router;