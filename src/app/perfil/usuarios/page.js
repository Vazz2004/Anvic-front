'use client'
import React, { useEffect, useState } from 'react'
import Nav from '../../ui/perfil/nav'
import Loader from '../../ui/pantallaDeCarga/load'

export default function Page () {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Aquí simulamos una llamada a una API o una solicitud asíncrona
    // Puedes reemplazar esto con tu propio código de carga de contenido
    setTimeout(() => {
      setIsLoading(false)
    }, 3000) // 3 segundos de simulación de carga
  }, [])

  return (
    <>
        {isLoading ? (
          <div className="flex justify-center items-center w-screen h-screen">
            <Loader />
          </div>
        ) : (
          <>
          <div className='flex' >
          <div className='w-2/12'><Nav /></div>
          <div className='w-10/12' >Tu contenido aquí después de la carga</div>
          </div>
          </>
        )}
    </>
  )
}
