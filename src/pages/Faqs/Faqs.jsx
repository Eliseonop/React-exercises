import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Faqs () {
  const location = useLocation()
  const navigate = useNavigate()
  // funcion para volver a la pagina anterior react router 6
  function goBack () {
    navigate(-1)
  }
  function goToHome () {
    navigate('/')
  }
  return (
    <div>
      <h1>Faqs estamos ahi</h1>
      <div>
        <button onClick={() => goToHome()}>Go To Home</button>
        <button onClick={() => goBack()}>Go Back</button>
      </div>
    </div>
  )
}
