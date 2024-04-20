import React from 'react';

const Servicios = () => {
    const serviciosData = [
        {
            icon: '/images/servis/1.png',
            title: 'Accesorios para celulares, tablets y computadoras',
            description:
                'En Anvic encontrarás una amplia variedad de accesorios para proteger y mejorar tu tecnología. Contamos con fundas, estuches, protectores de pantalla, cargadores, cables, auriculares, parlantes, teclados, mouse, y más.',
            link: '#',
        },
        {
            icon: '/images/servis/2.png',
            title: 'Repuestos de alta calidad',
            description:
                'Si necesitas reparar tu celular, tablet o computadora, en Anvic tenemos los repuestos que necesitas. Contamos con pantallas, partes traseras, visores de cámara, baterías, componentes internos, y tarjetas de memoria.',
            link: '#',
        },
        {
            icon: '/images/servis/3.png',
            title: 'Asesoramiento técnico personalizado',
            description:
                'Nuestro equipo de expertos está listo para ayudarte a encontrar la solución perfecta para tus necesidades tecnológicas. Te asesoramos en la selección de productos, la reparación de equipos, y la resolución de problemas.',
            link: '#',
        },
    ];

    return (
        <section className="bg-gradient-to-br from-gray-100 via-white to-gray-100 shadow-lg rounded-lg p-8">
            <h2 className="text-4xl font-semibold mb-8 text-center">Nuestros servicios</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {serviciosData.map((servicio, index) => (
                    <div
                        key={index}
                        className="border rounded-lg overflow-hidden transition-transform transform hover:scale-105 bg-white p-6 shadow-md"
                    >
                        <div className="flex items-center justify-center mb-6">
                            <img
                                src={servicio.icon}
                                alt={servicio.title}
                                className="w-full h-48 object-cover "
                            />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{servicio.title}</h3>
                        <p className="mb-4">{servicio.description}</p>
                        <a
                            href={servicio.link}
                            className="btn btn-primary block w-full text-center transition-all duration-300 transform hover:scale-105 bg-blue-500 text-white rounded-full py-2 px-4 shadow-md"
                        >
                            Ver más
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Servicios;
