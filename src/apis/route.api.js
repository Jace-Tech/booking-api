import { STORAGE_NAME } from "config";
import { logMessage } from "config/functions";
import { CREATE_ROUTE_BUS_ENDPOINT, CREATE_ROUTE_ENDPOINT, DELETE_ROUTE_ENDPOINT } from "./base";


export const handleDeleteRoute = async (id) => {
  let token = localStorage.getItem(STORAGE_NAME)
  if(!token) return {success: false, message: "Failed to fetch", data: null}
  token = JSON.parse(token)['token']

  const options = {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token
    }
  }

  try {
    const request = await fetch(DELETE_ROUTE_ENDPOINT.replace(":id", id), options);
    const response = await request.json();
    logMessage(response);
    return response
  } catch (error) {
    logMessage({error})
    return {success: false, message: error.message, data: null}
  }
}

export const handleCreateRoute = async (data) => {
  let token = localStorage.getItem(STORAGE_NAME)
  if(!token) return {success: false, message: "Failed to fetch", data: null}
  token = JSON.parse(token)['token']

  const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token
    }
  }
  try {
    const request = await fetch(CREATE_ROUTE_ENDPOINT, options);
    const response = await request.json();
    logMessage(response);
    return response
  } catch (error) {
    logMessage({error})
    return {success: false, message: error.message, data: null}
  }
}

export const handleCreateBus = async (data, id) => {
  let token = localStorage.getItem(STORAGE_NAME)
  if(!token) return {success: false, message: "Failed to fetch", data: null}
  token = JSON.parse(token)['token']

  const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token
    }
  }
  try {
    const request = await fetch(CREATE_ROUTE_BUS_ENDPOINT.replace(":id", id), options);
    const response = await request.json();
    logMessage(response);
    return response
  } catch (error) {
    logMessage({error})
    return {success: false, message: error.message, data: null}
  }
}