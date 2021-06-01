import mongoose from 'mongoose';
import eventModel from './eventModel.js';
import { PRESENTATION_TYPE } from '../_common/constants.js';

const { Schema } = mongoose;

const registrationSchema = new Schema({
    createdAt: Number,
    updatedAt: Number,
    eventId: {
        type: ObjectId,
        ref: eventModel,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    title: {
        type: String
    },
    abstract: {
        type: String
    },
    accompanyingPerson: {
        type: String,
    },
    areaOfInterest: {
        type: String,
        enum: PRESENTATION_TYPE,
        required: true,
    },
    country: {
        type: String
    },
    phone: {
        type: String
    }
}, {
    timestamps: { currentTime: () => new Date().getTime() },
});

export default mongoose.model('Registration', registrationSchema);
