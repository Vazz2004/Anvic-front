'use client'
import Nav from '../../app/ui/inicio/nav'
import Servicios from '../../app/ui/inicio/servicios'
import Iconwha from '../../app/ui/inicio/iconWhatsapp'
import Footer from '../../app/ui/inicio/footer'
export default function page(){
  return(
    <>
    <Iconwha />
    <Nav />
    <Servicios />
    <Footer />
    </>
    
  );
}