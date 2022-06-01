import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Error () {
  const navigate = useNavigate()
  const navigateTo = path => {
    navigate(path)
  }
  function goBack () {
    navigate(-1)
  }
  return (
    <div>
      <h1>Error not found</h1>
      <div>
        <button onClick={() => navigateTo('/tasks')}>Tasks</button>
        <button onClick={() => goBack()}>Go Back</button>
      </div>
    </div>
  )
}
