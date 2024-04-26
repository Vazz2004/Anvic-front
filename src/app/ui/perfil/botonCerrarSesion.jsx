import React from 'react'
import { FaSignOutAlt } from 'react-icons/fa' // Import icons

const BotonCerrarSesion = () => {
  const cerrarSesion = () => {
    localStorage.removeItem('myToken')
    window.location.href = '/'
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
