import { Router } from 'express';
import { handleCreateTerminal } from '../controllers/terminal.controller';


const terminalRoutes = Router()


// Routes Here
terminalRoutes.post("/", handleCreateTerminal)



export default terminalRoutes