import React, { useState, useEffect } from 'react'
import { api } from '../../../../api/api'
import useSelectId from '../../../hooks/useSelectid'
import DataTable from '../../perfil/productsTable'

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
    { field: 'id', headerName: '# Orden', width: 90 },
    { field: 'nombre_producto', headerName: 'Producto', width: 150 },
    { field: 'precio', headerName: 'Precio', width: 150 },
    { field: 'marca', headerName: 'Marca', width: 150 },
    { field: 'descripcion', headerName: 'Descripción', width: 150 },
    { field: 'nombre_categoria', headerName: 'Nombre Categoría', width: 150 }
  ]

  return (
    <>
<div className='mt-10 '>
<h1 className='text-3xl font-bold tracking-tight' > Ordenes</h1>
<p className="text-gray-500 dark:text-gray-400">Tus ordenes y las compras de tus clientes</p>
        {error && <p>{error}</p>}
        <DataTable columns={columns} rows={filteredData} selectId={selectedId} />
        {selectedId && <p>Selected ID: {selectedId}</p>}
    </div>
    </>
  )
}

export default TablaProductos
