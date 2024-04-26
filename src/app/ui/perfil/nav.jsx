'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaHome, FaBoxOpen, FaChartLine, FaUser } from 'react-icons/fa' // Import icons
import BotonCerrarSesion from './botonCerrarSesion'
import { idUser } from '../../hooks/useRol'

const idROl = idUser()
export default function Sidebar () {
  const [nameUser, setNameUser] = useState({})
  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedUser = localStorage.getItem('myToken')
      if (storedUser) {
        const user = JSON.parse(storedUser)
        setNameUser({ nombre: user.usuario[0].nombre, apellido: user.usuario[0].apellido })
      }
    } else {
      console.error("El objeto 'window' no está definido o 'localStorage' no está disponible. No es un entorno de navegador.")
    }
  }, [])

  const DenePage = () => {
    console.log('c')
  }

  return (
    <nav className="bg-gradient-to-r from-orange-400 to-orange-600 text-white w-64 min-h-screen p-4 fixed">
      <div className="flex items-center justify-center mb-8">
        <img
          src="https://i.pinimg.com/736x/28/e6/c6/28e6c686522a710e0e3a3c5e17ec5a31.jpg"
          alt="Avatar"
          className="rounded-full w-16 h-16 mx-auto mb-4"
        />
        <p className="text-sm font-semibold text-center"> {nameUser.nombre} {nameUser.apellido} </p>
      </div>
      <ul className="space-y-4">
        {idROl === 1 ? (
          <>
            <li>
              <Link href="/perfil" className="flex items-center py-2 px-4">
                <FaHome className="w-6 h-6 mr-4 text-orange-200" />
                Inicio
              </Link>
            </li>

            <li>
              <Link href="/perfil/producto" className="flex items-center py-2 px-4">
                <FaBoxOpen className="w-6 h-6 mr-4 text-orange-200" />
                Productos
              </Link>
            </li>

            <li>
              <Link href="/perfil/ordenes" className="flex items-center py-2 px-4">
                <FaChartLine className="w-6 h-6 mr-4 text-orange-200" />
                Ordenes
              </Link>
            </li>

            <li>
              <Link href="/perfil/usuarios" className="flex items-center py-2 px-4">
                <FaUser className="w-6 h-6 mr-4 text-orange-200" />
                Clientes
              </Link>
            </li>
          </>
        ) : (
          DenePage()
        )}

        {idROl === 3 ? (
          <>
            <>
              <li>
                <Link href="/perfil/ordenes-cliente" className="flex items-center py-2 px-4">
                  <FaUser className="w-6 h-6 mr-4 text-orange-200" />
                  Pedidos
                </Link>
              </li>

              <li>
                <Link href="/perfil/historial-compras-cliente" className="flex items-center py-2 px-4">
                  <FaUser className="w-6 h-6 mr-4 text-orange-200" />
                  Historial de compra
                </Link>
              </li>
              <li>
                <BotonCerrarSesion />
              </li>
            </>

          </>
        ) : (
          DenePage()
        )}

      </ul>
    </nav>
  )
}
