import lodash from 'lodash';
const { pick } = lodash;
import * as service from './taskService.js';
import { ALL_TASK_STATUSES } from '../_common/constants.js';


export async function listTasks(req, res, next) {
    try {
        const tasks = await service.listTasks();
        res.json({ tasks });
    } catch (err) {
        next(err);
    }
};

export async function createTask(req, res, next) {
    try {
        const taskData = pick(req.body, ['name', 'description', 'dueDate', 'priority', 'assignee', 'reporter']);
        taskData.status = 'To Do';
        const task = await service.createTask(taskData);
        res.status(201).json({ task });
    } catch (err) {
        next(err);
    }
};

export async function getTask(req, res, next) {
    try {
        const { taskId } = req.params;
        const task = await service.getTask(taskId);
        res.json({ task });
    } catch (err) {
        next(err);
    }
};

export async function updateTask(req, res, next) {
    try {
        const { taskId } = req.params;
        const taskData = pick(req.body, ['name', 'description', 'dueDate', 'priority', 'assignee', 'reporter', 'status']);

        if (taskData.status && !ALL_TASK_STATUSES.includes(taskData.status)) {
            return next({ err: 'Status is not accepted' });
        }
        const task = await service.updateTask(taskId, taskData);
        res.json({ task });
    } catch (err) {
        next(err);
    }
};

export async function deleteTask(req, res, next) {
    try {
        const { taskId } = req.params;
        const task = await service.deleteTask(taskId);
        res.json({ task });
    } catch (err) {
        next(err);
    }
};
