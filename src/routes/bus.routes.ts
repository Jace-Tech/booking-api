import { handleListBuses } from './../controllers/bus.controller';
import { Router } from 'express';


const busRoutes = Router()


// Routes Here
busRoutes.get("/", handleListBuses)



export default busRoutes