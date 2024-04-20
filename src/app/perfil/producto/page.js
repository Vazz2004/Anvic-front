import Nav from '../../ui/perfil/nav.jsx';
import Cards from '../../ui/perfil/productos/mostarCarta.jsx'
import '../../globals.css'
export default function Page() {
  return (
    <>
  <div className='flex items-start w-full'>
    <Nav />
  <div className='ml-36 mt-10' >
     <Cards />
  </div>

  </div>

    </>
  );
}
