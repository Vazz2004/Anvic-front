'use client'
import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Button, Grid } from '@mui/material'
import { api } from '../../../../api/api'
import dayjs from 'dayjs'

export default function Page () {
  const [dataCard, setDataCard] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/clientes/ordenes')
        setDataCard(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  return (<Box sx={{ minWidth: 700 }}>
    {dataCard.map((carta, index) => (
      <Card key={index} className='rounded-lg shadow-lg mt-20'>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <img className='max-w-xs mx-auto' src={carta.url_img} alt="Imagen producto" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className='flex flex-col justify-center h-full'>
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
    ))}
  </Box>

  )
}
