
const { createSlice } = require("@reduxjs/toolkit")

const initialState =  {
  bus: null,
  routes: null,
  terminals: null,
  booking: null
}


const statsSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setBooking: (state, action) => {
      state.booking = action.payload
    },
    setRoute: (state, action) => {
      state.routes = action.payload
    },
    setBus: (state, action) => {
      state.bus = action.payload
    },
    setTerminal: (state, action) => {
      state.terminals = action.payload
    }
  }
})


export const {setUser, setUserToken} = statsSlice.actions
export default statsSlice.reducer