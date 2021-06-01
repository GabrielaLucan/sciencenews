import Event from './eventModel.js';
import Registration from './registrationModel';

export async function listEvents() {
    return Event.find({}).exec();
}

export async function createEvent(eventData) {
    const event = new Event(eventData);
    return event.save();
}

export async function getEvent(eventId) {
    return Event.findById(eventId).exec();
}

export async function updateEvent(eventId, eventData) {
    return Event.findByIdAndUpdate(eventId, eventData).exec();
}

export async function deleteEvent(eventId) {
    return Event.findByIdAndDelete(eventId).exec();
}

export async function registerToEvent(eventId, registrationData) {
    const registration = new Registration({ ...registrationData, eventId });
    return registration.save();
}

export async function deregisterFromEvent(eventId, registrationId) {
    return Registration.findByIdAndDelete(registrationId).exec();
}

export async function updateRegistration(eventId, registrationId, registrationData) {
    return await Registration.findOneAndUpdate({ _id: registrationId, eventId }, registrationData);
}

