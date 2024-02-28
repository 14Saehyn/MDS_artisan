import { Navigate, Outlet } from 'react-router-dom'

function PrivateRoute () {
  const auth = localStorage.getItem('AUTH')
  const authObject = JSON.parse(auth)

  const token = authObject?.jwt

  return (
    token ? <Outlet /> : <Navigate to='/authentication' />
  )
}

export default PrivateRoute
