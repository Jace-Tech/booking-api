import { STORAGE_NAME } from "config"

const { createSlice } = require("@reduxjs/toolkit")


const defaultState = {
  token: null,
  user: null
}

const initialState = localStorage.getItem(STORAGE_NAME) ?
  JSON.parse(localStorage.getItem(STORAGE_NAME)) : defaultState


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
    setUserToken: (state, action) => {
      state.token = action.payload
    }
  }
})


export const {setUser, setUserToken} = userSlice.actions
export default userSlice.reducer