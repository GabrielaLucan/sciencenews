import express from 'express';
import { authenticate } from '../_auth/index.js';
import * as controller from './eventController.js';

const router = express.Router();

router.get('/events', authenticate, controller.listEvents);
router.post('/events', authenticate, controller.createEvent);
router.get('/events/:eventId', authenticate, controller.getEvent);
router.put('/events/:eventId', authenticate, controller.updateEvent);
router.delete('/events/:eventId', authenticate, controller.deleteEvent);

router.post('/events/:eventId/register', authenticate, controller.registerToEvent);
router.delete('/events/:eventId/register/:registrationId', authenticate, controller.deregisterFromEvent);
router.put('/events/:eventId/register/:registrationId', authenticate, controller.updateRegistration);


export default router;