import express from 'express';
import { signup, login } from '../Controllers/AuthController.js';
import { verifyToken } from '../Middlewares/AuthMiddleware.js';



const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);

//Protected route to test if only users with valid token can access the data or not.
router.get('/protected', verifyToken, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
});

export default router;