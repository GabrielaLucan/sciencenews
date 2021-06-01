import mongoose from 'mongoose';
import userModel from '../users/userModel.js';
import { ALL_AREA_OF_INTEREST } from '../_common/constants.js';

const { Schema } = mongoose;

const eventSchema = new Schema({
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
    location: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    fee: {
        type: String,
        required: true,
    },
    areaOfInterest: {
        type: String,
        enum: ALL_AREA_OF_INTEREST,
        required: true,
    },
    places: {
        type: Number,
        required: true
    },
    collaborators: [{
        type: ObjectId,
        ref: userModel,
        required: true,
    }]
}, {
    timestamps: { currentTime: () => new Date().getTime() },
});

export default mongoose.model('Event', eventSchema);
