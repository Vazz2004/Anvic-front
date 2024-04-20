import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { MdOutlineSmartphone } from "react-icons/md";
import { FaTools, FaScrewdriver } from "react-icons/fa";
export default function Example() {
    return (
        <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <svg
                    className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                            width={200}
                            height={200}
                            x="50%"
                            y={-1}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                        <path
                            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                            strokeWidth={0}
                        />
                    </svg>
                    <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
                </svg>
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                            <p className="text-base font-semibold leading-7 text-indigo-600">Descubre Anvic</p>
                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Bienvenido a Anvic: Tu Destino para Accesorios y Repuestos Tecnológicos en Bogotá</h1>
                            <p className="mt-6 text-xl leading-8 text-gray-700">
                                Bienvenido a Anvic, tu socio confiable en el mundo de la tecnología. En el corazón de Bogotá, Anvic se destaca como la principal fuente de accesorios y repuestos para celulares, teléfonos y computadoras. Con un compromiso inquebrantable con la calidad y la satisfacción del cliente, hemos establecido nuestro lugar como líder en la industria.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <img
                        className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                        src="/images/Inicio/Nosotros.jpg"
                        alt=""
                    />
                </div>
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                            <p>
                                Nuestra Historia
                                Anvic nació de la pasión por la tecnología y la necesidad de proporcionar soluciones integrales a los entusiastas y usuarios cotidianos. Desde nuestros inicios, nos hemos esforzado por ser más que una tienda: nos consideramos tu socio tecnológico, listo para brindarte productos de alta calidad y asesoramiento experto.
                            </p>
                            <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">¿Qué Ofrecemos?</h1>
                                <li className="flex gap-x-3">
                                    <MdOutlineSmartphone className="mt-1 h-5 w-5 flex-none text-orange-600" aria-hidden="true" />
                                    <span>
                                        <strong className="font-semibold text-gray-900">1. Accesorios para Celulares, Tablets y Computadores.</strong>
                                        - Fundas , estuches elegantes y protectores tanto de camara como pantalla.
                                        - Cargadores rápidos y cables duraderos.
                                        - Auriculares y parlantes de alta calidad.
                                        - Teclados y Mouse  ergonómicos.

                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <FaTools className="mt-1 h-5 w-5 flex-none text-orange-600" aria-hidden="true" />
                                    <span>
                                        <strong className="font-semibold text-gray-900">
                                            2. Repuestos de alta calidad:
                                        </strong>
                                        - Pantallas, partes trasera, backover, visores de camara y pantalla, logicas de carga, flex de encendido.
                                        - Baterías para teléfonos y computadores.
                                        - Componentes internos de primera calidad.
                                        - Tarjetas de memoria y almacenamiento en general.

                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <FaScrewdriver className="mt-1 h-5 w-5 flex-none text-orange-600" aria-hidden="true" />
                                    <span>
                                        <strong className="font-semibold text-gray-900">3. Asesoramiento Técnico Personalizado:</strong>
                                        Nuestro equipo capacitado está listo para ayudarte a encontrar la solución perfecta.
                                        Asesoramiento en la selección de productos y compatibilidad.
                                    </span>
                                </li>
                            </ul>
                            <p className="mt-8">
                                Nuestro Compromiso
                                En Anvic, la calidad es nuestra prioridad. Nos asociamos con los principales fabricantes y proveedores para ofrecerte una amplia gama de accesorios y repuestos  alta calidad.
                                es que garantizan un rendimiento óptimo y duradero. Además, nos comprometemos a proporcionar un servicio al cliente excepcional, ayudándote a encontrar exactamente lo que necesitas
                            </p>
                            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">¿Por qué Elegir Anvic?</h2>
                            <p className="mt-6">
                                Calidad Garantizada: Productos  alta calidad.
                                es y de alta calidad.
                                Asesoramiento Expertise: Personal capacitado para ayudarte en cada paso.
                                Satisfacción del Cliente: Tu felicidad es nuestra prioridad.
                                Descubre el mundo de posibilidades que Anvic tiene para ofrecerte. Ya sea que necesites accesorios elegantes, repuestos esenciales o simplemente estés buscando consejos tecnológicos, estamos aquí para ayudarte a maximizar tu experiencia digital.

                                ¡Bienvenido a Anvic, tu destino para accesorios y repuestos tecnológicos en Bogotá!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
