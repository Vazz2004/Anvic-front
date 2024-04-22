'use client'
import React, { useEffect, useState } from 'react'
import Card from './card'
import { api } from '../../../../api/api'
import Botonera from '../../uiMother/botonera'
import FormProducto from '../../../ui/perfil/productos/agregarProductos'
import { PlusIcon } from '@heroicons/react/24/outline'
import VistaDash from '../../uiMother/vistaDash'

const App = () => {
  const titulo = 'Productos'
  const descripPage = 'Visualisar y agregar productos'
  const [categorias, setCategorias] = useState([])

  useEffect(() => {
    async function fetchData () {
      try {
        const response = await api.get('producto/categorias')
        console.log('Categorias:', response.data)
        setCategorias(response.data)
      } catch (error) {
        console.log('Error al obtener las categorías:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <VistaDash
        titulo={titulo}
        descripPage={descripPage}
        boton={<Botonera
          agregar={
            <FormProducto
              icon={<PlusIcon className='w-6 h-6' />}
              bgColor='secondary'
              id={null}
              label='Agregar Producto'
            />
          }
        />}
        content={categorias.map((categoria, index) => (
          <div key={index}>
            <Card
              title={categoria.value}
              content="Prueba contenido"
              imageSrc={categoria.url_imagen} // Ajusta la ruta a la imagen
              categoria={categoria.value}
            />
          </div>
        ))}
      />
    </>
  )
}

export default App
