import React, { useState, useEffect } from 'react'
import { api } from '../../../../api/api'
import useSelectId from '../../../hooks/useSelectid'
import DataTable from '../../../ui/uiMother/dataTable'
import Botonera from '../../uiMother/botonera'
import { EyeSlashIcon } from '@heroicons/react/24/outline'
import FormProducto from '../../../ui/perfil/productos/agregarProductos'
function TablaProductos ({ categoria }) {
  const { selectedId } = useSelectId()
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [reload] = useState(false) // Nuevo estado para controlar la recarga

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get('/clientes/ordenes')
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
  }, [reload]) // Hacer que useEffect se ejecute cuando reload cambie

  const filteredData = categoria ? data.filter(row => row.nombre_categoria === categoria) : data

  const columns = [
    { field: 'fecha_pedido', headerName: 'Fecha pedido', width: 90 },
    { field: 'estado', headerName: 'Estado del pedido', width: 150 },
    { field: 'total', headerName: 'Total pagado', width: 150 },
    { field: 'nombre_producto', headerName: 'Producto', width: 150 },
    { field: 'marca', headerName: 'marca', width: 150 },
    { field: 'descripcion', headerName: 'descripcion', width: 150 },
    {
      field: 'url_img',
      headerName: 'Imagen',
      width: 250,
      renderCell: (params) => (
        <img src={params.value} alt="" style={{ width: '100%', height: '100%' }} />
      )
    }
  ]

  return (
    <div className='mt-10 '>
      <h1 className="text-3xl font-bold tracking-tight">Ordenes</h1>
      {<Botonera
          agregar={
            <FormProducto
              icon={<EyeSlashIcon className='w-6 h-6' />}
              bgColor='secondary'
              id={null}
              label='Agregar Producto'
            />
          }
        />}
      <p className="text-gray-500 dark:text-gray-400">Revisa tur ordenes pendientes</p>
      {error && <p>{error}</p>}
      <DataTable columns={columns} rows={filteredData} selectId={selectedId} />
      {selectedId && <p>Selected ID: {selectedId}</p>}
    </div>
  )
}

export default TablaProductos
