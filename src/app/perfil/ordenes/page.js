'use client'
import React, { useEffect, useState } from 'react'
import Nav from '../../ui/perfil/nav.jsx'
import HomeOrdenes from '../../ui/perfil/ordenes/homeOrdenes.jsx'
import Loader from '../../ui/pantallaDeCarga/load.jsx'
export default function Page () {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Aquí simulamos una llamada a una API o una solicitud asíncrona
    // Puedes reemplazar esto con tu propio código de carga de contenido
    setTimeout(() => {
      setIsLoading(false)
    }, 1000) // 3 segundos de simulación de carga
  }, [])

  return (
    <>
        {isLoading ? (
          <div className="flex justify-center items-center w-screen h-screen">
            <Loader />
          </div>
        ) : (
            <div className="flex justify-center  w-screen h-screen mx-96">
            <HomeOrdenes />
          </div>
        )}

    </>
  )
}
