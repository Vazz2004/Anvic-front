import React, { useState } from 'react'

export default function Galeria ({ datos }) {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const handleMouseEnter = (index) => {
    setHoveredIndex(index)
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
  }

  const handleDeleteClick = (url, e) => {
    e.preventDefault()
    console.log('Imagen eliminada:', url)
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-10 mt-10">
    {datos.map((url, index) => (
      <div key={index} className="relative" onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
        <button onClick={(e) => {
          e.preventDefault()
          console.log(url)
        }}>
          <img
            className="h-auto max-w-full rounded-lg transition-opacity duration-300 hover:opacity-50"
            src={url}
            alt=""
            style={{ width: '100%', height: '200px' }} // Ajusta la altura según tu preferencia
          />
        </button>
        {hoveredIndex === index && (
          <button
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              color: 'red',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
            onClick={() => handleDeleteClick(url)}
          >
            Eliminar
          </button>
        )}
      </div>
    ))}
  </div>
  )
}
