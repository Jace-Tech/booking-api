import { authMiddleware } from './../middlewares/auth.middleware';
import { handleListUsers } from './../controllers/user.controller';
import { Router } from 'express';
import { handleDeleteUser } from '../controllers/user.controller';
import configs from '../configs';
const { roles } = configs;

const userRoutes = Router()


// Routes Here

// List All Users Route
userRoutes.get("/", authMiddleware(roles.USER) as any, handleListUsers)

/* A route that deletes a user. */
userRoutes.delete("/:id/delete", authMiddleware(roles.ADMIN) as any, handleDeleteUser)


export default userRoutes