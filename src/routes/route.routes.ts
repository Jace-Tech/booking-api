import { authMiddleware } from './../middlewares/auth.middleware';
import { handleCreateRoute } from './../controllers/route.controller';
import { Router } from 'express';


const routesRouter = Router()


// Routes Here
routesRouter.post("/", authMiddleware(["admin"]) as any, handleCreateRoute)



export default routesRouter