import React, { useState } from 'react'
import Card from '../../inicio/comprueba'
const UserProfile = ({ user }) => {
  const [showChangePassword, setShowChangePassword] = useState(false)
  const [showEditForm, setShowEditForm] = useState(false)
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [editedUser, setEditedUser] = useState({ ...user })

  const handleEditProfile = () => {
    setShowEditForm(true)
  }

  const handleChangePassword = () => {
    // Lógica para cambiar la contraseña aquí
    console.log('Cambiar contraseña a:', newPassword)
    setCurrentPassword('')
    setNewPassword('')
    setShowChangePassword(false)
  }

  const handleSaveChanges = () => {
    // Lógica para guardar cambios del perfil aquí
    console.log('Datos editados:', editedUser)
    setShowEditForm(false)
  }

  const handleImageChange = () => {
    // Lógica para cambiar la foto de perfil aquí
    console.log('Cambiar foto de perfil')
    // Aquí puedes añadir la lógica para cambiar la foto de perfil
  }

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <div className="text-center mb-4">
        <div className="flex justify-center items-center mb-2">
          <img src='https://i.ibb.co/wyz1tZ4/yoAnvic.png' className="w-32   rounded-full" alt="Imagen de Perfil" /> {/* Imagen de perfil */}
          <button onClick={handleImageChange} className="inline-block mt-20 bg-gray-500 hover:bg-gray-600 text-white font-semibold px-1 py-1 rounded-md">
            +
          </button>
        </div>
        <h1 className="text-2xl font-semibold">{user.nombre} {user.apellido}</h1>
        <p className="text-gray-600">{user.correo}</p>
      </div>

      {showEditForm ? (
        <div className="border-t border-gray-200 py-4">
          <form className="space-y-4">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
              <input type="text" id="nombre" name="nombre" className="mt-1 p-2 border rounded-md w-full" value={editedUser.nombre} onChange={(e) => setEditedUser({ ...editedUser, nombre: e.target.value })} />
            </div>
            <div>
              <label htmlFor="apellido" className="block text-sm font-medium text-gray-700">Apellido</label>
              <input type="text" id="apellido" name="apellido" className="mt-1 p-2 border rounded-md w-full" value={editedUser.apellido} onChange={(e) => setEditedUser({ ...editedUser, apellido: e.target.value })} />
            </div>
            <div>
              <label htmlFor="correo" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
              <input type="email" id="correo" name="correo" className="mt-1 p-2 border rounded-md w-full" value={editedUser.correo} onChange={(e) => setEditedUser({ ...editedUser, correo: e.target.value })} />
            </div>
            <div className="flex justify-between">
              <button type="button" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-md" onClick={handleSaveChanges}>Guardar Cambios</button>
              <button type="button" className="bg-blue-500 hover:bg-gray-600 text-white font-semibold px-4 py-2 rounded-md" onClick={() => setShowEditForm(false)}>Cancelar</button>
            </div>
          </form>
        </div>
      ) : (
        <div className="border-t border-gray-200 py-4">
          {user.direccion && (
            <div className="flex justify-between items-center mb-4">
              <div className="text-gray-700">Dirección:</div>
              <div className="text-gray-900">{user.direccion}</div>
            </div>
          )}
          {user.fecha_nacimiento && (
            <div className="flex justify-between items-center mb-4">
              <div className="text-gray-700">Fecha de Nacimiento:</div>
              <div className="text-gray-900">{user.fecha_nacimiento}</div>
            </div>
          )}
          {showChangePassword ? (
            <div className="mt-4">
              <input
                type="password"
                placeholder="Contraseña Actual"
                className="border rounded-md px-3 py-2 w-full mb-2"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Nueva Contraseña"
                className="border rounded-md px-3 py-2 w-full mb-2"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <div className="flex justify-between items-center">
                <button
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-md mr-2"
                  onClick={handleChangePassword}
                >
                  Cambiar Contraseña
                </button>
                <button
                  className="bg-gray-500 hover:bg-gray-600 text-white font-semibold px-4 py-2 rounded-md"
                  onClick={() => setShowChangePassword(false)}
                >
                  Cancelar
                </button>
              </div>
            </div>
          ) : (
            <div className="flex justify-between">
              <div>
                <button
                  className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-md mr-2"
                  onClick={() => setShowChangePassword(true)}
                >
                  Cambiar Contraseña
                </button>
                <button
                  className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-md"
                  onClick={handleEditProfile}
                >
                  Editar Perfil
                </button>
              </div>
              <div>
                <a href="/perfil/ordenes-cliente" className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-md mr-2">
                  Pedidos
                </a>
                <a href="/" className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-md mr-2">
                  Tienda
                </a>

                <a href="/perfil/historial-compras-cliente" className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-md mr-2">
                  Mis compras
                </a>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="w-full mt-10">
      <h1 className="text-3xl font-bold tracking-tight">Productos recomendados </h1>
      <Card />
      </div>
    </div>
  )
}

// Datos de prueba
const userData = {
  id_usuario: 12,
  nombre: 'Samuel',
  apellido: 'Vasquez',
  correo: 'samuelvasquez34@gmail.com',
  direccion: '123 Calle Principal',
  fecha_nacimiento: '1990-01-01',
  rol_id: 3
}

export default function App () {
  return (
    <div className="App">
      <UserProfile user={userData} />
    </div>
  )
}
