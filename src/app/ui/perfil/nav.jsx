'use client'
import { useEffect, useState } from 'react'
import { FaHome, FaBoxOpen, FaChartLine, FaUser, FaDropbox, FaNewspaper, FaStore } from 'react-icons/fa' // Import icons
import BotonCerrarSesion from './botonCerrarSesion'
import { rolUser } from '../../hooks/useRol'

const idROl = rolUser()

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
    console.log('denege')
  }

  return (
    <nav className="bg-gradient-to-r from-orange-400 to-orange-600 text-white w-64 min-h-screen p-4 fixed">
      <div className="flex flex-col items-center justify-center mb-8">
    <nav className="bg-gradient-to-r from-orange-400 to-orange-600 text-white w-2/12 min-h-screen p-4 fixed">
      <div className="flex flex-col items-center justify-center mb-8">
        <img
          src="https://i.pinimg.com/736x/28/e6/c6/28e6c686522a710e0e3a3c5e17ec5a31.jpg"
          alt="Avatar"
          className="rounded-full w-16 h-16 mb-2"
          className="rounded-full w-16 h-16 mb-2"
        />
        <p className="text-sm font-semibold text-center">{nameUser.nombre} {nameUser.apellido}</p>
        <p className="text-sm font-semibold text-center">{nameUser.nombre} {nameUser.apellido}</p>
      </div>
      {idROl === 1 ? (
        <div>
          <ul className="space-y-4">
            <li>
              <a href="/perfil" className="flex items-center py-2 px-4">
                <FaHome className="w-6 h-6 mr-4 text-orange-200" />
                Inicio
              </a>
            </li>
            <li>
              <a href="/perfil/producto" className="flex items-center py-2 px-4">
                <FaBoxOpen className="w-6 h-6 mr-4 text-orange-200" />
                Productos
              </a>
            </li>
            <li>
              <a href="/perfil/ordenes" className="flex items-center py-2 px-4">
                <FaChartLine className="w-6 h-6 mr-4 text-orange-200" />
                Ordenes
              </a>
            </li>
            <li>
              <a href="/perfil/usuarios" className="flex items-center py-2 px-4">
                <FaUser className="w-6 h-6 mr-4 text-orange-200" />
                Clientes
              </a>
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
            </>

          </>
        ) : (
          DenePage()
        )}
        <li>
          <BotonCerrarSesion />
        </li>
          </ul>
        </div>
      ) : (
        DenePage()
      )}
      {idROl === 3 ? (
        <div>
          <ul className="space-y-4 " >
          <li>
              <a href="/perfil/perfil-usuario" className="flex items-center py-2 px-4">
                <FaUser className="w-6 h-6 mr-4 text-orange-200" />
                Perfil
              </a>
            </li>
          </ul>
          <ul className="space-y-4 mt-4">
            <li>
              <a href="/perfil/ordenes-cliente" className="flex items-center py-2 px-4">
                <FaDropbox className="w-6 h-6 mr-4 text-orange-200" />
                Pedidos
              </a>
            </li>
            <li>
              <a href="/perfil/historial-compras-cliente" className="flex items-center py-2 px-4">
                <FaNewspaper className="w-6 h-6 mr-4 text-orange-200" />
                Historial de compra
              </a>
            </li>
          </ul>
        </div>
      ) : (
        DenePage()
      )}
      <div className="space-4 mt-3">
        <ul>
          <li>
            <a href="/" className="flex items-center py-2 px-4">
              <FaStore className="w-6 h-6 mr-4 text-orange-200" />Ir a la tienda
            </a>
          </li>
        </ul>
      </div>
      <ul>
        <li className='fixed bottom-5 ' >
          <BotonCerrarSesion />
        </li>
      </ul>
    </nav>
  )
}
