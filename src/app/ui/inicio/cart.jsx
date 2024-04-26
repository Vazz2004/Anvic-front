import React, { useState } from 'react'
import Modal from 'react-modal'

const ProductCard = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [selectedColor, setSelectedColor] = useState('negro')
  const [selectedQuantity, setSelectedQuantity] = useState(1)

  const handleCard = () => {
    setModalIsOpen(!modalIsOpen)
  }

  const handleCompra = (producto) => {
    const compra = {
      img: props.image,
      descrip: props.descrip,
      prom: props.prom,
      precio: props.precio
    }
    console.log(compra)
    handleCard() // Abre el modal al hacer clic en "Comprar"
  }

  return (
    <>
      <div key={props.id} className="relative w-11/12 card h-4/5 mt-10 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:border-gray-200">
        <a href="#">
          <img className="block m-auto p-8 h-40 rounded-t-lg" src={props.image} alt="product" />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-md font-semibold tracking-tight text-gray-900 dark:text-black">{props.descrip}</h5>
          </a>
          <div className="flex items-center mt-2.5 mb-5">{/* Iconos de estrellas */}</div>
          <span className="text-xs font-bold text-gray-900 dark:text-white bg-orange-500 p-1 text-white rounded-lg">{props.prom}</span>
          <div className="flex items-center justify-between ">
            <span className="text-base font-bold text-gray-900 dark:text-white">{props.precio}</span>
            <button
              onClick={() => handleCompra(props)}
              className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center dark:bg-orange-600 dark:hover:bg-orange-500 dark:focus:ring-orange-600 "
            >
              Comprar
            </button>
          </div>
        </div>
      </div>

<Modal
  isOpen={modalIsOpen}
  onRequestClose={() => setModalIsOpen(false)}
  style={{
    overlay: {
      zIndex: 1000
    }
  }}
  className="fixed inset-0 flex items-center justify-center w-full"
>
  <div className="bg-white w-10/12 h-96 p-8 rounded-lg shadow-lg flex">
    <div className="w-1/2  h-full mr-4">
      <img src={props.image} alt="" className="block m-auto p-8 h-64 rounded-t-lg" />
      {/* Ajusta la clase 'h-48' para establecer la altura fija deseada */}
    </div>
    <div className="w-1/2">
      {/* Resto del contenido del modal */}
      <p className="text-gray-700 mb-2">Descripción: {props.descrip}</p>
      <p className="text-green-500 mb-2">Promoción: {props.prom}</p>
      <p className="text-blue-500 mb-4">Precio: {props.precio}</p>

      {/* Selector de color */}
      <div className="mb-4">
        <label htmlFor="color" className="text-gray-700 block mb-2">
          Color:
        </label>
        <select
          id="color"
          name="color"
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="negro">Negro</option>
          <option value="azul">Azul</option>
          <option value="cafe">Café</option>
        </select>
      </div>

      {/* Selector de cantidad */}
      <div className="mb-4">
        <label htmlFor="quantity" className="text-gray-700 block mb-2">
          Cantidad:
        </label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={selectedQuantity}
          onChange={(e) => setSelectedQuantity(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="flex justify-between">
        <button
          onClick={() => handleCompra({ ...props, color: selectedColor, cantidad: selectedQuantity })}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Comprar
        </button>
        <button
          onClick={() => setModalIsOpen(false)}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
        >
          X
        </button>
      </div>
    </div>
  </div>
</Modal>

    </>
  )
}

export default ProductCard
