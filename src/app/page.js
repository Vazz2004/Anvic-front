'use client'
import React, { useEffect, useState } from 'react'
import Nav from './ui/inicio/nav'
import Carrusel from './ui/inicio/carrusel'
import Prueba from './ui/inicio/comprueba'
import Promo from './ui/inicio/promoApp'
import Estadisticas from './ui/inicio/estadisticas.jsx'
import Socios from './ui/inicio/asociados'
import Footer from './ui/inicio/footer'
import Baner from './ui/inicio/baner'
import Iconwha from './ui/inicio/iconWhatsapp'
import Loader from './ui/pantallaDeCarga/load.jsx'

export default function page () {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Aquí simulamos una llamada a una API o una solicitud asíncrona
    // Puedes reemplazar esto con tu propio código de carga de contenido
    setTimeout(() => {
      setIsLoading(false)
    }, 2000) // 3 segundos de simulación de carga
  }, [])
  return (
    <>
    {isLoading ? (
          <div className="flex justify-center items-center w-screen h-screen">
            <Loader />
          </div>
    ) : (
          <div>
            <Iconwha />
    <Nav />
    <Carrusel />
    <h2 className="text-center mt-10 font-bold tracking-tight text-black sm:text-4xl">
              Nuestros Productos destacados
            </h2>
    <Prueba />
    <h2 className="text-center mt-36 font-bold tracking-tight text-black sm:text-4xl">
              Promisiones Destacadas
            </h2>
    <Promo />
    <Baner />

    <h2 className="text-center mt-36 font-bold tracking-tight text-black sm:text-4xl">
              Todos Nuestros Productos
            </h2>
    <Prueba />
    <Prueba />
    <Prueba />
    <Estadisticas />
    <Socios />
    <Footer />
          </div>
    )}
    </>

  )
}
