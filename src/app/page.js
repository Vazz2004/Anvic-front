import Nav from './ui/inicio/nav'
import Carrusel from './ui/inicio/carrusel'
import Prueba from './ui/inicio/comprueba'
import Promo from './ui/inicio/promoApp'
import Estadisticas from'./ui/inicio/estadisticas.jsx'
import Socios from './ui/inicio/asociados'
import Footer from './ui/inicio/footer'
import Baner from './ui/inicio/baner'
import Iconwha from './ui/inicio/iconWhatsapp'

export default function page(){
  return(
    <>
        <Iconwha />
    <Nav />
    <Carrusel />
    <h2 className="text-center mt-10 font-bold tracking-tight text-black sm:text-4xl">
              Nuestros Productos destacados
            </h2>
    <Prueba />
    <h2 className="text-center mt-36 font-bold tracking-tight text-black sm:text-4xl">
              Promisiones Destacadas
            </h2>
    <Promo />
    <Baner />

    <h2 className="text-center mt-36 font-bold tracking-tight text-black sm:text-4xl">
              Todos Nuestros Productos
            </h2>
    <Prueba />
    <Prueba />
    <Prueba />
    <Estadisticas />
    <Socios />
    <Footer />



    </>
    
  );
}