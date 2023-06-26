import { useContext } from 'react'

import { Navigate, useLocation } from 'react-router'
import { AuthContext } from '../Provider/AuthContext'


const SellerPrivateRoute = ({ children }) => {
  const { user, loading ,whatTherole} = useContext(AuthContext)
  const location = useLocation()

  if (loading) {
    return  <p>loader</p>
  }

  if (whatTherole==='seller') {
    return children
  }
  return <Navigate to='/login' state={{ from: location }} replace></Navigate>
}

export default SellerPrivateRoute



