import { handleAdminSignup, handleLogin } from './../controllers/auth.controller';
import { Router } from 'express';


const authRoutes = Router()


// Routes Here
authRoutes.post("/signup", handleAdminSignup)
authRoutes.post("/signin", handleLogin)



export default authRoutes