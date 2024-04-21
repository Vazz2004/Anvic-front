import React from 'react'

function UploadedImage ({ image, onDelete }) {
  return (
    <div className="relative">
      <img className="w-10 h-10 mr-2 mb-2 rounded-lg" src={image} alt="" />
      <button
        className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 rounded-full bg-red-500 text-white text-xs font-bold"
        onClick={onDelete}
      >
        X
      </button>
    </div>
  )
}

export default UploadedImage
