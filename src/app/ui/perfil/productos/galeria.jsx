import React from 'react';

export default function Galeria({ datos }) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-10 mt-10">
            {datos.map((url, index) => ( // Cambiamos "objeto" a "url" ya que ahora datos es un array de URLs directamente
                <div key={index}>
                    <img className="h-auto max-w-full rounded-lg transition-opacity duration-300 hover:opacity-50" src={url} alt="" /> {/* Cambiamos objeto.image a url */}
                </div>
            ))}
        </div>
    );
}
