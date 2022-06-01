import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function HomePage () {
  const navigate = useNavigate()
  // funcion para volver a la pagina anterior react router 6
  function goBack () {
    navigate(-1)
  }
  function goProfile () {
    navigate('/profile')
  }
  function goForward () {
    console.log('go forward')
    // if(memory. )
    navigate(1)
  }
  return (
    <div>
      HomePage
      <div>
        <button onClick={() => goBack()}>Go back</button>

        <button onClick={() => goForward()}>Go Forward</button>
        <button onClick={() => goProfile()}>Go Profile</button>
      </div>
    </div>
  )
}
