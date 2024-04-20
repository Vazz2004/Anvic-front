import Nav from '../../app/ui/inicio/nav'
import Iconwha from '../../app/ui/inicio/iconWhatsapp'
import Footer from '../../app/ui/inicio/footer'
import Prueba from '../../app/ui/inicio/ofertas'
import Banner from '../../app/ui/inicio/baner.jsx'
import Contador from '../../app/ui/inicio/condor'


export default function page(){
  return(
    <>
        <Iconwha />
    <Nav />

    <h2 className="text-center mt-10 font-bold tracking-tight text-black sm:text-4xl">
           Super <strong className='text-orange-500' >Ofertas Anvic</strong>
            </h2>

            <Contador />

            <Prueba />
            <div className='mt-10' >

            </div>

        <div className='flex justify-center' >
          
        <img className="block m-auto w-11/12 h-80" src='https://th.bing.com/th/id/OIG.Ea5mlHBu.L9LCP7qHojQ?pid=ImgGn' alt="product image" />  
        </div>            
        
        <Prueba />
    <Footer />



    </>
    
  );
}