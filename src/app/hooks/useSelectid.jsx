import { useState, useEffect } from 'react'

export default function useSelectId (initialId) {
  const [selectId, setSelectId] = useState(initialId)

  useEffect(() => {
    if (selectId !== undefined) {
      localStorage.setItem('id', selectId)
      const idLocalStorage = localStorage.getItem('id')
      console.log('id hook', idLocalStorage)
    }
  }, [selectId])

  return { selectId, setSelectId }
}
