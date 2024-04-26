import { useState, useEffect } from 'react'

export default function useSelectId (initialId) {
  const [selectId, setSelectId] = useState(initialId)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      if (selectId !== undefined) {
        localStorage.setItem('id', selectId)
        const idLocalStorage = localStorage.getItem('id')
        console.log('id hook', idLocalStorage)
      }
    } else {
      console.error("El objeto 'window' no está definido o 'localStorage' no está disponible. No es un entorno de navegador.")
    }
  }, [selectId])

  return { selectId, setSelectId }
}
