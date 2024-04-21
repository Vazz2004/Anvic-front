import { useEffect, useState } from 'react' // Asegúrate de importar React y los hooks necesarios

import api from '../../../api/api'

export default function Peticion (props) {
  const { ruta, mensajeError } = props

  // Define un estado para almacenar los datos obtenidos de la API
  const [datos, setDatos] = useState(null)

  useEffect(() => {
    async function fetchData () {
      try {
        const response = await api.get(ruta)
        console.log(response.data)
        setDatos(response.data)
      } catch (error) {
        console.log(`${mensajeError}`, error)
      }
    }
    fetchData()
  }, [ruta, mensajeError]) // Asegúrate de incluir todas las dependencias necesarias en el arreglo de dependencias

  // Devuelve los datos si existen
  return datos
}
