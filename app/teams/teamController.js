import lodash from 'lodash';
const { pick } = lodash;
import * as service from './teamService.js';

export async function listTeams(req, res, next) {
    try {
        const teams = await service.listTeams();
        res.json({ teams });
    } catch (err) {
        next(err);
    }
};

export async function createTeam(req, res, next) {
    try {
        const teamData = pick(req.body, ['department', 'coordinatorId', 'members']);

        const team = await service.createTeam(teamData);
        res.status(201).json({ team });
    } catch (err) {
        next(err);
    }
};

export async function getTeam(req, res, next) {
    try {
        const { teamId } = req.params;
        const team = await service.getTeam(teamId);
        res.json({ team });
    } catch (err) {
        next(err);
    }
};

export async function updateTeam(req, res, next) {
    try {
        const { teamId } = req.params;
        const teamData = pick(req.body, ['department', 'coordinatorId']);
        const team = await service.updateTeam(teamId, teamData);
        res.json({ team });
    } catch (err) {
        next(err);
    }
};

export async function deleteTeam(req, res, next) {
    try {
        const { teamId } = req.params;
        const team = await service.deleteTeam(teamId);
        res.json({ team });
    } catch (err) {
        next(err);
    }
};

export async function listTeamMembers(req, res, next) {
    try {
        const { teamId } = req.params;
        const members = await service.listTeamMembers(teamId);
        res.json({ members });
    } catch (err) {
        next(err);
    }
};

export async function addTeamMember(req, res, next) {
    try {
        const { teamId, memberId } = req.params;
        const { role } = req.body;
        const member = await service.addTeamMember(teamId, memberId, role);
        res.json({ member });
    } catch (err) {
        next(err);
    }
};

export async function getTeamMemberRole(req, res, next) {
    try {
        const { teamId, memberId } = req.params;
        const members = await service.getTeamMemberRole(teamId, memberId);
        res.json({ members });
    } catch (err) {
        next(err);
    }
};
export async function deleteTeamMember(req, res, next) {
    try {
        const { teamId, memberId } = req.params;
        const member = await service.deleteTeamMember(teamId, memberId);
        res.json({ member });
    } catch (err) {
        next(err);
    }
};
export async function getTeamCoordinator(req, res, next) {
    try {
        const { teamId } = req.params;
        const coordinator = await service.getTeamCoordinator(teamId);
        res.json({ coordinator });
    } catch (err) {
        next(err);
    }
};
