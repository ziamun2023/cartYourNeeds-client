import { useContext } from 'react'

import { Navigate, useLocation } from 'react-router'
import { AuthContext } from '../Provider/AuthContext'
import UserAccount from '../pages/Account/UserAccount'


const UserPrivateRoute = ({ children }) => {
  const { user, loading ,whatTherole} = useContext(AuthContext)
  const location = useLocation()

  if (loading) {
    return  <p>loader</p>
  }

  if (whatTherole==='user') {
    return children 
  }
  return <Navigate to='/login' state={{ from: location }} replace></Navigate>
}

export default UserPrivateRoute




