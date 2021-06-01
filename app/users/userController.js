
import { createToken } from '../_auth/index.js';
import lodash from 'lodash';
const { pick } = lodash;
import * as service from './userService.js';

// exports.changePassword = async (req, res, next) => {
//     const { oldPassword, newPassword } = req.body;

//     const { password: currentPassword } = await User.findById(req.user.id);

//     if (currentPassword !== oldPassword) {
//         return res.status(422).json({ message: 'Ai introdus greșit parola curentă' });
//     } else {
//         await User.findOneAndUpdate({ _id: req.user.id }, { password: newPassword });
//         return res.status(200).json({ success: newPassword });
//     }
// };

export async function register(req, res, next) {
    try {
        const userData = pick(req.body, ['username', 'password', 'name', 'title', 'email', 'country',
            'city', 'address', 'phone', 'affiliation']);

        const user = await service.createUser(userData); 
        const token = createToken(user.toJSON());
        res.status(201).json({ ...user.toJSON(), token });
    } catch (err) {
        next(err);
    }
};

export async function getUser(req, res, next) {
    try {
        const { userId } = req.params;
        const user = await service.getUser(userId);
        res.json({ user });
    } catch (err) {
        next(err);
    }
};
export async function listUsers(req, res, next) {
    try {
        const user = await service.listUsers();
        res.json({ user });
    } catch (err) {
        next(err);
    }
};

export async function deleteUser(req, res, next) {
    try {
        const { userId } = req.params;
        const user = await service.deleteUser(userId);
        res.json({ user });
    } catch (err) {
        next(err);
    }
};
