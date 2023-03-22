export const BASE_URL = "https://booking-api-dr3v.onrender.com/api/v1" 


// AUTH
export const CREATE_ACCOUNT_ENDPOINT = BASE_URL + "/auth/signup/admin"
export const SIGN_IN_ENDPOINT = BASE_URL + "/auth/signin"

// BUS
export const ALL_BUSES_ENDPOINT = BASE_URL + "/bus"
export const ROUTE_BUSES_ENDPOINT = BASE_URL + "/bus/:id"

// ROUTE
export const ALL_ROUTES_ENDPOINT = BASE_URL + "/route"
export const CREATE_ROUTE_ENDPOINT = BASE_URL + "/route"
export const DELETE_ROUTE_ENDPOINT = BASE_URL + "/route/:id"
export const CREATE_ROUTE_BUS_ENDPOINT = BASE_URL + "/route/:id/bus"

// TERMINAL
export const ALL_TERMINAL_ENDPOINT = BASE_URL + "/terminal"
export const CREATE_TERMINAL_ENDPOINT = BASE_URL + "/terminal"
export const DELETE_TERMINAL_ENDPOINT = BASE_URL + "/terminal/:id"

// BOOKING
export const ALL_BOOKING_ENDPOINT = BASE_URL + "/booking"




// PING NETWORK
window.addEventListener("load", async () => {
  await fetch("https://booking-api-dr3v.onrender.com/ping")
}, { once: true })