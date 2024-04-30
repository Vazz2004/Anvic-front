import React, { useState } from 'react'
import Modal from 'react-modal'
import TablaProductos from '../productsTable'
import FormProductoEditar from './editarProductos'
import Botonera from '../../uiMother/botonera'
import { PencilIcon } from '@heroicons/react/24/outline'
import FormEliminar from './eliminar'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export default function ImgMediaCard ({ categoria, title, imageSrc }) {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [editarModalIsOpen, setEditarModalIsOpen] = useState(false)
  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  const closeEditarModal = () => {
    setEditarModalIsOpen(false)
  }

  return (
    <>
     <Card className="max-w-sm mx-5 mt-5 bg-gradient-to-r hover:bg-gradient-to-r shadow-xl rounded-lg overflow-hidden transform transition hover:scale-110 duration-800">
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={imageSrc}
        className="w-full h-40 object-cover opacity-70 transition duration-600 hover:opacity-100"
      />
      <CardContent className="flex flex-col items-center justify-center px-6 py-8 text-black">
        <div style={{ height: '60px' }}> {/* Altura fija para el contenedor del título */}
          <Typography gutterBottom variant="h5" component="div" className="text-2xl font-bold mb-4 overflow-hidden">
            {title}
          </Typography>
        </div>
        <Typography variant="body1" component="p" className="text-gray-900">
          Estado: <strong className='text-green-500'>Activo</strong>
        </Typography>
        <CardActions className="w-full flex justify-center mt-6">
          <Button variant="contained" onClick={openModal} size="small" className="bg-transparent border border-white text-white font-semibold py-2 px-4 rounded hover:bg-white hover:border-transparent">
            Ver productos
          </Button>
        </CardActions>
      </CardContent>
    </Card>

<Modal
isOpen={modalIsOpen}
onRequestClose={closeModal}
style={{
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)' // Fondo semi-transparente
  },
  content: {
    backgroundColor: '#fff', // Fondo blanco
    border: 'none', // Sin borde
    padding: '20px', // Relleno de 20px
    top: '50%', // Centrar verticalmente
    left: '50%', // Centrar horizontalmente
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)', // Centrar el modal
    overflow: 'visible', // Permitir que el contenido sobresalga del modal
    borderRadius: '5px' // Bordes redondeados
  }
}}
>
<div>
  <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '5px' }}>
    <div className="w-full flex justify-end">
      <Botonera

        editar={
          <FormProductoEditar
            icon={<PencilIcon className='w-6 h-6' />}
            bgColor='primary'
            id={null}
            label='Editor Producto'
          />
        }
        eliminar={
          <FormEliminar />
        }
      />
    </div>
    <div className="w-full flex justify-center">
      <TablaProductos categoria={categoria} />
    </div>
  </div>
</div>
</Modal>

<Modal
isOpen={editarModalIsOpen}
onRequestClose={closeEditarModal}
style={{
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)' // Fondo semi-transparente
  },
  content: {
    backgroundColor: '#fff', // Fondo blanco
    border: 'none', // Sin borde
    padding: '20px', // Relleno de 20px
    top: '50%', // Centrar verticalmente
    left: '50%', // Centrar horizontalmente
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)', // Centrar el modal
    overflow: 'visible', // Permitir que el contenido sobresalga del modal
    borderRadius: '5px' // Bordes redondeados
  }
}}
>
<div>
  <h2>Contenido del segundo modal (para edición)</h2>
  <button onClick={closeEditarModal}>Cerrar</button>
  <FormProductoEditar />
</div>
</Modal>
</>
  )
}
