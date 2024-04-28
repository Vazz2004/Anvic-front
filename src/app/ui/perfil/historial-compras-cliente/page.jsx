'use client'
import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Button, Grid } from '@mui/material'
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
  return (
    <>
      <Box sx={{ minWidth: 800, padding: '20px 0' }}>
  {dataCard.map((carta, index) => (
    <div key={index} className='bg-white rounded-lg shadow-lg mb-8'>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={5}>
            <img className='max-w-full mx-auto' src={carta.url_img} alt="Imagen del producto" />
          </Grid>
          <Grid item xs={12} sm={7}>
            <div className='pt-5'>
              <div className='justify-center text-center mb-4 flex flex-col'>
                <Typography variant="h6" color="textPrimary" gutterBottom>
                  Detalles del pedido
                </Typography>
                <div className='mb-2 flex items-center'>
                  <Typography variant="subtitle1" color="textPrimary">
                    Número de orden:
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

    </>
  )
}
