import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { registrarEntregas } from '../api/apiEntregas';


const estiloPrincipal = {
  width: '70%',
  margin: 'auto',
  paddingBottom: '5%',
  paddingTop: '2%',
};

const estiloMovil = {
  width: '90%',
};



export default function PaginaEntregas() {

  const { mutate, isLoading } = useMutation(registrarEntregas, {
    onSuccess: () => {
      reset();
      alert('Entrega registrado con éxito');
      console.log('entrega registrado con éxito');

    },
    onError: (error) => {
      alert('Error al registrar nuevo entrega.');
      console.error('Error al registar entrega:', error);
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });

  const onSubmit = handleSubmit(async (data) => {


    const datosCompletos = {
      idTrabajador: parseInt(data.idTrabajador, 10),
      precioEntrega: "5",
      cantidadEntrega: data.cantidadEntrega,
      fecha: data.fechaEntrega
    }
    // console.log(datosCompletos);
    mutate(datosCompletos);

  });

  return (
    <>
      <div style={{ ...estiloPrincipal, ...(window.innerWidth <= 600 && estiloMovil) }}>

        <form onSubmit={onSubmit}>
          <div className="space-y-12">


            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-xl font-semibold leading-7 text-gray-900 mb-3">Registrar entregas por empleado</h2>
              <h2 className="text-base font-semibold leading-7 text-gray-900">Información personal</h2>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                <div className="sm:col-span-2 sm:col-start-1">
                  <label htmlFor="idTrabajador" className="block text-sm font-medium leading-6 text-gray-900">
                    Id empleado:
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="idTrabajador"
                      id="idTrabajador"
                      className="bg-white border border-slate-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-slate-600 dark:placeholder-slate-400  dark:focus:ring-slate-500 dark:focus:border-slate-500"
                      placeholder="ID empleado"
                      {...register("idTrabajador", {
                        required: {
                          value: true,
                          message: 'Campo requerido'
                        },
                        minLength: {
                          value: 1,
                          message: 'El id empleado debe tener al menos 1 caracteres.'
                        },
                        maxLength: {
                          value: 25,
                          message: 'El id empleado no debe exceder los 25 caracteres.'
                        }
                      })}
                    />
                    {errors.idTrabajador && <span className=" text-red-600 " style={{ fontSize: '12px' }} >{errors.idTrabajador.message}</span>}
                  </div>
                </div>


                <div className="sm:col-span-2">
                  <label htmlFor="cantidadEntrega" className="block text-sm font-medium leading-6 text-gray-900">
                    Cantidad entrega:
                  </label>
                  <div className="mt-2">
                    <input
                      type="number"
                      name="cantidadEntrega"
                      id="cantidadEntrega"
                      className="bg-white border border-slate-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-slate-600 dark:placeholder-slate-400  dark:focus:ring-slate-500 dark:focus:border-slate-500"
                      placeholder="Cantidad entregas"
                      {...register("cantidadEntrega", {
                        required: {
                          value: true,
                          message: 'Campo requerido'
                        },
                        minLength: {
                          value: 1,
                          message: 'El input cantidad entregas debe tener al menos 1 caracteres.'
                        },
                        maxLength: {
                          value: 5,
                          message: 'El input cantidad entregas no debe exceder los 5 caracteres.'
                        }
                      })}
                    />
                    {errors.cantidadEntrega && <span className=" text-red-600 " style={{ fontSize: '12px' }} >{errors.cantidadEntrega.message}</span>}
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="fechaEntrega" className="block text-sm font-medium leading-6 text-gray-900">
                    Fecha Entrega:
                  </label>
                  <div className="mt-2">
                    <input
                      type="date"
                      name="fechaEntrega"
                      id="fechaEntrega"
                      className="bg-white border border-slate-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-slate-600 dark:placeholder-slate-400  dark:focus:ring-slate-500 dark:focus:border-slate-500"
                      placeholder="Fecha"
                      {...register("fechaEntrega", {
                        required: {
                          value: true,
                          message: 'Campo requerido'
                        }
                      })}
                    />
                    {errors.fechaEntrega && <span className=" text-red-600 " style={{ fontSize: '12px' }} >{errors.fechaEntrega.message}</span>}
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
              Registrar entrega
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
