import mongoose from 'mongoose';
import teamModel from '../teams/teamModel.js';
import userModel from '../users/userModel.js';
import { ALL_TASK_STATUSES, ALL_TASK_PRIORITIES } from '../_common/constants.js';

const { Schema } = mongoose;
const { ObjectId } = mongoose;

const taskSchema = new Schema({
    createdAt: Number,
    updatedAt: Number,
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    dueDate: {
        type: Date,
        required: true,
    },
    priority: {
        type: String,
        enum: ALL_TASK_PRIORITIES,
        required: true,
        default: 'Low'
    },
    status: {
        type: String,
        enum: ALL_TASK_STATUSES,
        required: true,
        default: 'To Do'
    },
    assignee: {
        type: ObjectId,
        ref: userModel,
    },
    reporter: {
        type: ObjectId,
        ref: userModel,
        required: true,
    },
    team: {
        type: ObjectId,
        ref: teamModel,
        required: true,
    }
}, {
    timestamps: { currentTime: () => new Date().getTime() },
});

export default mongoose.model('Task', taskSchema);
