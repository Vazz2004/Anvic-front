'use client'
import React, { useState } from 'react'
import Alerta from '../alertas/alert'
import { api } from '../../../api/api.js'
const Registro = () => {
  const [contrasena, setContrasena] = useState('')
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [correo, setCorreo] = useState('')
  const [errorRegistro, setErrorRegistro] = useState('')
  const [userExits, setUserExits] = useState(false)
  const [confirmacionContrasena, setConfirmacionContrasena] = useState('')
  const [errorCorreo, setErrorCorreo] = useState(false)
  const [errorCorreo, setErrorCorreo] = useState(false)
  const [errorContrasena, setErrorContrasena] = useState('')

  const handleCorreoChange = (event) => {
    setCorreo(event.target.value)
    setErrorCorreo(null)
  }

  const handleContrasenaChange = (event) => {
    setContrasena(event.target.value)
    setErrorContrasena(null)
  }

  const handleConfirmacionContrasenaChange = (event) => {
    setConfirmacionContrasena(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!correo.match(emailFormat)) {
      setErrorCorreo('El correo electrónico no tiene un formato válido')
      return
    } else {
      setErrorCorreo(false)
    }

    if (contrasena !== confirmacionContrasena) {
      setErrorContrasena('Las contraseñas no coinciden')
      return
    } else {
      setErrorContrasena(false)
    }

    if (contrasena.length < 8) {
      setErrorContrasena('La contraseña debe tener al menos 8 caracteres')
      return
    } else {
      setErrorContrasena(false)
    }

    try {
      const response = await api.post('/registro', {
        nombre,
        apellido,
        correo,
        contrasena
      })
      if (response.status === 200) {
        window.location.href = '../login'
      } else {
        setErrorRegistro(response.data.mensaje || 'Error desconocido')
        setErrorRegistro(response.data.mensaje || 'Error desconocido')
      }
    } catch (error) {
      console.error(error.response.data.message)
      setErrorRegistro(error.response.data.message)
    }
  }

  const handleNombreChange = (event) => {
    setNombre(event.target.value)
  }

  const handleApellidoChange = (event) => {
    setApellido(event.target.value)
  }

  const handleIniciarSesion = (event) => {
    window.location.href = '/login'
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-20 w-auto"
            src="/images/Inicio/logo anvic.jpg"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Registrarse
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={handleSubmit}
          >
              {errorRegistro && (
              <Alerta tipo="danger" mensaje={errorRegistro} />
              )}

            <div>
              <label
                htmlFor="correo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="correo"
                  name="correo"
                  value={correo}
                  onChange={handleCorreoChange}
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {errorCorreo && (
              <Alerta tipo="danger" mensaje={errorCorreo} />
            )}

            <div>
              <label
                htmlFor="nombre"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Nombre
              </label>
              <div className="mt-2">
                <input
                  id="nombre"
                  type="text"
                  name="nombre"
                  value={nombre}
                  onChange={handleNombreChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="apellido"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Apellido
              </label>
              <div className="mt-2">
                <input
                  id="apellido"
                  name="apellido"
                  type="text"
                  onChange={handleApellidoChange}
                  autoComplete="apellido"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="contrasena"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Contraseña
              </label>
              <div className="mt-2">
                <input
                  id="contrasena"
                  name="contrasena"
                  type="password"
                  onChange={handleContrasenaChange}
                  autoComplete="new-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="confirmacionContrasena"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Confirmación de Contraseña
              </label>
              <div className="mt-2">
                <input
                  id="confirmacionContrasena"
                  name="confirmacionContrasena"
                  type="password"
                  onChange={handleConfirmacionContrasenaChange}
                  autoComplete="new-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {errorContrasena && (
              <Alerta tipo="danger" mensaje={errorContrasena} />
            )}

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-orange-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Crear cuenta
              </button>

              <button
                onClick={handleIniciarSesion}
                className="flex mt-5 w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-white hover:transform-cpu  hover:shadow-md  hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Iniciar Sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Registro
