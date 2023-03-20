import { Router } from 'express';

import authRoutes from './auth.routes';
import bookingRoutes from './booking.routes';
import busRoutes from './bus.routes';
import notificationRoute from './notification.routes';
import routesRoutes from './route.routes';
import terminalRoutes from './terminal.routes';
import userRoutes from './user.routes';


const routes = Router()

routes.use("/auth", authRoutes)
routes.use("/user", userRoutes)
routes.use("/bus", busRoutes)
routes.use("/booking", bookingRoutes)
routes.use("/route", routesRoutes)
routes.use("/terminal", terminalRoutes)
routes.use("/notification", notificationRoute)

export default routes