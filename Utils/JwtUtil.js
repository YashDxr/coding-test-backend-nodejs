import jwt from 'jsonwebtoken';

const generateToken = (user) => {
    return jwt.sign({ id: user._id, username: user.username }, 'jwtSecret', { expiresIn: '1h' });
};

export { generateToken };
