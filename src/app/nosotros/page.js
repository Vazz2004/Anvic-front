import Nosotros from'../ui/inicio/nosotros.jsx'
import Nav from '../ui/inicio/nav.jsx'
import Nav2 from '../ui/inicio/nav2.jsx'
import Footer from '../ui/inicio/footer.jsx'
import Iconwha from '../ui/inicio/iconWhatsapp'
export default function page(){
  return(
    <>
    <Nav />
    <Iconwha />
    <Nosotros  />
    <Footer  />
   </> 
  );
}