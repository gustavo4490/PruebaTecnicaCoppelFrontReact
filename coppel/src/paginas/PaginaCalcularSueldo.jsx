import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { calcularSueldo } from '../api/apiSueldos';


const estiloPrincipal = {
  width: '70%',
  margin: 'auto',
  paddingBottom: '5%',
  paddingTop: '2%',
};

const estiloMovil = {
  width: '90%',
};



export default function PaginaCalcularSueldo() {

  const { mutate, isLoading } = useMutation(calcularSueldo, {
    onSuccess: () => {
      reset();
      alert('Sueldo registrado con éxito');
      console.log('Sueldo registrado con éxito');

    },
    onError: (error) => {
      alert('Error al registrar sueldo');
      console.error('Error al registar sueldo:', error);
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
    const fechaSueldo = new Date(data.fechaSueldo);

    // Obtiene el mes y el año de la fecha
    const mes = fechaSueldo.getMonth() + 1; 
    const anio = fechaSueldo.getFullYear();
  
    const datosCompletos = {
      idTrabajador: parseInt(data.idTrabajador, 10),
      mes:  mes,
      year: anio
    }
    console.log(datosCompletos);
    mutate(datosCompletos);

  });

  return (
    <>
      <div style={{ ...estiloPrincipal, ...(window.innerWidth <= 600 && estiloMovil) }}>

        <form onSubmit={onSubmit}>
          <div className="space-y-12">


            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-xl font-semibold leading-7 text-gray-900 mb-3">Registrar sueldo por empleado</h2>
              <h2 className="text-base font-semibold leading-7 text-gray-900">Información personal</h2>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                <div className="sm:col-span-2 sm:col-start-1">
                  <label htmlFor="idTrabajador" className="block text-sm font-medium leading-6 text-gray-900">
                    Id empleado:
                  </label>
                  <div className="mt-2">
                    <input
                      type="number"
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
                  <label htmlFor="fechaSueldo" className="block text-sm font-medium leading-6 text-gray-900">
                    Fecha Salario:
                  </label>
                  <div className="mt-2">
                    <input
                      type="date"
                      name="fechaSueldo"
                      id="fechaSueldo"
                      className="bg-white border border-slate-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-slate-600 dark:placeholder-slate-400  dark:focus:ring-slate-500 dark:focus:border-slate-500"
                      placeholder="Fecha"
                      {...register("fechaSueldo", {
                        required: {
                          value: true,
                          message: 'Campo requerido'
                        }
                      })}
                    />
                    {errors.fechaSueldo && <span className=" text-red-600 " style={{ fontSize: '12px' }} >{errors.fechaSueldo.message}</span>}
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
              Registrar sueldo
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
