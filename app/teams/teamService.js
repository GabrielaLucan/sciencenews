import Team from './teamModel.js';
import { getUser } from '../users/userService.js';

export async function listTeams() {
    return Team.find({}).exec();
}

export async function createTeam(teamData) {
    const team = new Team(teamData);
    return team.save();
}

export async function getTeam(teamId) {
    return Team.findById(teamId).exec();
}

export async function updateTeam(teamId, teamData) {
    return Team.findByIdAndUpdate(teamId, teamData).exec();
}

export async function deleteTeam(teamId) {
    return Team.findByIdAndDelete(teamId).exec();
}

export async function listTeamMembers(teamId) {
    return Team.findOne({ _id: teamId }, 'members').exec();
}

export async function addTeamMember(teamId, memberId, role) {
    return Team.findByIdAndUpdate(
        teamId,
        { $push: { "members": { id: memberId, role } } },
        { safe: true, upsert: true }
    ).exec();
}

export async function getTeamMemberRole(teamId, memberId) {
    const team = await Team.findOne({ _id: teamId, 'members.id': memberId }, 'members').exec();
    return team?.members
        ?.find((members) => members.id?.toString() === memberId.toString())
        ?.role;
}

export async function deleteTeamMember(teamId, memberId) {
    return Team.findByIdAndUpdate(teamId,
        { $pull: { "members": { id: memberId } } },
        { safe: true, multi: true }).exec();
}

export async function getTeamCoordinator(teamId) {
    const team = await Team.findOne({ _id: teamId }, 'coordinatorId').exec();
    return getUser(team.coordinatorId);
}
