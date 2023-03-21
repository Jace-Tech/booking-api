import { authMiddleware } from './../middlewares/auth.middleware';
import { Router } from 'express';
import { handleCreateTerminal, handleDeleteTerminal, handleListTerminal } from '../controllers/terminal.controller';
import configs from '../configs';
const { roles } = configs;

const terminalRoutes = Router()


// Routes Here

// Create Terminal Route
terminalRoutes.post("/",  authMiddleware(roles.USER) as any, handleCreateTerminal)

// List Al Terminal Route
terminalRoutes.get("/",  handleListTerminal)

// Delete Terminal Route
terminalRoutes.delete("/:id", authMiddleware(roles.ADMIN) as any, handleDeleteTerminal)



export default terminalRoutes