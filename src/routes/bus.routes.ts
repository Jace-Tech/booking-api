import { authMiddleware } from '../middlewares/auth.middleware';
import { handleDeleteBus, handleListBuses, handleRouteListBuses, handleUpdateBus } from './../controllers/bus.controller';
import { Router } from 'express';
import configs from '../configs';
const { roles } = configs;

const busRoutes = Router()


// Routes Here
busRoutes.get("/", handleListBuses)

// Route Buses
busRoutes.get("/:id", handleRouteListBuses)

// Route Buses
busRoutes.delete("/:id", authMiddleware(roles.ADMIN) as any, handleDeleteBus)
busRoutes.get("/:id", handleRouteListBuses)

// Route Buses
busRoutes.patch("/:id", authMiddleware(roles.ADMIN) as any, handleUpdateBus)
busRoutes.put("/:id", authMiddleware(roles.ADMIN) as any, handleUpdateBus)




export default busRoutes