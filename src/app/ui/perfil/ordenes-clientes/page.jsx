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
        const response = await api.get('/clientes/ordenes')
        setDataCard(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    traerDatos()
  }, [])
  return (
    <>
      <Box sx={{ minWidth: 700 }}>
        {dataCard.map((carta, index) => (
          <div key={index} className='bg-gray-100 rounded-lg border-slate-800  shadow  mt-20'>  <CardContent>
          <Grid container columns={12}>
            <Grid item xs={12} sm={6}>
              <img className='max-w-xs' src={carta.url_img} alt="Imagen producto" />
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
                  {carta.total}
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
