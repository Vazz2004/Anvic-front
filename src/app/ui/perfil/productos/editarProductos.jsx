'use client'
import { Grid, Modal } from '@mui/material'
import Input from '../../uiMother/Input'
import Selects from '../../uiMother/Selects'
import Boton from '../../uiMother/boton'
import { useHabilitar } from '../../../hooks/useHabilitar'
import React, { useState } from 'react'
import { api } from '../../../../api/api'
import Alerta from '../../alertas/alert'
import Swal from 'sweetalert2'
const defaultValues = {
  tituloProducto: '',
  descripcion: '',
  marca: '',
  precio: '',
  id_categoria: '',
  id_producto: ''
}

const FormProductoEditar = (props) => {
  const { id, label, bgColor, icon, tooltip } = props
  const { deshabilitado, validarId } = useHabilitar({ id })
  const [open, setOpen] = useState(false)
  const [data, setData] = useState({})
  const [values, setValues] = useState(defaultValues)
  const [categorias, setCategorias] = useState([])
  const [errorCaract] = useState(false)
  const [errorCampos] = useState(false)
  const [tipoProducto, setTipoProducto] = useState([])
  let idHok = null

  const peticiones = () => {
    async function fetchData () {
      try {
        const response = await api.get(`producto/productos-id/${idHok}`)
        setData(response.data[0])
        setValues(response.data[0]) // Establecer valores iniciales con los datos de la petición
        console.log('data:', response.data)
      } catch (error) {
        console.log('Error:', error)
      }
    }
    fetchData()

    async function fetchDataCategorias () {
      try {
        const response = await api.get('producto/categorias')
        setCategorias(response.data)
      } catch (error) {
        console.log('Error al obtener las categorías')
      }
    }
    fetchDataCategorias()

    async function feachDataTipoProducto () {
      try {
        const response = await api.get('producto/tipo-producto')
        setTipoProducto(response.data)
      } catch (error) {
        console.log('error al obtener los tipo e productos', error)
      }
    }
    feachDataTipoProducto()
  }

  const handleClose = () => {
    setOpen(false)
  }
  const handleModal = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      setOpen(true)
      const idFromStorage = localStorage.getItem('id')
      idHok = idFromStorage
      console.log('HOCK FORM', idHok)
      peticiones()
    } else {
      console.error("El objeto 'window' no está definido o 'localStorage' no está disponible. No es un entorno de navegador.")
    }
  }

  const handleEnvioBasic = async () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        const idFromStorage = localStorage.getItem('id')
        idHok = idFromStorage
        const response = await api.patch(`producto/update-product-basic/${idHok}`, values)
        if (response) {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer
              toast.onmouseleave = Swal.resumeTimer
            }
          })
          Toast.fire({
            icon: 'success',
            title: 'Signed in successfully'
          })
          handleClose()
        }
      } catch (error) {
        console.log('error')
      }
    } else {
      console.error("El objeto 'window' no está definido o 'localStorage' no está disponible. No es un entorno de navegador.")
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log('enviado')

    console.log(values)
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setValues({
      ...values,
      [name]: value
    })
  }

  return (
    <div>
      <Boton
        onClick={handleModal}
        bgColor={bgColor}
        icon={icon}
        tooltip={tooltip}
        disabled={deshabilitado}
      />
      <Modal
        open={open}
        onClose={handleClose}
      >
        <form onSubmit={handleSubmit} className=' overflow-scroll absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] border border-solid border-black rounded-lg shadow p-4 bg-white h-96' autoComplete='off' id='form' noValidate>
          <h1 className='text-3xl text-center mb-2'>{label}</h1>
          {errorCaract && (
            <Alerta tipo="danger" mensaje="Por favor selecciona una categoria" />
          )}

          {errorCampos && (
            <Alerta tipo="danger" mensaje="Por favor completa los campos" />
          )}

          <Grid container spacing={2} columns={12}>
            <>
              {/** modulo 1 */}
              {data && (

                <Grid item xs={12} sm={12}>
                  <Input
                    id='nombre_producto'
                    fullWidth
                    label='Titulo Producto'
                    name='nombre_producto'
                    value={values.nombre_producto} // Utilizar el valor del estado del formulario
                    required
                    row
                    onChange={handleInputChange} // Manejar cambios en el valor del campo
                  />
                </Grid>
              )}
              {data && (

                <Grid item xs={12} sm={12}>
                  <Input
                    id='descripcion'
                    fullWidth
                    label='Descripcion'
                    name='descripcion'
                    value={values.descripcion} // Utilizar el valor del estado del formulario
                    required
                    row
                    onChange={handleInputChange} // Manejar cambios en el valor del campo
                  />
                </Grid>
              )}

              {data && (

                <Grid item xs={12} sm={12}>
                  <Input
                    id='marca'
                    fullWidth
                    label='Marca'
                    name='marca'
                    value={values.marca} // Utilizar el valor del estado del formulario
                    required
                    onChange={handleInputChange} // Manejar cambios en el valor del campo
                  />
                </Grid>
              )}

              {data && (
                <Grid item xs={12} sm={12}>
                  <Input
                    id='precio'
                    fullWidth
                    label='Precio'
                    name='precio'
                    type="number"
                    required
                    value={values.precio}
                    onChange={handleInputChange}
                  />
                </Grid>
              )}

              <Grid item xs={12} sm={12}>
                {validarId ? (
                  <Input
                    id='idCategoria'
                    fullWidth
                    label='Categoria'
                    name='idCategoria'
                    value={values.idCategoria || ''}
                    onChange={handleInputChange}
                    disabled={true}
                    required
                  />
                ) : (
                  <Selects
                    id='id_categoria'
                    label='Categoria'
                    name='id_categoria'
                    value={values.id_categoria}
                    onChange={handleInputChange}
                    items={categorias}
                    disabled={false}
                    required
                  />
                )}
              </Grid>

              <Grid item xs={12} sm={12}>
                {validarId ? (
                  <Input
                    id='idTipoProducto'
                    fullWidth
                    label='Tipo producto'
                    name='idTipoProducto'
                    value={values.value}
                    onChange={handleInputChange}
                    disabled={true}
                    required
                  />
                ) : (
                  <Selects
                    id='id_producto'
                    label='Tipo Producto'
                    name='id_producto'
                    value={values.id_producto} // Cambiado de `values.value` a `values.idTipoProducto`
                    onChange={handleInputChange}
                    items={tipoProducto}
                    disabled={false}
                    required
                  />
                )}
              </Grid>

              <Grid item xs={12} sm={12}>
                <button
                  onClick={handleEnvioBasic}
                  className="flex w-full justify-center rounded-md bg-orange-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Editar caracteristicas basicas
                </button>
              </Grid>

            </>
          </Grid>
        </form>
      </Modal>
    </div>
  )
}

export default FormProductoEditar
