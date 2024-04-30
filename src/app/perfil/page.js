'use client'
import React, { useEffect, useState } from 'react'
import Nav from '../../app/ui/perfil/nav'
import Dash from '../../app/ui/perfil/dash'
import Loader from '../ui/pantallaDeCarga/load.jsx'

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
              <div className='flex' >
                <div className='w-2/12' > <Nav /></div>
                <div className='w-10/12' ><Dash /></div>
              </div>

        )}
    </>
  )
}
