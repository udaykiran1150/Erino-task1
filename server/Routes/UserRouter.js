import express from 'express';
import { AddUser,GetUsers } from '../Controllers/UserController.js';
import User from '../Models/UserModel.js';
const UserRouter = express.Router();

UserRouter.post('/add-user',AddUser)
UserRouter.get('/get-users',GetUsers)

export default UserRouter;