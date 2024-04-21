'use client'
import Link from 'next/link'
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const solutions = [
  { name: 'Analytics', description: 'Cables', href: '#' },
  { name: 'Engagement', description: 'Adaptadores', href: '#' },
  { name: 'Security', description: 'Ofertas', href: '#' },
  { name: 'Integrations', description: 'Accesorios para audífonos', href: '#' },
  { name: 'Automations', description: 'repuestos', href: '#' },
  { name: 'Automations', description: 'Accesorio para portátil', href: '#' },
  { name: 'Automations', description: 'Accesorios Celular', href: '#' },
  { name: 'Automations', description: 'Herramientas servicio técnico', href: '#' },
  { name: 'Automations', description: 'Servicio técnico', href: '#' },
  { name: 'Automations', description: 'Accesorios tablet', href: '#' },
  { name: 'Automations', description: 'Accesorios Smartwatch', href: '#' }
]

function classNames (...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example () {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
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
                    <Link href="#" className="text-sm font-semibold leading-6 text-slate-50">
                        Ofertas
                    </Link>
                    <Link href="/nosotros" className="text-sm font-semibold leading-6  text-slate-50">
                        Nosotros
                    </Link>
                    <Link href="#" className="text-sm font-semibold leading-6 text-slate-50">
                        Servicios
                    </Link>

                    <Link href="#" className="text-sm font-semibold leading-6 text-slate-50">
                        Tienda
                    </Link>

                    <Link href="#" className="text-sm font-semibold leading-6 text-slate-50">
                        Ayuda
                    </Link>

                    <Link href="#" className="text-sm font-semibold leading-6 text-slate-50">
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
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
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
                                    href="#"
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
  )
}
