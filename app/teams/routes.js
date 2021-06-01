import express from 'express';
import { authenticate } from '../_auth/index.js';
import * as controller from './teamController.js';

const router = express.Router();

router.get('/teams', authenticate, controller.listTeams);
router.post('/teams', authenticate, controller.createTeam);
router.get('/teams/:teamId', authenticate, controller.getTeam);
router.put('/teams/:teamId', authenticate, controller.updateTeam);
router.delete('/teams/:teamId', authenticate, controller.deleteTeam);
router.get('/teams/:teamId/members', authenticate, controller.listTeamMembers);
router.post('/teams/:teamId/members', authenticate, controller.addTeamMember);
router.get('/teams/:teamId/members/:memberId/role', authenticate, controller.getTeamMemberRole);
router.get('/teams/:teamId/coordinator', authenticate, controller.getTeamCoordinator);
router.delete('/teams/:teamId/members/:memberId', authenticate, controller.deleteTeamMember);

export default router;