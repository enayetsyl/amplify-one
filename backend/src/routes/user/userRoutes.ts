
import express from 'express';
import { registerUser } from '../../controllers/user.controller';
import { catchError } from '../../middlewares/catchError.middleware';


const router = express.Router();

// POST /api/v1/users/register - Register a new user
router.post('/register', catchError(registerUser));

export default router;
