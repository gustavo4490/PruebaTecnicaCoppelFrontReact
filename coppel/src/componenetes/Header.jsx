import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { Dialog, Popover } from '@headlessui/react';
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline';


export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


    return (
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
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
                <Popover.Group className="hidden lg:flex lg:gap-x-12">

                    <Link to={"/index"} className="text-sm font-semibold leading-6 text-gray-900">Crear Trabajador</Link>

                    <Link to={'/empleados'} className="text-sm font-semibold leading-6 text-gray-900">
                        Ver todos los empleados
                    </Link>
                    <Link to={'/entregas'} className="text-sm font-semibold leading-6 text-gray-900">
                        Registrar entregas
                    </Link>
                    <Link to={'/registar-sueldo'} className="text-sm font-semibold leading-6 text-gray-900">
                    Registrar sueldo
                    </Link>
                </Popover.Group>

            </nav>
            {/* mobile */}
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">

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

                                <Link
                                    onClick={() => setMobileMenuOpen(false)}
                                    to="/index"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Crear Trabajador
                                </Link>
                                <Link
                                    onClick={() => setMobileMenuOpen(false)}
                                    to={'/empleados'}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Ver todos los empleados
                                </Link>
                                <Link
                                    onClick={() => {
                                        setMobileMenuOpen(false);

                                    }}
                                    to={'/entregas'}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                     Registrar entregas
                                </Link>
                                <Link
                                    onClick={() => {
                                        setMobileMenuOpen(false);

                                    }}
                                    to={'/registar-sueldo'}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                     Registrar sueldo
                                </Link>
                            </div>

                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
}
