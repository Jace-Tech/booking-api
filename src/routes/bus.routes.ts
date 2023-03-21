import { handleListBuses, handleRouteListBuses } from './../controllers/bus.controller';
import { Router } from 'express';


const busRoutes = Router()


// Routes Here
busRoutes.get("/", handleListBuses)

// Route Buses
busRoutes.get("/:id", handleRouteListBuses)




export default busRoutes