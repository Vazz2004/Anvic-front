'use client'

import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
export default function MyCarousel () {
  const onChange = (index, item) => {
    console.log(`Slide cambiado a ${index} (${item})`)
  }

  const onClickItem = (index, item) => {
    console.log(`Clic en slide ${index} (${item})`)
  }

  const onClickThumb = (index, item) => {
    console.log(`Clic en miniatura ${index} (${item})`)
  }

  return (
        <Carousel className='block m-auto w-full carrusel h-64' showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb} showThumbs={false}>
            <div>
                <img
                    src='/images/Inicio/banerPrueba.webp'
                    width={500}
                    height={50}
                    alt='Samuel'
                    className='imgCarrusel h-64'
                />
            </div>

            <div>
                <img
                    src='https://http2.mlstatic.com/D_NQ_813231-MLA73870695420_012024-OO.webp'
                    width={50}
                    height={50}
                    alt='Samuel'
                    className='imgCarrusel h-64'
                />
            </div>
            {/* ... Agrega más slides aquí */}
        </Carousel>
  )
}
