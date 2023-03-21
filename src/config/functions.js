const { SHOW_MESSAGE } = require("config");

export const logMessage = (...args) => SHOW_MESSAGE && console.log(...args)