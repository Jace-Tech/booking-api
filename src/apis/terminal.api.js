import { STORAGE_NAME } from "config";
import { logMessage } from "config/functions";
import { CREATE_TERMINAL_ENDPOINT, DELETE_TERMINAL_ENDPOINT } from "./base";


export const handleDeleteTerminal = async (id) => {
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
    const request = await fetch(DELETE_TERMINAL_ENDPOINT.replace(":id", id), options);
    const response = await request.json();
    logMessage(response);
    return response
  } catch (error) {
    logMessage({error})
    return {success: false, message: error.message, data: null}
  }
}

export const handleCreateTerminal= async (data) => {
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
    const request = await fetch(CREATE_TERMINAL_ENDPOINT, options);
    const response = await request.json();
    logMessage(response);
    return response
  } catch (error) {
    logMessage({error})
    return {success: false, message: error.message, data: null}
  }
}