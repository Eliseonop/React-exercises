import React, { useState, useEffect } from 'react'

export default function Rectangulo () {
  const [cambio, setCambio] = useState(false)
  const [state, setState] = useState({
    width: '235px',
    height: '225px',
    backgroundColor: '#000000'
  })

  const handleMouseOut = () => {
    setCambio(false)
    console.log('MouseOut')
  }
  function ramdom () {
    const numero = Math.floor(Math.random() * 255)
    return numero
  }

  // Un método para que cuando entre el ratón en el componente se cambie el color.
  const handleMouseOver = () => {
    setCambio(true)
    console.log('cambio')
  }
  useEffect(() => {
    if (cambio === true) {
      const idInterval = setInterval(() => {
        setState(prevState => ({
          ...prevState,
          backgroundColor: `rgba(${ramdom()}, ${ramdom()}, ${ramdom()})`
        }))
      }, 1000)

      return () => clearInterval(idInterval)
    }
  }, [cambio])

  return (
    <div
      style={state}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseOut}
      onDoubleClick={() => setCambio(false)}
    >
      Cuadrado
    </div>
  )
}
