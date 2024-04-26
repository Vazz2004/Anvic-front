import React from 'react'
import Boton from '../../uiMother/boton'
import { TrashIcon } from '@heroicons/react/24/outline'
import Swal from 'sweetalert2'
const FormEliminar = (props) => {
  const confirmarBorrado = () => {
    Swal.fire({
      title: '¿Está seguro de borrar?',
      text: 'Este es un proceso irreversible',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, borrar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Borrar',
          text: 'Su archivo ha sido eliminado.',
          icon: 'success'
        })
      }
    })
  }

  return (
        <>
        <Boton
        bgColor='error'
        icon={<TrashIcon className='w-6 h-6' />}
        tooltip={'borrar'}
        onClick={confirmarBorrado}
      />
        </>
  )
}

export default FormEliminar
