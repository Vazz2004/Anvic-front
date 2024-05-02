'use client'
import React, { useEffect, useState, Fragment } from 'react'
import { LuCable } from 'react-icons/lu'
import { GiEnergise } from 'react-icons/gi'
import { FaTools, FaTabletAlt, FaRegClock, FaShoppingCart } from 'react-icons/fa'
import { MdComputer, MdSmartphone } from 'react-icons/md'
import { BiSolidOffer } from 'react-icons/bi'
import { CgToolbox } from 'react-icons/cg'
import { Dialog, Disclosure, Menu, Transition, Popover } from '@headlessui/react'
import {
  Bars3Icon, XMarkIcon,
  SquaresPlusIcon
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { existingUser } from '../../hooks/sesionActivate'
import { rolUser } from '../../hooks/useRol'

const solutions = [
  { name: 'Analytics', description: 'Cables', href: '#', icon: LuCable },
  { name: 'Engagement', description: 'Adaptadores', href: '#', icon: GiEnergise },
  { name: 'Security', description: 'Ofertas', href: '#', icon: BiSolidOffer },
  { name: 'Integrations', description: 'Accesorios para audífonos', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'repuestos', href: '#', icon: CgToolbox },
  { name: 'Automations', description: 'Accesorio para portátil', href: '#', icon: MdComputer },
  { name: 'Automations', description: 'Accesorios Celular', href: '#', icon: MdSmartphone },
  { name: 'Automations', description: 'Herramientas servicio técnico', href: '#', icon: CgToolbox },
  { name: 'Automations', description: 'Servicio técnico', href: '#', icon: FaTools },
  { name: 'Automations', description: 'Accesorios tablet', href: '#', icon: FaTabletAlt },
  { name: 'Automations', description: 'Accesorios Smartwatch', href: '#', icon: FaRegClock }
]

const solutions2 = [
  { name: 'https://http2.mlstatic.com/D_NQ_NP_768848-MCO54251644979_032023-O.webp', description: 'Xiaomi Redmi Note 12 Dual Sim 128 Gb Ice Blue 4 Gb Ram', href: '#' }
]

const estadoUser = existingUser()
console.log('este es el estado', estadoUser)

function classNames (...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example () {
  const [nameUser, setNameUser] = useState({})
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const rol = rolUser()

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedUser = localStorage.getItem('myToken')
      if (storedUser) {
        const user = JSON.parse(storedUser)
        setNameUser({ nombre: user.usuario[0].nombre, apellido: user.usuario[0].apellido })
      }
    } else {
      console.error("El objeto 'window' no está definido o 'localStorage' no está disponible. No es un entorno de navegador.")
    }
  }, [])

  useEffect(() => {
    const buscadorDiv = document.getElementById('buscar')
    const coords = { x: 0, y: 0 }
    const circles = buscadorDiv.querySelectorAll('.circle')
    const colors = [
      '#ffb56b',
      '#fdaf69',
      '#f89d63',
      '#f59761',
      '#ef865e',
      '#ec805d',
      '#e36e5c',
      '#df685c',
      '#d5585c',
      '#d1525c',
      '#c5415d',
      '#c03b5d',
      '#b22c5e',
      '#ac265e',
      '#9c155f',
      '#950f5f',
      '#830060',
      '#7c0060',
      '#680060',
      '#60005f',
      '#48005f',
      '#3d005e'
    ]

    circles.forEach(function (circle, index) {
      circle.x = 0
      circle.y = 0
      circle.style.backgroundColor = colors[index % colors.length]
      circle.style.display = 'none' // Ocultar los elementos circle inicialmente
    })

    buscadorDiv.addEventListener('mouseenter', function () {
      // Mostrar los círculos cuando el cursor entre en el div
      circles.forEach(circle => {
        circle.style.display = 'block'
      })
      animateCircles()
    })

    buscadorDiv.addEventListener('mouseleave', function () {
      // Ocultar los círculos cuando el cursor salga del div
      circles.forEach(circle => {
        circle.style.display = 'none'
      })
      cancelAnimationFrame(animationFrameId)
    })

    window.addEventListener('mousemove', function (e) {
      coords.x = e.clientX
      coords.y = e.clientY
    })

    let animationFrameId

    function animateCircles () {
      animationFrameId = requestAnimationFrame(function () {
        if (isMouseInsideDiv()) {
          let x = coords.x
          let y = coords.y

          circles.forEach(function (circle, index) {
            circle.style.left = x - 12 + 'px'
            circle.style.top = y - 12 + 'px'

            circle.style.transform = `scale(${(circles.length - index) / circles.length}`

            circle.x = x
            circle.y = y

            const nextCircle = circles[index + 1] || circles[0]
            x += (nextCircle.x - x) * 0.6
            y += (nextCircle.y - y) * 0.6
          })
        }

        animateCircles() // Llamar a la función de animación nuevamente
      })
    }

    function isMouseInsideDiv () {
      const buscadorRect = buscadorDiv.getBoundingClientRect()
      return (
        coords.x >= buscadorRect.left &&
                coords.x <= buscadorRect.right &&
                coords.y >= buscadorRect.top &&
                coords.y <= buscadorRect.bottom
      )
    }

    return () => {
      // Cleanup
      window.removeEventListener('mousemove', function (e) {
        coords.x = e.clientX
        coords.y = e.clientY
      })
      cancelAnimationFrame(animationFrameId)
    }
  }, []) // Run once on component mount

  return (
        <Disclosure as="nav" className="bg-orange-500">
            {({ open }) => (
                <>

                    <div className='todoBuscador'>
                        <div className='buscar' id='buscar' placeholder=' Buscar...'>

                            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                                <div className="relative flex h-16 items-center justify-between">
                                    <a href="/" className="-m-1.5 p-1.5">
                                        <span className="sr-only">Your Company</span>
                                        <Image
                                            src="/images/Inicio/logo-prueba.png"
                                            width={80}
                                            height={50}
                                            alt="Logo Anvic" />
                                    </a>
                                    <div className=" flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                        <div className=" movil  hidden sm:ml-6 sm:block">
                                            <Popover className="relative">
                                                <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
                                                    <span>Categorías</span>
                                                    <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                                                </Popover.Button>

                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-200"
                                                    enterFrom="opacity-0 translate-y-1"
                                                    enterTo="opacity-100 translate-y-0"
                                                    leave="transition ease-in duration-150"
                                                    leaveFrom="opacity-100 translate-y-0"
                                                    leaveTo="opacity-0 translate-y-1"
                                                >
                                                    <Popover.Panel className="absolute left-1/2 z-10 mt-5  mx-40 flex w-screen max-w-max -translate-x-1/2 px-3">
                                                        <div className=" scrol w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                                                            <div className="p-4">
                                                                {solutions.map((item) => (
                                                                    <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50 items-center">
                                                                        <div className="mt-1 flex h-6 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                                            <item.icon className="h-6 w-6 text-gray-600 group-hover:text-orange-600" aria-hidden="true" />
                                                                        </div>
                                                                        <div>
                                                                            <a href={item.href} className="font-semibold h-full text-slate-50">
                                                                                {item.name}
                                                                                <span className="absolute " />
                                                                            </a>
                                                                            <p className="  text-slate-600">{item.description}</p>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">

                                                            </div>
                                                        </div>
                                                    </Popover.Panel>
                                                </Transition>
                                            </Popover>
                                        </div>

                                        <div className="w-full mx-10">
                                            <input className='h-10 w-full rounded rounded2 rounded-slate-50 bg-slate-50 ' placeholder='Buscar productos,accesorios ...' type="text" />
                                        </div>

                                        <Menu as="div" className="movil  relative ml-3">
                                            <div>
                                                {estadoUser === true && (
                                                    <Menu.Button className="relative  text-white flex items-center rounded-full text-4xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                        <img src="https://i.pinimg.com/736x/28/e6/c6/28e6c686522a710e0e3a3c5e17ec5a31.jpg" alt="" className="h-12 w-12 rounded-full object-cover" />
                                                        <p className="ml-3 text-xs w-full   ">{nameUser.nombre} {nameUser.apellido}</p>
                                                    </Menu.Button>
                                                )}
                                                {estadoUser === false && (
                                                    <Menu.Button className="relative bg-white text-black flex items-center justify-center rounded-md text-xs md:text-xs lg:text-xs focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-gray-800 shadow-xs px-3 py-1 md:px-4 md:py-2 lg:px-5 lg:py-3">
                                                        <p className="font-semibold">Comenzar</p>
                                                    </Menu.Button>
                                                )}

                                            </div>
                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-white ring-opacity-5 focus:outline-none">
                                                    {estadoUser === false && (
                                                        <>
                                                            <Menu.Item>
                                                                {({ active }) => (
                                                                    <a
                                                                        href="/login"
                                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                                    >
                                                                        Iniciar sesión
                                                                    </a>
                                                                )}
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                {({ active }) => (
                                                                    <a
                                                                        href="/registro"
                                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                                    >
                                                                        Registrar
                                                                    </a>
                                                                )}
                                                            </Menu.Item>
                                                        </>
                                                    )}

                                                    {estadoUser === true && rol === 3 && (
                                                        <>
                                                            <Menu.Item>
                                                                {({ active }) => (
                                                                    <a
                                                                        href="/perfil/ordenes-cliente"
                                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                                    >
                                                                        Mi perfil
                                                                    </a>
                                                                )}
                                                            </Menu.Item>
                                                        </>
                                                    )}

                                                    {estadoUser === true && rol === 1 && (
                                                        <>
                                                            <Menu.Item>
                                                                {({ active }) => (
                                                                    <a
                                                                        href="/perfil"
                                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                                    >
                                                                        Mi perfil
                                                                    </a>
                                                                )}
                                                            </Menu.Item>
                                                        </>
                                                    )}

                                                </Menu.Items>
                                            </Transition>
                                        </Menu>

                                        <div className=" movil  text-2xl flex items-center w-16 rounded-full justify-center mx-20 ">
                                            <div className="flex space-x-2">
                                                {estadoUser === true && (
                                                    <Popover className="relative">
                                                        <Popover.Button className="inline-flex items-center gap-x-1  font-semibold leading-6 text-white">
                                                            <span> <FaShoppingCart /> </span>
                                                            <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                                                        </Popover.Button>

                                                        <Transition
                                                            as={Fragment}
                                                            enter="transition ease-out duration-200"
                                                            enterFrom="opacity-0 translate-y-1"
                                                            enterTo="opacity-100 translate-y-0"
                                                            leave="transition ease-in duration-150"
                                                            leaveFrom="opacity-100 translate-y-0"
                                                            leaveTo="opacity-0 translate-y-1"
                                                        >
                                                            <Popover.Panel className="absolute z-10 mt-5   flex w-screen max-w-max -translate-x-1/2 px-3">
                                                                <div className=" scrol w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                                                                    <div className="p-4">
                                                                        {solutions2.map((item) => (
                                                                            <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50 items-center">
                                                                                <div>
                                                                                    <a href={item.href} className="font-semibold h-full text-slate-50">
                                                                                        <img src={item.name} alt="" className="rounded-lg shadow-md hover:shadow-lg w-20 " />
                                                                                        <span className="absolute" />
                                                                                    </a>
                                                                                    <p className="text-sm text-slate-600 mt-2">{item.description}</p>
                                                                                </div>
                                                                            </div>

                                                                        ))}
                                                                    </div>
                                                                    <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                                                    </div>
                                                                </div>
                                                            </Popover.Panel>
                                                        </Transition>
                                                    </Popover>

                                                )}                                           </div>
                                        </div>

                                    </div>
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                    </div>
                                </div>
                            </div>

                            <header className="bg-orange-500">
                                <nav className="mx-auto flex max-w-7xl items-center justify-center p-6 lg:px-8" aria-label="Global">
                                    <div className="flex lg:hidden">
                                        <button
                                            type="button"
                                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                                            onClick={() => setMobileMenuOpen(true)}
                                        >
                                            <span className="sr-only">Open main menu</span>
                                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>
                                    <Popover.Group className="hidden  lg:flex lg:gap-x-12">

                                        <Link href="/" className="text-sm font-semibold leading-6 text-slate-50">
                                            Inicio
                                        </Link>
                                        <Link href="/ofertas" className="text-sm font-semibold leading-6 text-slate-50">
                                            Ofertas
                                        </Link>
                                        <Link href="/nosotros" className="text-sm font-semibold leading-6  text-slate-50">
                                            Nosotros
                                        </Link>
                                        <Link href="/servicios" className="text-sm font-semibold leading-6 text-slate-50">
                                            Servicios
                                        </Link>

                                        <Link href="/ayuda" className="text-sm font-semibold leading-6 text-slate-50">
                                            Ayuda
                                        </Link>

                                        <Link href="/trabajaconnosotros" className="text-sm font-semibold leading-6 text-slate-50">
                                            Trabaja con Nosotros
                                        </Link>
                                    </Popover.Group>
                                </nav>
                                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                                    <div className="fixed inset-0 z-10" />
                                    <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                                        <div className="flex items-center justify-between">
                                            <a href="#" className="-m-1.5 p-1.5">
                                                <span className="sr-only">Your Company</span>
                                                <img
                                                    className="h-8 w-auto"
                                                    src="/images/Inicio/logo anvic.jpg"
                                                    alt=""
                                                />
                                            </a>
                                            <button
                                                type="button"
                                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                <span className="sr-only">Close menu</span>
                                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                            </button>
                                        </div>
                                        <div className="mt-6 flow-root">
                                            <div className="-my-6 divide-y divide-gray-500/10">
                                                <div className="space-y-2 py-6">
                                                    <Disclosure as="div" className="-mx-3">:
                                                        {({ open }) => (
                                                            <>
                                                                <Disclosure.Button className=" mt-96 flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                                    Categorías
                                                                    <ChevronDownIcon
                                                                        className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                                        aria-hidden="true"
                                                                    />
                                                                </Disclosure.Button>
                                                                <Disclosure.Panel className="mt-2 space-y-2">
                                                                    {solutions.map((item) => (
                                                                        <Disclosure.Button
                                                                            key={item.name}
                                                                            as="a"
                                                                            href={item.href}
                                                                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                                        >
                                                                            {item.description}
                                                                        </Disclosure.Button>
                                                                    ))}
                                                                </Disclosure.Panel>
                                                            </>
                                                        )}
                                                    </Disclosure>
                                                    <a
                                                        href="../../ofertas"
                                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                    >
                                                        Ofertas
                                                    </a>
                                                    <a
                                                        href="/nosotros"
                                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                    >
                                                        Nosotros
                                                    </a>
                                                    <a
                                                        href="/"
                                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                    >
                                                        Inicio
                                                    </a>
                                                </div>
                                                <div className="py-6">
                                                    <a
                                                        href="/login"
                                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                    >
                                                        Iniciar Sesion
                                                    </a>
                                                </div>
                                                <div className="py-6">
                                                    <a
                                                        href="#"
                                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                    >
                                                        Registrar
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </Dialog.Panel>
                                </Dialog>
                            </header>
                            <div className='circle' />
                            <div className='circle' />
                            <div className='circle' />
                            <div className='circle' />
                            <div className='circle' />
                            <div className='circle' />
                            <div className='circle' />
                            <div className='circle' />
                            <div className='circle' />
                            <div className='circle' />
                            <div className='circle' />
                            <div className='circle' />
                            <div className='circle' />
                            <div className='circle' />
                            <div className='circle' />
                            <div className='circle' />
                            <div className='circle' />
                            <div className='circle' />
                            <div className='circle' />
                            <div className='circle' />
                        </div>

                    </div>

                </>
            )
            }
        </Disclosure >

  )
}
