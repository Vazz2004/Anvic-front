'use client'
import { useState, useEffect } from 'react'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Button, Grid } from '@mui/material'
import Box from '@mui/material/Box'
import { api } from '../../../../api/api'
import dayjs from 'dayjs'

'use client'
import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Grid } from '@mui/material'
import { api } from '../../../../api/api'
import dayjs from 'dayjs'
export default function Page () {
  const [dataCard, setDataCard] = useState([])
  useEffect(() => {
    const traerDatos = async () => {
      try {
        const response = await api.get('/clientes/historial/1')
        setDataCard(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    traerDatos()
  }, [])
  const [dataCard, setDataCard] = useState([])
  useEffect(() => {
    const traerDatos = async () => {
      try {
        const response = await api.get('/clientes/historial/1')
        setDataCard(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    traerDatos()
  }, [])
  const [dataCard, setDataCard] = useState([])
  useEffect(() => {
    const traerDatos = async () => {
      try {
        const response = await api.get('/clientes/historial/1')
        setDataCard(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    traerDatos()
  }, [])
  return (
    <>
  {dataCard.length === 0 ? (
    <div className='flex flex-col items-center justify-center h-full'>
    <img src="https://i.ibb.co/r7tDx56/Black-Modern-Hacker-Cat-T-Shirt.png" className='w-52 sm:w-56 lg:w-56 mx-auto opacity-70' alt="No hay datos" />
    <Typography variant="body1" color="textPrimary" className="text-center mt-4">
      No hay datos disponibles o aun se entregan
    </Typography>
  </div>

  ) : (
    <Box sx={{ minWidth: 800, padding: '20px 0' }}>
                  <h1 className="text-3xl font-bold tracking-tight">Tus ordenes </h1>
            <p className="text-gray-500 dark:text-gray-400">El estado y las ordenes pendientes por entregar</p>
      {dataCard.map((carta, index) => (
        <div key={index} className='bg-white rounded-lg shadow-lg mb-8'>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={5}>
                <img className='max-w-full mx-auto' src='https://http2.mlstatic.com/D_NQ_NP_768848-MCO54251644979_032023-O.webp' alt="Imagen del producto" />
              </Grid>
              <Grid item xs={12} sm={7}>
                <div className='pt-5'>
                  <div className='justify-center text-center mb-4 flex flex-col'>
                    <Typography variant="h6" color="textPrimary" gutterBottom>
                      Detalles del pedido
                    </Typography>
                    <div className='mb-2 flex items-center'>
                      <Typography variant="subtitle1" color="textPrimary">
                        Número de orden: ANV-{carta.id_orden}
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary" className='ml-2'>
                        {carta.numero_orden}
                      </Typography>
                    </div>
                    <div className='mb-2 flex items-center'>
                      <Typography variant="subtitle1" color="textPrimary">
                        Fecha de compra:
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary" className='ml-2'>
                        {dayjs(carta.fecha_pedido).format('DD/MM/YYYY')}
                      </Typography>
                    </div>
                    <div className='mb-2 flex items-center'>
                      <Typography variant="subtitle1" color="textPrimary">
                        Valor:
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary" className='ml-2'>
                        ${carta.total}
                      </Typography>
                    </div>
                    <div className='mb-2 flex items-center'>
                      <Typography variant="subtitle1" color="textPrimary">
                        Estado:
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary" className='ml-2'>
                        {carta.estado}
                      </Typography>
                    </div>
                  </div>
                  <div className='mt-4'>
                    <Button variant="contained" color="primary">
                      Ver detalles
                    </Button>
                  </div>
                </div>
              </Grid>
            </Grid>
          </CardContent>
        </div>
      ))}
    </Box>
  )}

    </>
    <>
      <Box sx={{ minWidth: 700 }}>
        {dataCard.map((carta, index) => (
          <div key={index} className='bg-gray-100 rounded-lg border-slate-800  shadow  mt-20'>  <CardContent>
          <Grid container columns={12}>
            <Grid item xs={12} sm={6}>
              <img className='max-w-xs' src="https://firebasestorage.googleapis.com/v0/b/anvic-image.appspot.com/o/fe2e47eb-2938-4b1d-a185-e13ad44056ee?alt=media&token=b79a5c53-2f4a-4e51-a353-6fde972c17c6" alt="Imagen producto" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className='pt-5'>
                <div className='justify-center text-center mb-1.5  flex gap-2 '>
                  <Typography sx={{ fontSize: 16 }} variant="h5">
                    Numero de orden:
                  </Typography>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary">
                    {}
                  </Typography>
                </div>
                <div className='justify-center text-center mb-1.5  flex gap-2 '>
                  <Typography sx={{ fontSize: 16 }} variant="h5">
                    Fecha compra:
                  </Typography>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary">
                    {dayjs(carta.fecha_pedido).format('DD/MM/YYYY')}
                  </Typography>
                </div>
                <div className='justify-center text-center mb-1.5  flex gap-2 '>
                  <Typography sx={{ fontSize: 16 }} variant="h5">
                    Valor:
                  </Typography>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary">
                  {carta.precio}
                  </Typography>
                </div>
                <div className='justify-center text-center mb-1.5  flex gap-2 '>
                  <Typography sx={{ fontSize: 16 }} variant="h5">
                    Estado:
                  </Typography>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary">
                  {carta.estado}
                  </Typography>
                </div>
              </div>
            </Grid>
          </Grid>
        </CardContent></div>
        ))}
      </Box>
    </>
  )
}
