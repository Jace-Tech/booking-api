import { handleFetchTerminal } from "apis/stats.api";
import { handleFetchRoutes } from "apis/stats.api";
import { handleFetchBooking } from "apis/stats.api";
import { handleFetchBuses } from "apis/stats.api";
import { logMessage } from "config/functions";
import { createContext, useContext, useEffect, useState } from "react"; 
import { useUserContext } from "./UserContext";


const StatsContext = createContext({}); 

const StatsContextProvider = ({ children }) => {  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [buses, setBuses] = useState(null)
  const [terminals, setTerminal] = useState(null)
  const [routes, setRoutes] = useState(null)
  const [bookings, setBookings] = useState(null)

  const {userDetails} = useUserContext()

  const fetchBuses = async () => {
    const result = await handleFetchBuses()
    logMessage({busResult: result})
    if(!result?.success) return
    setBuses(result?.data)
  }

  const fetchRoutes = async () => {
    const result = await handleFetchRoutes()
    logMessage({routesResult: result})
    if(!result?.success) return
    setRoutes(result?.data)
  }

  const fetchTerminal = async () => {
    const result = await handleFetchTerminal()
    logMessage({terminalResult: result})
    if(!result?.success) return
    setTerminal(result?.data)
  }

  const fetchBooking = async () => {
    const result = await handleFetchBooking()
    logMessage({bookingResult: result})
    if(!result?.success) return
    setBookings(result?.data)
  }

  useEffect(() => {
    if(!userDetails) return
    fetchBuses()
    fetchRoutes()
    fetchTerminal()
    fetchBooking()
  }, [userDetails])

  return ( 
    <StatsContext.Provider value={{
      buses,
      terminals,
      routes,
      bookings,
      fetchRoutes,
      fetchTerminal,
      fetchBuses
    }}> 
      {children} 
    </StatsContext.Provider> 
  )
} 

export default StatsContextProvider 

// eslint-disable-next-line react-hooks/rules-of-hooks
export const useStatsContext = () => useContext(StatsContext);