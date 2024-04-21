import React, { useState } from 'react'
import Modal from 'react-modal'
import TablaProductos from '../productsTable'

const Card = ({ categoria, title, content, imageSrc }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  // Función para abrir el modal
  const openModal = () => {
    console.log(categoria)
    setModalIsOpen(true)
  }

  // Función para cerrar el modal
  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
        <div className="grid gap-5 relative group border border-gray-300 rounded-lg p-10 h-80  ">
            <img
                alt='img'
                className="rounded-lg object-cover w-full aspect-[16/9] group-hover:opacity-50 transition-opacity"
                src={imageSrc}
            />
            <div className="grid gap-1">
                <h3 className="font-semibold">{title}</h3>
                <p className="text-sm leading-none">{content}</p>
            </div>

            <button onClick={openModal} className="inline-flex font-medium items-center text-blue-600 hover:underline">
                Ver productos
                <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                </svg>
            </button>

            {/* Modal para mostrar los productos */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={{
                  overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)' // Fondo semi-transparente
                  },
                  content: {
                    backgroundColor: 'transparent', // Fondo transparente
                    border: 'none', // Sin borde
                    padding: 0, // Sin relleno
                    top: '50%', // Centrar verticalmente
                    left: '50%', // Centrar horizontalmente
                    right: 'auto',
                    bottom: 'auto',
                    transform: 'translate(-50%, -50%)', // Centrar el modal
                    overflow: 'visible' // Permitir que el contenido sobresalga del modal
                  }
                }}
            >
                <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '5px' }}>
                    <div className="w-full flex justify-end">
                        <button onClick={closeModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Cerrar
                        </button>
                    </div>
                    <div className="w-full flex justify-center">
                        <TablaProductos categoria={categoria} />
                    </div>
                </div>
            </Modal>

        </div>
  )
}

export default Card
