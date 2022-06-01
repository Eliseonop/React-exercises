import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate
} from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import Error from './pages/404/Error.jsx'
import AboutPage from './pages/About/AboutPage'
import Faqs from './pages/Faqs/Faqs'
import ProfilePages from './pages/profile/ProfilePages'
import TasksPages from './pages/Tasks/TasksPages'
import TaksDetailPage from './pages/Tasks/TaksDetailPage'
import LoginPages from './pages/FormPages/LoginPages'

export default function AppRoutingOne () {
  //   const navigate = useNavigate()

  const ProtectedRoute = ({ children }) => {
    const [isLogged, setIsLogged] = React.useState(
      localStorage.getItem('credentials') ? true : false
    )
    React.useEffect(() => {
      setIsLogged(localStorage.getItem('credentials') ? true : false)
    }, [])
    return isLogged ? children : <Navigate to='/login' />
  }

  let tasksList = [
    {
      id: 1,
      name: 'Task 1',
      description: 'Description 1',
      level: 'Normal'
    },
    {
      id: 2,
      name: 'Task 2',
      description: 'Description 2',
      level: 'Normal'
    }
  ]

  return (
    <Router>
      <div>
        <aside>
          <Link to='/'>|Home</Link>
          <Link to='/about'>|About</Link>
          <Link to='/faqs'>|Faqs</Link>
          <Link to='/profile'>|Profile</Link>
          <Link to='/any404'>|Not exists route</Link>
        </aside>

        <main>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/faqs' element={<Faqs />} />
            <Route path='/about' element={<AboutPage />} />
            <Route
              path='/profile'
              element={
                <ProtectedRoute>
                  <ProfilePages />
                </ProtectedRoute>
              }
            />

            <Route path='/tasks' element={<TasksPages />} />
            <Route path='/task/:id' element={<TaksDetailPage />} />
            <Route path='/login' element={<LoginPages />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}
