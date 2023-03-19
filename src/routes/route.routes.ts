import { authMiddleware } from './../middlewares/auth.middleware';
import { handleCreateRoute, handleCreateRouteBus } from './../controllers/route.controller';
import { Router } from 'express';
import configs from '../configs';
const { roles } = configs;


const routesRouter = Router()


// Routes Here
// Create Terminal Route
routesRouter.post("/", authMiddleware(roles.ADMIN) as any, handleCreateRoute)

// Create Route's Bus Route
routesRouter.post("/:id/bus", authMiddleware(roles.ADMIN) as any, handleCreateRouteBus)



export default routesRouter