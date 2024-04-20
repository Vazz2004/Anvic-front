'use client'
import uploadFile from '../../../../firebase/config'
import { Grid, Modal } from '@mui/material'
import Input from '../../uiMother/Input'
import Selects from '../../uiMother/Selects'
import Boton from '../../uiMother/boton'
import { useHabilitar } from '../../../hooks/useHabilitar'
import React, { useEffect, useState } from 'react'
import useForm from '../../../hooks/useForm'
import { PlusIcon } from '@heroicons/react/24/outline'
import { api } from '../../../../api/api';
import Alerta from '../../alertas/alert'
import Galeria from './galeria'
import UploadedImage from './imagenesSubir'
import { Try } from '@mui/icons-material'

const defaultValues = {
    tituloProducto: '',
    idCategoria: '',
    marca: '',
    precio: '',
    fecha: (new Date()).toISOString().substr(0, 10),
    fichaTecnica: {},
    idTipoProducto: ''
}








const FormProducto = (props) => {
    const { id, label, bgColor, icon, tooltip, actualizar, dato, successMessage, errorMessage } = props
    const { deshabilitado, validarId } = useHabilitar({ id })
    const [open, setOpen] = useState(false)
    const { values, setValues, handleInputChange } = useForm(defaultValues)
    const [categorias, setCategorias] = useState([])
    const [idCategoria, setIdCategoria] = useState([values.idCategoria]);
    const [color, setColor] = useState([])
    const [caract, setCaract] = useState([]);
    const [file, setFile] = useState(null);
    const [image, setImage] = useState({
        url: ''
    });
    const [selectedColor, setSelectedColor] = useState('')
    const [tipoProducto, setTipoProducto] = useState([])
    const [errorCaract, setErrorCaract] = useState(false)
    const [errorCampos, setErrorCampos] = useState(false)
    const [errorTecnicas, setErrorTecnicas] = useState(false)
    const [mostarrErorrColores, setMostarrErorrColores] = useState(false)
    const [mostarrValidacion, setMOstarrValidacion] = useState(false)
    const [imagenesProducto, setImagenesProducto] = useState('')
    //Seteo mensaje
    const [errorColores, setErrorColores] = useState('')

    // Estado para msotrar los modulos del formulario
    const [mostrarElemento1, setMostrarElemento1] = useState(true)
    const [mostrarElemento2, setMostrarElemento2] = useState(false)
    const [mostrarElemento3, setMostrarElemento3] = useState(false)
    const [mostrarElemento4, setMostrarElemento4] = useState(false)

    const [valuesColor, setValuesColor] = React.useState({
        idColor: '',
        cantidad: ''
    })



    //Peticiones
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await api.get('producto/categorias')
                setCategorias(response.data)
            } catch (error) {
                console.log('Error al obtener las categorías');
            }
        }
        fetchData();
    }, [])


    useEffect(() => {
        async function fetchData() {
            try {
                const response = await api.get('producto/colores')
                setColor(response.data)
            } catch (error) {
                console.log('Error al obtener las categorías');
            }
        }
        fetchData();
    }, [])



    const handleCaract = async (e) => {
        e.preventDefault();
        setMostrarElemento2(false)
        setMostrarElemento3(true)
        try {
            const response = await api.post('producto/create', values);
        } catch (error) {
            console.log('error en create', error);
        }



    }


    useEffect(() => {
        async function feachData() {
            try {
                const response = await api.get('producto/tipo-producto')
                setTipoProducto(response.data)
            } catch (error) {
                console.log('error al obtener los tipo e productos', error)
            }
        }
        feachData()
    }, [])




    const handleSubmitColor = async (e) => {
        e.preventDefault()
        try {
            const response = await api.post('producto/create-color-producto', valuesColor);
            setMOstarrValidacion(true);
            ocultarValidacion();
            setErrorCampos(false);
            setMostarrErorrColores(false)

        } catch (error) {
            setMostarrErorrColores(true)
            setMOstarrValidacion(false)
            setErrorColores(error.response.data.message)
        }
    }

    const handleSubmitProduc = async (e) => {
        e.preventDefault()
        // Validar campos antes de enviar
        if (!values.tituloProducto || !values.productoDescripcion || !values.marca || !values.precio || !values.idCategoria || !values.idTipoProducto) {
            // Mostrar mensaje de error o realizar alguna acción
            setErrorCampos(true)
            return;
        } else if (caract.some(dato => !values[`fichaTecnica-${dato.caracteristica_tecnica}`])) {
            // Si alguno de los campos de características técnicas está vacío
            setErrorTecnicas(true);
            return;
        } else {
            try {
                if (idCategoria) {
                    const response = await api.get(`producto/caracteristicas/${values.idCategoria}`);
                    setMostrarElemento1(false)
                    setMostrarElemento2(true)
                    setErrorCampos(false)
                    setErrorCaract(false)
                    setCaract(response.data);
                }
            } catch (error) {
                setErrorCaract(true)
            }
        }

    }

    const handleSubmitImage = async (e) => {
        e.preventDefault();

        try {
            console.log("uploading");

            // Verifica si se ha seleccionado un archivo
            if (!file) {
                console.log("No file selected");
                return;
            }

            const result = await uploadFile(file);
            setImage(result);


            // Si la carga de la imagen ha sido exitosa, envía la imagen al servidor
            if (result) {
                console.log(result)
                const response = await api.post('producto/create-img', {
                    url: result
                });
                async function fetchData() {
                    try {
                        const response = await api.get('producto/ver-img');
                        const urls = response.data
                            .flat() // Aplanar el array para eliminar arrays anidados
                            .filter(url => url !== null) // Filtrar las URL que no son nulas
                            .map(item => item.url_imagen); // Mapear los objetos a sus URLs de imagen
                        console.log('URLs de imagen:', urls);
                        setImagenesProducto(urls); // Ahora setImagenesProducto recibe un array de URLs
                    } catch (error) {
                        console.error(error);
                    }
                }

                fetchData();

            }
        } catch (error) {
            console.log("Error:", error);
        }
    };





    const handleInputChangeFicha = (event) => {
        const { name, value } = event.target;
        if (name.startsWith('fichaTecnica-')) {
            // Si el nombre del input comienza con 'fichaTecnica-',
            // significa que es un campo de características técnicas.
            // Extraemos el nombre de la característica técnica del nombre del input.
            const caracteristica = name.substring(14); // 14 es la longitud de 'fichaTecnica-'
            // Actualizamos el estado 'values' con la nueva característica técnica.
            setValues(prevValues => ({
                ...prevValues,
                fichaTecnica: {
                    ...prevValues.fichaTecnica,
                    [caracteristica]: value
                }
            }));
        } else {
            // Si no es un campo de características técnicas, actualizamos directamente 'values'.
            setValues(prevValues => ({
                ...prevValues,
                [name]: value
            }));
        }
    };

    const ocultarValidacion = () => {
        setTimeout(() => {
            setMOstarrValidacion(false);
        }, 3000); // 3000 milisegundos = 3 segundos
    };

    const handleModal = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }


    const handleInputImage = (e) => {
        setImage({
            url: e.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('enviado')



        console.log('enviado')
    };


    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleInputChangeColor = async (e) => {
        const { name, value } = e.target;
        setValuesColor({ ...valuesColor, [name]: value });
    }

    const handleProductColor = (e) => {
        e.preventDefault()
        if (!valuesColor.idColor || !valuesColor.cantidad) {
            setErrorCampos(true)
        } else {
            setMostrarElemento3(false)
            setMostrarElemento4(true)
            setImagenesProducto([
                'https://firebasestorage.googleapis.com/v0/b/anvic-image.appspot.com/o/imagenEjemplo.webp?alt=media&token=584a3ff4-9209-4042-b82c-13674cab8607'
            ]);
        }

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
                <form onSubmit={handleSubmit} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] border border-solid border-black rounded-lg shadow p-4 bg-white' autoComplete='off' id='form' noValidate>
                    <h1 className='text-3xl text-center mb-2'>{label}</h1>
                    {errorCaract && (
                        <Alerta tipo="danger" mensaje="Por favor selecciona una categoria" />
                    )}

                    {errorCampos && (
                        <Alerta tipo="danger" mensaje="Por favor completa los campos" />
                    )}

                    <Grid container spacing={2} columns={12}>
                        {mostrarElemento1 && (
                            <>
                                {/** modeulo 1 */}

                                <Grid item xs={12} sm={12}>
                                    <Input
                                        id='tituloProducto'
                                        fullWidth
                                        label='Titulo Producto'
                                        name='tituloProducto'
                                        value={values.tituloProducto}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </Grid>

                                <Grid item xs={12} sm={12}>
                                    <Input
                                        id='productoDescripcion'
                                        fullWidth
                                        label='Descripcion'
                                        value={values.productoDescripcion}
                                        name='productoDescripcion'
                                        onChange={handleInputChange}
                                        required
                                    />
                                </Grid>

                                <Grid item xs={12} sm={12}>
                                    <Input
                                        id='marca'
                                        fullWidth
                                        label='Marca'
                                        name='marca'
                                        value={values.idMarca}
                                        required
                                        onChange={handleInputChange}

                                    />
                                </Grid>

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
                                <Grid item xs={12} sm={12}>
                                    {validarId ? (
                                        <Input
                                            id='idCategoria'
                                            fullWidth
                                            label='Categoria'
                                            name='idCategoria'
                                            value={values.idCategoria || ''}
                                            onChange={handleInputChange}
                                            disabled={validarId}
                                            required
                                        />
                                    ) : (
                                        <Selects
                                            id='idCategoria'
                                            label='Categoria'
                                            name='idCategoria'
                                            value={values.idCategoria || ''}
                                            onChange={handleInputChange}
                                            items={categorias}
                                            disabled={validarId}
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
                                            id='idTipoProducto'
                                            label='Tipo Producto'
                                            name='idTipoProducto'
                                            value={values.tipo_producto} // Cambiado de `values.value` a `values.idTipoProducto`
                                            onChange={handleInputChange}
                                            items={tipoProducto}
                                            disabled={false}
                                            required
                                        />
                                    )}
                                </Grid>

                                <Grid item xs={12} sm={12}>
                                    <button
                                        onClick={handleSubmitProduc}
                                        className="flex w-full justify-center rounded-md bg-orange-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Guardar
                                    </button>
                                </Grid>
                            </>
                        )}


                        {/** modeulo 2 */}


                        {mostrarElemento2 && (
                            <>
                                {errorTecnicas && (
                                    <Alerta tipo="danger" mensaje="Por favor completa los campos" />
                                )}
                                {caract.map((dato, index) => (
                                    <Grid key={index} item xs={12} sm={12}>
                                        <Input
                                            id='idCaracteristica' // Usa un ID único para cada input
                                            fullWidth
                                            label={dato.caracteristica_tecnica} // Etiqueta puede ser personalizada
                                            name={`fichaTecnica-${dato.caracteristica_tecnica}`} // Usa un nombre único para cada input
                                            type="text"
                                            required
                                            value={values[`fichaTecnica-${dato.caracteristica_tecnica}`]} // Accede al valor correspondiente del estado utilizando dato.caracteristica_tecnica
                                            onChange={handleInputChangeFicha} // Usa la misma función de cambio para todos los inputs
                                        />
                                    </Grid>
                                ))}
                                <Grid item xs={12} sm={12}>
                                    <button
                                        onClick={handleCaract}
                                        className="flex w-full justify-center rounded-md bg-orange-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Guardar caracteristicas tecnicas
                                    </button>
                                </Grid>

                            </>
                        )}

                        {/** modeulo 3 */}

                        {mostrarElemento3 && (
                            <>
                                {mostarrErorrColores && (
                                    <div className="mt-10 mx-10">
                                        <Alerta tipo="danger" mensaje={errorColores} />
                                    </div>
                                )}

                                {mostarrValidacion && (
                                    <div className="mt-10 w-full mx-10 alerta opacity-0 animate-fadeIn transition-opacity duration-500 ease-in-out visible">
                                        <Alerta tipo="success" mensaje='Color agregado con éxito' />
                                    </div>
                                )}


                                <Grid Grid item xs={12} sm={12}>
                                    {validarId ? (
                                        <Input
                                            id='idColor'
                                            fullWidth
                                            label='Color'
                                            name='idColot' // Aquí debe ser 'idColor'
                                            value={valuesColor.idColor}
                                            onChange={handleInputChangeColor}
                                            disabled={validarId ? true : false}
                                            required
                                        />
                                    ) : (
                                        <Selects
                                            id='idColor'
                                            label='Color'
                                            name='idColor'
                                            value={valuesColor.idColor} // Aquí debes usar valuesColor en lugar de values
                                            onChange={(e) => {
                                                handleInputChange(e); // Actualiza el estado principal
                                                handleInputChangeColor(e); // Actualiza el estado para el color
                                                setSelectedColor(e.target.value);
                                            }}
                                            items={color}
                                            disabled={validarId}
                                            required
                                        />
                                    )}
                                </Grid>


                                <Grid item xs={12} sm={10}>
                                    <Input
                                        id='cantidad'
                                        label='Cantidad'
                                        name='cantidad'
                                        type="number"
                                        required
                                        value={valuesColor.cantidad}
                                        onChange={handleInputChangeColor}
                                    />
                                </Grid>




                                <Grid item xs={12} sm={2}>
                                    <Boton
                                        onClick={handleSubmitColor}
                                        icon={<PlusIcon sx={{ fontSize: 40 }} />}
                                        tooltip='Agregar color y cantidad'
                                    />
                                </Grid>
                                <div className="mt-10 mx-10">

                                    <Alerta tipo="warning" mensaje="Con el botón de '+' puedes agregar colores y cantidades, y puedes añadir varios colores y cantidades a la vez." />

                                </div>
                                <Grid item xs={12} sm={12}>
                                    <button
                                        onClick={handleProductColor}
                                        className="flex w-full justify-center rounded-md bg-orange-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Guardar color y cantidad
                                    </button>
                                </Grid>

                            </>
                        )}
                        {/** modeulo 4 */}
                        {mostrarElemento4 && (
                            <>
                                <Grid >
                                    <Grid >
                                        <div className='flex justify-center mt-10'>
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload file</label>
                                            <Input
                                                type="file"
                                                id="file_input"
                                                onChange={handleFileChange}
                                            />
                                        </div>
                                        <div className="mx-10">
                                            <p className="mt-1 text-sm text-gray-500 dark:text-black" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                                        </div>

                                    </Grid>
                                </Grid>

                                <Grid item xs={12} sm={12}>
                                    <button
                                        onClick={handleSubmitImage}
                                        className="flex w-full justify-center rounded-md bg-orange-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Guardar imagen
                                    </button>
                                </Grid>


                                <Grid item xs={12} sm={12}>
                                    {imagenesProducto.length > 0 ? (
                                        <Galeria datos={imagenesProducto} />
                                    ) : (
                                        <p>No hay imágenes disponibles para este producto.</p>
                                    )}

                                </Grid>



                                <Grid item xs={12} sm={12}>
                                    <button
                                        onClick={handleSubmit}
                                        className="flex w-full justify-center rounded-md bg-orange-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Finalizar
                                    </button>
                                </Grid>



                            </>
                        )}

                    </Grid>
                </form>
            </Modal>
        </div >
    )
}

export default FormProducto
