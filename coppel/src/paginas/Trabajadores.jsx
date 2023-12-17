
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

const estiloPrincipal = {
  width: '70%',
  margin: 'auto',
  paddingBottom: '5%',
  paddingTop: '2%',
};

const estiloMovil = {
  width: '90%',
};

export default function Trabajadores() {
  return (
    <>
      <div style={{ ...estiloPrincipal, ...(window.innerWidth <= 600 && estiloMovil) }}>

        <form>
          <div className="space-y-12">


            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-xl font-semibold leading-7 text-gray-900 mb-3">Nuevo empleado</h2>
              <h2 className="text-base font-semibold leading-7 text-gray-900">Información personal</h2>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                <div className="sm:col-span-2 sm:col-start-1">
                  <label htmlFor="nombres" className="block text-sm font-medium leading-6 text-gray-900">
                    Nombres:
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="nombres"
                      id="nombres"
                      autoComplete="address-level2"
                      className="bg-white border border-slate-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-slate-600 dark:placeholder-slate-400  dark:focus:ring-slate-500 dark:focus:border-slate-500"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="apellidos" className="block text-sm font-medium leading-6 text-gray-900">
                    Apellidos:
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="apellidos"
                      id="apellidos"

                      className="bg-white border border-slate-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-slate-600 dark:placeholder-slate-400  dark:focus:ring-slate-500 dark:focus:border-slate-500"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="numeroEmpleado" className="block text-sm font-medium leading-6 text-gray-900">
                    Numero de empleado:
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="numeroEmpleado"
                      id="numeroEmpleado"

                      className="bg-white border border-slate-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-slate-600 dark:placeholder-slate-400  dark:focus:ring-slate-500 dark:focus:border-slate-500"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                    Country
                  </label>
                  <div className="mt-2">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="bg-white border border-slate-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-slate-600 dark:placeholder-slate-400  dark:focus:ring-slate-500 dark:focus:border-slate-500"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>
                </div>

              </div>

            </div>

          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
              Cancelar
            </button>
            <button
              type="submit"
              className="rounded-md bg-slate-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
