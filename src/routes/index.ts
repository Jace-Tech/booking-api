import { Router } from 'express';

import notificationRoute from './notification.routes';


const routes = Router()

routes.use("/notification", notificationRoute)

export default routes