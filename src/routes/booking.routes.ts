import { handleBooking, handleGetBooking } from './../controllers/booking.controller';
import { Router } from 'express';


const bookingRoutes = Router()


// Routes Here
bookingRoutes.post("/", handleBooking)

// Get Booking
bookingRoutes.get("/:id", handleGetBooking)


export default bookingRoutes