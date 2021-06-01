import User from '../users/userModel.js';
import { Strategy as LocalStrategy } from 'passport-local';

export default new LocalStrategy(async (username, password, done) => {
    try {
        const user = await User.findOne({ username });
        if (!user) return done(null, false, { message: 'Utilizator inexistent' });

        const valid = await user.isValidPassword(password);
        if (!valid) return done(null, false, { message: 'Parolă greșită' });

        return done(null, user.toJSON());
    } catch (err) {
        done(err);
    }
});
