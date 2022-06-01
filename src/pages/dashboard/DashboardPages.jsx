import { Button } from '@mui/material'
import React from 'react'
import CpyRight from '../../components/pure/CpyRight'
import { useNavigate } from 'react-router-dom'
import { TaskPage } from '../Tasks/TaskPage'

export default function DashboardPages () {
  const navigate = useNavigate()
  const logout = () => {
    localStorage.removeItem('credentials')
    navigate('/login')
  }
  return (
    <div>
      <Button variant='contained' onClick={logout} color='primary'>
        Logout
      </Button>
      {/* <CpyRight /> */}
      <div>
        <TaskPage />
      </div>
    </div>
  )
}
