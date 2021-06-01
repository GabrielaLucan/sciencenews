import User from './userModel.js';

export async function createUser(userData) {
    const user = new User(userData);
    return user.save();
}

export async function getUser(userId) {
    return User.findById(userId).exec();
}

export async function deleteUser(userId) {
    return User.findByIdAndDelete(userId).exec();
}

export async function listUsers() {
    return User.find({}).exec();
}
