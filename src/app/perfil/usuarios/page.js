'use client'
import  UsuariosRegistrados from'../../ui/perfil/usuarios/table'
import Nav from '../../ui/perfil/nav';

export default function(){
    return(
        <>
        <div className=' flex items-start' >
        <Nav />
        <UsuariosRegistrados />
        </div>
        
        </>
    )
}