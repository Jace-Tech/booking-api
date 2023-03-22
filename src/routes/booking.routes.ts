import { handleBooking, handleGetBooking, handleGetAllBooking, handleDeleteBooking } from './../controllers/booking.controller';
import { Router } from 'express';


const bookingRoutes = Router()


// Routes Here
bookingRoutes.post("/", handleBooking)

// Routes Here
bookingRoutes.get("/", handleGetAllBooking)

// Get Booking
bookingRoutes.get("/:id", handleGetBooking)

// Get Booking
bookingRoutes.delete("/:id", handleDeleteBooking)


export default bookingRoutes