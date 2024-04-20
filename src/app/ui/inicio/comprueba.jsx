'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Cart from './cart';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '/src/app/swiper.css';
import { Pagination, Navigation } from 'swiper/modules';
import productos from './productos.json';

export default function Sliderbar() {
    const swiperStyle = {
        width: '95%'
    };

    // Filtra solo los productos en venta
    const productosVenta = productos.filter(producto => producto.estado === 'venta');

    return (
        <>
            <Swiper
                style={swiperStyle}
                slidesPerView={1}
                spaceBetween={10}
                navigation
                loop
                pagination={false}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 1,
                    },
                }}
                modules={[Pagination, Navigation]}
                className='mySwiper'
            >
                {productosVenta.map(item => (
                    <SwiperSlide key={item.id}>
                        <Cart
                            id={item.id}
                            image={item.image}
                            descrip={item.descrip}
                            puntuacion={item.puntuacion}
                            prom={item.prom}
                            precio={item.precio}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
