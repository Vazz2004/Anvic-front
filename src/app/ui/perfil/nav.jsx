'use client'
import Link from 'next/link'
import { FaHome, FaBoxOpen, FaChartLine, FaSignOutAlt, FaUser } from 'react-icons/fa' // Import icons

const Sidebar = () => {
  return (
    <nav className="bg-gradient-to-r from-orange-400 to-orange-600 text-white w-64 min-h-screen p-4 fixed">
      <div className="flex items-center justify-center mb-8">
        <img
          src="https://i.pinimg.com/736x/28/e6/c6/28e6c686522a710e0e3a3c5e17ec5a31.jpg"
          alt="Avatar"
          className="rounded-full w-16 h-16 mx-auto mb-4"
        />
        <p className="text-sm font-semibold text-center">Bienvenido usuario </p>
      </div>
      <ul className="space-y-4">
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
          <Link href="/admin/ventas" className="flex items-center py-2 px-4">
            <FaChartLine className="w-6 h-6 mr-4 text-orange-200" />
            Ventas
          </Link>
        </li>
        <li>
          <Link href="/perfil/usuarios" className="flex items-center py-2 px-4">
            <FaUser className="w-6 h-6 mr-4 text-orange-200" />
            Clientes
          </Link>
        </li>
        <li>
          <Link href="/" className="flex items-center py-2 px-4">
            <FaSignOutAlt className="w-6 h-6 mr-4 text-orange-200" />
            Cerrar sesión
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar
