import mongoose from 'mongoose';
import userModel from '../users/userModel.js';
import { ALL_TEAM_MEMBERS_ROLES } from '../_common/constants.js';

const { Schema } = mongoose;

export const teamMemberSchema = new Schema({
    role: {
        type: String,
        enum: ALL_TEAM_MEMBERS_ROLES,
        required: true,
    },
    id: {
        type: ObjectId,
        ref: userModel,
        required: true,
    }
}, { _id: false });

const teamSchema = new Schema({
    createdAt: Number,
    updatedAt: Number,
    department: {
        type: String,
        required: true,
    },
    coordinatorId: {
        type: ObjectId,
        ref: userModel,
        required: true,
    },
    members: [teamMemberSchema]
}, {
    timestamps: { currentTime: () => new Date().getTime() },
});

export default mongoose.model('Team', teamSchema);
