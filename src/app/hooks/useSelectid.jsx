'use client'
import { useState } from 'react'

export default function useSelectId () {
  // eslint-disable-next-line no-unused-vars
  const [selectId, setSelectId] = useState(null)
  // eslint-disable-next-line no-unused-vars
  const [saveSelectId, setSaveSelectId] = useState(null)

  //  const storedSelectId = localStorage.getItem('selectId')
  // const storedSaveSelectId = localStorage.getItem('saveSelectId')
  // setSelectId(storedSelectId)
  // setSaveSelectId(storedSaveSelectId)

  return { selectId, saveSelectId }
}
