import express from 'express';
import { authenticate } from '../_auth/index.js';
import * as controller from './taskController.js';

const router = express.Router();

router.get('/tasks', authenticate, controller.listTasks);
router.post('/tasks', authenticate, controller.createTask);
router.get('/tasks/:taskId', authenticate, controller.getTask);
router.put('/tasks/:taskId', authenticate, controller.updateTask);
router.delete('/tasks/:taskId', authenticate, controller.deleteTask);

export default router;