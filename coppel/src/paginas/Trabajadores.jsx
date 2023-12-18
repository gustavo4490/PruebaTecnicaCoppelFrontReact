import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { createTrabajador } from '../api/apiTrabajadores';


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

  const { mutate, isLoading } = useMutation(createTrabajador, {
    onSuccess: () => {
      reset();
      console.log('Empledo añadido con éxito');

    },
    onError: (error) => {
      alert('Error al registrar nuevo empleado.');
      console.error('Error al añadir el nuevo empleado:', error);
    },
  });

  const {
    register,
    handleSubmit,
    reset ,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });

  const onSubmit = handleSubmit(async (data) => {
    // Mapeo de roles
    const rolesMapping = {
      Chofer: 1,
      Cargador: 2,
      Auxiliar: 3,
    };
    // Mapeo de bonos
    const bonosMapping = {
      Chofer: 10,
      Cargador: 5,
      Auxiliar: 0,
    };

    // Obtener el valor correspondiente o asignar 3 por defecto
    const idRol = rolesMapping[data.rol] || 3;
    const bonoPorRol = String(bonosMapping[data.rol] || '0');


    const datosCompletos = {
      nombreCompleto: data.nombreCompleto,
      idRol: idRol,
      numeroEmpleado: data.numeroEmpleado,
      bonoPorHora: bonoPorRol,
      sueldoPorHora: "30",
      valesDespensa: "0.04"
    }
    mutate(datosCompletos);

  });

  return (
    <>
      <div style={{ ...estiloPrincipal, ...(window.innerWidth <= 600 && estiloMovil) }}>

        <form onSubmit={onSubmit}>
          <div className="space-y-12">


            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-xl font-semibold leading-7 text-gray-900 mb-3">Nuevo empleado</h2>
              <h2 className="text-base font-semibold leading-7 text-gray-900">Información personal</h2>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                <div className="sm:col-span-2 sm:col-start-1">
                  <label htmlFor="nombreCompleto" className="block text-sm font-medium leading-6 text-gray-900">
                    Nombres:
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="nombreCompleto"
                      id="nombreCompleto"
                      className="bg-white border border-slate-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-slate-600 dark:placeholder-slate-400  dark:focus:ring-slate-500 dark:focus:border-slate-500"
                      placeholder="Nombre completo"
                      {...register("nombreCompleto", {
                        required: {
                          value: true,
                          message: 'Campo requerido'
                        },
                        minLength: {
                          value: 3,
                          message: 'El nombre o nombres debe tener al menos 3 caracteres.'
                        },
                        maxLength: {
                          value: 25,
                          message: 'El nombre o nombres no debe exceder los 25 caracteres.'
                        }
                      })}
                    />
                    {errors.nombreCompleto && <span className=" text-red-600 " style={{ fontSize: '12px' }} >{errors.nombreCompleto.message}</span>}
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
                      placeholder="Apellidos"
                      {...register("apellidos", {
                        required: {
                          value: true,
                          message: 'Campo requerido'
                        },
                        minLength: {
                          value: 3,
                          message: 'El apellido debe tener al menos 3 caracteres.'
                        },
                        maxLength: {
                          value: 25,
                          message: 'El apellido no debe exceder los 25 caracteres.'
                        }
                      })}
                    />
                    {errors.apellidos && <span className=" text-red-600 " style={{ fontSize: '12px' }} >{errors.apellidos.message}</span>}
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
                      placeholder="numero empleado"
                      {...register("numeroEmpleado", {
                        required: {
                          value: true,
                          message: 'Campo requerido'
                        },
                        minLength: {
                          value: 3,
                          message: 'El numero de empleado debe tener al menos 3 caracteres.'
                        },
                        maxLength: {
                          value: 25,
                          message: 'El numero de empleado no debe exceder los 25 caracteres.'
                        }
                      })}
                    />
                    {errors.numeroEmpleado && <span className=" text-red-600 " style={{ fontSize: '12px' }} >{errors.numeroEmpleado.message}</span>}
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="rol" className="block text-sm font-medium leading-6 text-gray-900">
                    Rol:
                  </label>
                  <div className="mt-2">
                    <select
                      id="rol"
                      name="rol"
                      {...register('rol')}
                      className="bg-white border border-slate-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-slate-600 dark:placeholder-slate-400  dark:focus:ring-slate-500 dark:focus:border-slate-500"
                    >
                      <option>Chofer</option>
                      <option>Cargador</option>
                      <option>Auxiliar</option>
                    </select>
                  </div>
                </div>

              </div>

            </div>

          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" className="text-sm font-semibold leading-6 text-gray-900" onClick={() => reset()}>
              Cancelar
            </button>
            <button
              type="submit"
              className="rounded-md bg-slate-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
            >
              Añadir Empleado
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
