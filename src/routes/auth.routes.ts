import { handleAdminSignup, handleLogin, handleRegisterInfo, handleSignup } from './../controllers/auth.controller';
import { Router } from 'express';


const authRoutes = Router()


// Routes Here
authRoutes.post("/signup/admin", handleAdminSignup)
authRoutes.post("/signin", handleLogin)
authRoutes.post("/signup", handleSignup)
authRoutes.post("/register-info", handleRegisterInfo)



export default authRoutes