import { use } from 'react'
import { Navigate, useLocation } from 'react-router'
import { AuthContext } from '../contexts/AuthProvider'
import LoadingSpinner from '../components/LoadingSpinner'


const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext)

  const location = useLocation()

  if (loading) {
    return <LoadingSpinner/>
  }

  if (user && user?.email) {
    return children
  }
  return <Navigate state={location.pathname} to='/signin'></Navigate>
}

export default PrivateRoute