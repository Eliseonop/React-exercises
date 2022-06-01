import { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom'
import Error from './pages/404/Error'
import DashboardPages from './pages/dashboard/DashboardPages'
import LoginPages from './pages/FormPages/LoginPages'

export default function AppRoutingFinal () {
  const PrivateRoute = ({ children }) => {
    const [isLogged, setIsLogged] = useState(
      localStorage.getItem('credentials') ? true : false
    )
    useEffect(() => {
      setIsLogged(localStorage.getItem('credentials') ? true : false)
    }, [])
    return isLogged ? children : <Navigate to='/login' />
  }

  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <PrivateRoute>
              <DashboardPages />
            </PrivateRoute>
          }
        />
        <Route
          path='/login'
          element={
            <LoginPages>
              <Navigate to='/dashboard' />
            </LoginPages>
          }
        />
        <Route
          path='/dashboard'
          element={
            <PrivateRoute>
              <DashboardPages />
            </PrivateRoute>
          }
        />
        <Route path='/login' element={<LoginPages />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </Router>
  )
}
