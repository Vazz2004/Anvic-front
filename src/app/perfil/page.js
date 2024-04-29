'use client'
import React, { useEffect, useState } from 'react'
import Nav from '../../app/ui/perfil/nav'
import Dash from '../../app/ui/perfil/dash'
import { Stack } from '@mui/system'
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
      <div className='flex items-start'>
        <Nav style={{ flex: '30%' }} />

        {isLoading ? (
          <div className="flex justify-center items-center w-screen h-screen">
            <Loader />
          </div>
        ) : (
          <div className="flex justify-center items-center w-screen h-screen">
            <Stack
              width='90%'
              marginLeft='15%'
              spacing={2}
            >
              <div >
                <Dash />
              </div>
            </Stack>
          </div>
        )}
      </div>
    </>
  )
}
