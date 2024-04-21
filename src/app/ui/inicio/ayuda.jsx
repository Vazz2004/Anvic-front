'use client'
// App.js

import React from 'react'

const AyudaComponente = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Lógica para enviar el formulario de contacto
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Centro de Ayuda</h2>
      <p className="text-gray-600 mb-6">
        ¡Bienvenido a nuestro Centro de Ayuda! Estamos aquí para proporcionarte asistencia y resolver tus dudas.
      </p>
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Preguntas Frecuentes</h3>
        <ul className="list-disc ml-4">
          <li className="mb-2">¿Cómo realizar un pedido?</li>
          <li className="mb-2">¿Cuál es el proceso de devolución?</li>
          <li className="mb-2">¿Cómo contactar con el servicio de soporte?</li>
        </ul>
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Guías de Uso</h3>
        <ul className="list-disc ml-4">
          <li className="mb-2">Configuración avanzada de tu dispositivo</li>
          <li className="mb-2">Consejos para mantener tu dispositivo</li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">Contáctanos</h3>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label htmlFor="nombre" className="text-gray-600">
              Nombre:
              <input
                type="text"
                id="nombre"
                name="nombre"
                className="border p-2 focus:outline-none focus:border-blue-500 w-full"
                required
              />
            </label>
            <label htmlFor="correo" className="text-gray-600">
              Correo Electrónico:
              <input
                type="email"
                id="correo"
                name="correo"
                className="border p-2 focus:outline-none focus:border-blue-500 w-full"
                required
              />
            </label>
          </div>
          <label htmlFor="mensaje" className="text-gray-600">
            Mensaje:
            <textarea
              id="mensaje"
              name="mensaje"
              rows="4"
              className="border p-2 focus:outline-none focus:border-blue-500 w-full"
              required
            ></textarea>
          </label>
          <button
            type="submit"
            className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
  )
}

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="container mx-auto p-6 bg-white rounded-lg shadow-xl">
        <header className="text-5xl font-extrabold text-orange-500 mb-8">¡Bienvenido a Anvic!</header>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg text-gray-700 mb-6">
              Explora nuestro catálogo de accesorios y repuestos de alta calidad para celulares, tablets y computadoras.
            </p>
            <a
              href="#productos"
              className="text-orange-500 font-semibold hover:underline transition duration-300"
            >
              Ver Productos
            </a>
          </div>
          <AyudaComponente />
        </section>
      </div>
    </div>
  )
}

export default App
