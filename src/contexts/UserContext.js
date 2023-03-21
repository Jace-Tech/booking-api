import { STORAGE_NAME } from "config";
import { createContext, useContext, useEffect, useState } from "react"; 
import { useDispatch, useSelector } from "react-redux";
import { setUser, setUserToken } from "../store/slices/user.slice"


const UserContext = createContext({}); 

const UserContextProvider = ({ children }) => {  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch()
  const userState = useSelector(state => state.userState)
  const [userDetails, setUserDetails] = useState(null)

  const handleLogout = () => {
    localStorage.removeItem(STORAGE_NAME)
    dispatch(setUserToken(null))
    dispatch(setUser(null))
  }

  useEffect(() => {
    if(!userState.token || !userState.user) return
    setUserDetails(userState)
  }, [userState])

  
  return ( 
    <UserContext.Provider value={{
      handleLogout,
      userDetails
    }}> 
      {children} 
    </UserContext.Provider> 
  )
} 

export default UserContextProvider 

// eslint-disable-next-line react-hooks/rules-of-hooks
export const useUserContext = () => useContext(UserContext);