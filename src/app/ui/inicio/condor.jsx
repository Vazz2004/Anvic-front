'use client'
import React, { useState, useEffect } from 'react'

function App () {
  const [contador, setContador] = useState(7200)

  useEffect(() => {
    const intervalo = setInterval(() => {
      if (contador > 0) {
        setContador(contador - 1)
      } else {
        clearInterval(intervalo)
      }
    }, 1000)

    // Limpiar el intervalo
    return () => clearInterval(intervalo)
  }, [contador])

  const segundos = contador % 60
  const minutos = Math.floor((contador / 60) % 60)
  const horas = Math.floor(contador / 3600)

  return (
<div className="App flex flex-col items-center justify-center mt-10">
      <h1 className="text-3xl font-bold mb-4 animate__animated animate__bounceIn">
        ¡Aprovéchalo ahora!
      </h1>
      <p className="text-5xl font-extrabold text-orange-500 animate__animated animate__fadeInUp">
        {`${horas.toString().padStart(2, '0')}:${minutos
          .toString()
          .padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`}
      </p>
    </div>
  )
}

export default App
