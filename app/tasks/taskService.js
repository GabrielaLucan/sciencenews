import Task from './taskModel.js';

export async function listTasks() {
    return Task.find({}).exec();
}

export async function createTask(taskData) {
    const task = new Task(taskData);
    return task.save();
}

export async function getTask(taskId) {
    return Task.findById(taskId).exec();
}

export async function updateTask(taskId, taskData) {
    return Task.findByIdAndUpdate(taskId, taskData).exec();
}

export async function deleteTask(taskId) {
    return Task.findByIdAndDelete(taskId).exec();
}
