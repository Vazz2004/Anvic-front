'use client'
import { useState, useEffect } from 'react'
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

  return (
    <div className='bg-gray-200 p-5'> {/* Agregamos padding al contenedor principal */}
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
                    Número de orden: ANV-{carta.id_orden}
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
