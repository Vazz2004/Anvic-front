'use client'
import { useState, useEffect } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Button, Grid } from '@mui/material'
import { api } from '../../../../api/api'
import useSelectId from '../../../hooks/useSelectid'
import DataTable from '../../../ui/uiMother/dataTable'
import Botonera from '../../uiMother/botonera'
import { EyeIcon } from '@heroicons/react/24/outline'
import FormProducto from '../../../ui/perfil/productos/agregarProductos'
function TablaProductos ({ categoria }) {
  const { selectedId } = useSelectId()
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [reload] = useState(false) // Nuevo estado para controlar la recarga
import dayjs from 'dayjs'
export default function Page () {
  const [dataCard, setDataCard] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get('/clientes/ordenes')
        const dataWithIds = res.data.map((row, index) => ({ ...row, id: index + 1 }))
        setData(dataWithIds)
        const response = await api.get('/clientes/ordenes')
        setDataCard(response.data)
      } catch (error) {
        console.log(error)
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
  }, [])

  return (
    <div className='mt-10 '>
      <h1 className="text-3xl font-bold tracking-tight">Ordenes</h1>
      <p className="text-gray-500 dark:text-gray-400">Revisa tur ordenes pendientes</p>
      {<Botonera
          agregar={
            <FormProducto
              icon={<EyeIcon className='w-6 h-6' />}
              bgColor='secondary'
              id={null}
              label='Agregar Producto'
            />
          }
        />}
      {error && <p>{error}</p>}
      <DataTable columns={columns} rows={filteredData} selectId={selectedId} />
      {selectedId && <p>Selected ID: {selectedId}</p>}
    </div>
    <div className='bg-gray-200 p-5'> {/* Agregamos padding al contenedor principal */}
    <div className="grid gap-1">
            <h1 className="text-3xl font-bold tracking-tight">Tus ordenes </h1>
            <p className="text-gray-500 dark:text-gray-400">El estado y las ordenes pendientes por entregar</p>
        </div>
    {dataCard.map((carta, index) => (
      <div key={index} className='mb-6'> {/* Agregamos margen inferior a cada tarjeta */}
        <Card className='rounded-lg shadow-lg border border-gray-200'>
          <CardContent className='px-6 py-4'> {/* Ajustamos el padding */}
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <img className='max-w-xs mx-auto object-cover border rounded-md' src={carta.url_img} alt="Imagen producto" /> {/* Agregamos borde y ajustamos el tamaño de la imagen */}
              </Grid>
              <Grid item xs={12} sm={6}>
                <div className='flex flex-col h-full'>
                  <Typography variant="h5" gutterBottom>
                    Número de orden: {carta.numero_orden}
                  </Typography>
                  <Typography variant="body1" color="textSecondary" gutterBottom>
                    Fecha de compra: {dayjs(carta.fecha_pedido).format('DD/MM/YYYY')}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Valor: {carta.total}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Estado: {carta.estado}
                  </Typography>
                  <div className='mt-auto'>
                    <Button variant="contained" color="primary">
                      Ver detalles
                    </Button>
                  </div>
                </div>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>
    ))}
</div>

  )
}
