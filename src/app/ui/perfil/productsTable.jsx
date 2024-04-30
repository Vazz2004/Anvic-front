import React, { useState, useEffect } from 'react'
import { api } from '../../../api/api'
import useSelectId from '../../hooks/useSelectid'
import DataTable from '../uiMother/dataTable'

function TablaProductos ({ categoria }) {
  const { selectedId } = useSelectId()
  const [data, setData] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get('/producto/ver')
        const dataWithIds = res.data.map((row, index) => ({ ...row, id: index + 1 }))
        setData(dataWithIds)
      } catch (error) {
        console.log('Error al obtener los productos:', error)
        setError('Error al obtener los productos')
      }
    }

    fetchData()

    const interval = setInterval(fetchData, 60000)

    return () => clearInterval(interval)
  }, []) // Hacer que useEffect se ejecute cuando reload cambie

  const filteredData = categoria ? data.filter(row => row.nombre_categoria === categoria) : data

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'nombre_producto', headerName: 'Nombre Producto', width: 150 },
    { field: 'precio', headerName: 'Precio', width: 150 },
    { field: 'marca', headerName: 'Marca', width: 150 },
    { field: 'descripcion', headerName: 'Descripción', width: 150 },
    { field: 'nombre_categoria', headerName: 'Nombre Categoría', width: 150 },
    {
      field: 'colores',
      headerName: 'Colores',
      width: 200,
      renderCell: (params) => (
        <div>
          <p>Nombres: {params.row.nombres_colores}</p>
          <p>Cantidad: {params.row.cantidad_colores}</p>
        </div>
      )
    }
  ]

  return (
    <div className='mt-10'>
      {error && <p>{error}</p>}
      <DataTable columns={columns} rows={filteredData} selectId={selectedId} />
      {selectedId && <p>Selected ID: {selectedId}</p>}
    </div>
  )
}

export default TablaProductos
