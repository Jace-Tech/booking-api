import { authMiddleware } from './../middlewares/auth.middleware';
import { Router } from 'express';
import { handleCreateTerminal, handleDeleteTerminal, handleListTerminal, handleUpdateTerminal } from '../controllers/terminal.controller';
import configs from '../configs';
const { roles } = configs;

const terminalRoutes = Router()


// Routes Here

// Create Terminal Route
terminalRoutes.post("/",  authMiddleware(roles.USER) as any, handleCreateTerminal)

// List All Terminal Route
terminalRoutes.get("/",  handleListTerminal)

// Update Terminal Route
terminalRoutes.patch("/:id", authMiddleware(roles.ADMIN) as any, handleUpdateTerminal)

// Update Terminal Route
terminalRoutes.put("/:id", authMiddleware(roles.ADMIN) as any, handleUpdateTerminal)

// Delete Terminal Route
terminalRoutes.delete("/:id", authMiddleware(roles.ADMIN) as any, handleDeleteTerminal)



export default terminalRoutes