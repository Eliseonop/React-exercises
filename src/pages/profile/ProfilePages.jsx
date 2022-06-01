import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function ProfilePages ({ user }) {
  const navigate = useNavigate()

  function goBack () {
    navigate(-1)
  }
  return (
    <div>
      <h1>Your Profile</h1>
      <div>
        <button onClick={() => goBack()}>Go Back</button>
      </div>
    </div>
  )
}
