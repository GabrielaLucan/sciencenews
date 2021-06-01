import lodash from 'lodash';
import * as service from './eventService';
const { pick } = lodash;

export async function listEvents(req, res, next) {
    try {
        const events = await service.listEvents();
        res.json({ events });
    } catch (err) {
        next(err);
    }
};

export async function createEvent(req, res, next) {
    try {
        const eventData = pick(req.body, ['name', 'description', 'location', 'date', 'fee', 'areaOfInterest', 'places', 'collaborators']);
        const event = await service.createEvent(eventData);
        res.status(201).json({ event });
    } catch (err) {
        next(err);
    }
};

export async function getEvent(req, res, next) {
    try {
        const { eventId } = req.params;
        const event = await service.getEvent(eventId);
        res.json({ event });
    } catch (err) {
        next(err);
    }
};

export async function updateEvent(req, res, next) {
    try {
        const { eventId } = req.params;
        const eventData = pick(req.body, ['name', 'description', 'location', 'date', 'areaOfInterest', 'places', 'collaborators']);
        const event = await service.updateEvent(eventId, eventData);
        res.json({ event });
    } catch (err) {
        next(err);
    }
};

export async function deleteEvent(req, res, next) {
    try {
        const { eventId } = req.params;
        const event = await service.deleteEvent(eventId);
        res.json({ event });
    } catch (err) {
        next(err);
    }
};

export async function registerToEvent(req, res, next) {
    try {
        const { eventId } = req.params;
        const registrationData = pick(req.body, ['name', 'email', 'title', 'abstract', 'accompanyingPerson', 'presentationType', 'country', 'phone']);
        const registration = await service.registerToEvent(eventId, registrationData);
        res.json({ registration });
    } catch (err) {
        next(err);
    }
};

export async function deregisterFromEvent(req, res, next) {
    try {
        const { eventId, registrationId } = req.params;
        const registration = await service.deregisterFromEvent(eventId, registrationId);
        res.json({ registration });
    } catch (err) {
        next(err);
    }
};

export async function updateRegistration(req, res, next) {
    try {
        const { eventId, registrationId } = req.params;
        const registrationData = pick(req.body, ['name', 'email', 'title', 'abstract', 'accompanyingPerson', 'presentationType', 'country', 'phone']);
        const registration = await service.updateRegistration(eventId, registrationId, registrationData);
        res.json({ registration });
    } catch (err) {
        next(err);
    }
};
