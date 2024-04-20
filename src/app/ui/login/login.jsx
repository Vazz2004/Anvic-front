'use client'
import React, { useState, useEffect } from "react";
import axios from 'axios'
import Modal from 'react-modal'

const Login = () => {
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [error, setError] = useState(false);
    const [userAuth, setUserAuth] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleCorreoChange = (event) => {
        setCorreo(event.target.value);
    };

    const handleContrasenaChange = (event) => {
        setContrasena(event.target.value);
    };


    const handleResgister = (event) => {
        e.preventDefault()
    }
    const authSesion = (e) => {
        e.preventDefault();

        axios.post('http://localhost:5000/login', {
            userCorreo: correo,
            userPassword: contrasena,
        }).then((response) => {
            if (response.data.user) {
                console.log('INICIO SESION CORRECTO')
            }
        }).catch((error) => {
            setModalIsOpen(true);
        });
    };

    const [token, setToken] = useState('');

    useEffect(() => {
        // Función para obtener el token del localStorage
        const getTokenFromLocalStorage = () => {
            const storedToken = localStorage.getItem('myToken');
            if (storedToken) {
                setToken(storedToken);
                console.log('si')
            }
        };

        getTokenFromLocalStorage();

    }, []);


    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-20 w-auto"
                        src="/images/Inicio/logo anvic.jpg"
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Entra en tu cuenta
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form
                        className="space-y-6"
                        action="#"
                        method="POST"
                        onSubmit={authSesion}
                    >
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Email
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={correo}
                                    onChange={handleCorreoChange}
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Contraseña
                                </label>
                                <div className="text-sm">
                                    <a
                                        href="#"
                                        className="font-semibold text-orange-600 hover:text-orange-500"
                                    >
                                        Olvido su contraseña
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="contrasena"
                                    name="password"
                                    type="password"
                                    value={contrasena}
                                    onChange={handleContrasenaChange}
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-orange-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Iniciar sesion
                            </button>

                            <button
                                onClick={handleResgister}
                                className="flex w-full mt-5 justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-md hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Registrarse
                            </button>


                        </div>
                    </form>
                </div>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={{
                    overlay: {
                        zIndex: 1000,
                    },
                }}
            >

                <h1>error de Inicio</h1>
            </Modal>

        </>
    );
};

export default Login;
