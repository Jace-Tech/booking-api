import { authMiddleware } from './../middlewares/auth.middleware';
import { Router } from 'express';
import { handleCreateTerminal, handleListTerminal } from '../controllers/terminal.controller';
import configs from '../configs';
const { roles } = configs;

const terminalRoutes = Router()


// Routes Here

// Create Terminal Route
terminalRoutes.post("/",  authMiddleware(roles.USER) as any, handleCreateTerminal)

// List Al Terminal Route
terminalRoutes.get("/", authMiddleware(roles.USER) as any, handleListTerminal)



export default terminalRoutes