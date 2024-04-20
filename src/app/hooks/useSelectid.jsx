'use client'
import { useState } from 'react'

export default function useSelectId() {
  const [selectId, setSelectId] = useState(null)
  const [saveSelectId, setSaveSelectId] = useState(null)

  // const storedSelectId = localStorage.getItem('selectId');
  //const storedSaveSelectId = localStorage.getItem('saveSelectId');
  //setSelectId(storedSelectId);
  //setSaveSelectId(storedSaveSelectId);

  return { selectId, saveSelectId }
}

