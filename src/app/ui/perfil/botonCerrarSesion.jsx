import React from 'react'
import { FaSignOutAlt } from 'react-icons/fa'

const BotonCerrarSesion = () => {
  const cerrarSesion = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem('myToken')
      window.location.href = '/'
    } else {
      console.error("El objeto 'window' no está definido o 'localStorage' no está disponible. No es un entorno de navegador.")
    }
  }

  return (
    <div>
      {/* Botón para cerrar sesión */}
      <button className='flex items-center py-2 px-4' onClick={cerrarSesion}>
        <FaSignOutAlt className="w-6 h-6 mr-4 text-orange-200" />
        Cerrar Sesión
      </button>
    </div>
  )
}

export default BotonCerrarSesion
