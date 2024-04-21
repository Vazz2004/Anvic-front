import React from 'react'

const Alerta = ({ tipo, mensaje }) => {
  let bgColor, textColor, borderColor, iconColor

  switch (tipo) {
    case 'info':
      bgColor = 'bg-blue-50'
      textColor = 'text-blue-800'
      borderColor = 'border-blue-300'
      iconColor = 'text-blue-400'
      break
    case 'danger':
      bgColor = 'bg-red-50'
      textColor = 'text-red-800'
      borderColor = 'border-red-300'
      iconColor = 'text-red-400'
      break
    case 'success':
      bgColor = 'bg-green-50'
      textColor = 'text-green-800'
      borderColor = 'border-green-300'
      iconColor = 'text-green-400'
      break
    case 'warning':
      bgColor = 'bg-yellow-50'
      textColor = 'text-yellow-800'
      borderColor = 'border-yellow-300'
      iconColor = 'text-yellow-300'
      break
    default:
      bgColor = 'bg-gray-50'
      textColor = 'text-gray-800'
      borderColor = 'border-gray-300'
      iconColor = 'text-gray-300'
  }

  return (
    <div
      className={`flex items-center p-4 mb-4 text-sm border rounded-lg ${bgColor} ${textColor} ${borderColor}`}
      role="alert"
    >
      <svg
        className={`flex-shrink-0 inline w-4 h-4 me-3 ${iconColor}`}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
      </svg>
      <span className="font-medium">{mensaje}</span>
    </div>
  )
}

export default Alerta
