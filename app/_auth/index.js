import jwt from 'jsonwebtoken';
import passport from 'passport';
import dotenv from 'dotenv';
dotenv.config();

const { JWT_SECRET } = process.env;

export function createToken(user) {
    return jwt.sign({ user }, JWT_SECRET, {
        expiresIn: '7d',
    });
}

export function login(req, res, next) {
    passport.authenticate('local', (err, user, info) => {
        if (err) return next(err);

        if (!user) return res.status(401).json(info);
        const token = createToken(user);
        res.json({ token });
    })(req, res);
}

export function authenticate(req, res, next) {
    passport.authenticate('jwt', { session: false }, (err, user) => {
        if (err) return next(err);
        if (!user) return res.status(401).json({ message: 'Unauthorized' });
        req.user = user;
        next();
    })(req, res);
}
