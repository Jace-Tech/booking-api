import { logMessage } from "config/functions";
import { ALL_BOOKING_ENDPOINT, ALL_BUSES_ENDPOINT, ALL_ROUTES_ENDPOINT, ALL_TERMINAL_ENDPOINT } from "./base";

export const handleFetchBuses = async () => {
  try {
    const request = await fetch(ALL_BUSES_ENDPOINT);
    const response = await request.json();
    logMessage(response);
    return response
  } catch (error) {
    logMessage({error})
    return {success: false, message: error.message, data: null}
  }
}

export const handleFetchRoutes = async () => {
  try {
    const request = await fetch(ALL_ROUTES_ENDPOINT);
    const response = await request.json();
    logMessage(response);
    return response
  } catch (error) {
    logMessage({error})
    return {success: false, message: error.message, data: null}
  }
}

export const handleFetchTerminal = async () => {
  try {
    const request = await fetch(ALL_TERMINAL_ENDPOINT);
    const response = await request.json();
    logMessage(response);
    return response
  } catch (error) {
    logMessage({error})
    return {success: false, message: error.message, data: null}
  }
}

export const handleFetchBooking = async () => {
  try {
    const request = await fetch(ALL_BOOKING_ENDPOINT);
    const response = await request.json();
    logMessage(response);
    return response
  } catch (error) {
    logMessage({error})
    return {success: false, message: error.message, data: null}
  }
}
