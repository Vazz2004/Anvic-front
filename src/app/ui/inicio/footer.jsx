import React from 'react';

const PieDePagina = () => {
    return (
        <footer className="bg-white">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="https://flowbite.com/" className="flex items-center">
                            <img
                                src="/images/Inicio/logo anvic.jpg"
                                className="h-20 me-3"
                                alt="FlowBite Logo"
                            />
                            <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">
                                Anvic
                            </span>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        {/* ... Resto del contenido */}
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-black sm:text-center dark:text-black">
                        © 2023{' '}
                        <a href="https://flowbite.com/" className="hover:underline">
                            Anvic
                        </a>
                        . Todos los derechos reservados
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        {/* ... Enlaces de redes sociales */}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default PieDePagina;
