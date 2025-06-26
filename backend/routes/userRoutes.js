
import express from 'express'
import { getProfile, loginUser, registerUser } from '../controllers/userController.js';
import { userAuth } from '../middleware/auth.js';

const userRoutes= express.Router();

userRoutes.post('/register', registerUser)
userRoutes.post('/login',loginUser);
userRoutes.get('/profile',userAuth,  getProfile);




export default userRoutes;