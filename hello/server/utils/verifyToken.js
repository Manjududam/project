import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../model/user.model.js';

dotenv.config();
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || 'ABCD!@#';

export const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(404).json({ message: 'No token found' });
    }
    jwt.verify(token, JWT_SECRET_KEY, (err, decodedToken) => {
        if (err) {
            return res.status(400).json({ message: 'Invalid Token' });
        }
        req.id = decodedToken.userId;
        next();
    });
};

export const getUser = async (req, res, next) => {
    const userId = req.id;
    try {
        let user = await User.findById(userId, '-password');
        if (!user) {
            return res.status(404).send('The user with the given ID was not found.');
        }
        return res.status(200).json({ user });
    } catch (err) {
        return next(err);
    }
};
