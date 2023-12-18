import React from 'react';
import { getAllSueldosPorPagina} from '../api/apiSueldos';
import { useQuery } from 'react-query';
import GoogleStyleLoading from '../componenetes/GoogleStyleLoading';
import axios from "axios";
import { baseURL } from "../api/urlApi"



const estiloPrincipal = {
  width: '90%',
  margin: 'auto',
};

const estiloMovil = {
  width: '100%',
};

export default function MostrarTodosLosSueldos() {
    const handleEliminarEmpleado = (idSueldo) => {
    const datosCompletos = {
      idSueldo: idSueldo
    };
  
    const url = `${baseURL}`;
  
    console.log(datosCompletos);
  
    axios.delete(`${url}/sueldos`, { data: datosCompletos })
      .then(response => {
        console.log(response);
        window.location.reload(); // Recargar la página actual

              
      })
      .catch(error => {
        console.error('Error al eliminar el sueldo', error);
      
      });
  };
  const page = 1;

  const { data, isError, error, isLoading } = useQuery(['obtenerTodosLosSueldos', page], () => getAllSueldosPorPagina(page));

  if (isError) {
    return <span>Error {error.message}</span>
  }

  if (isLoading) {
    return <GoogleStyleLoading />;

  }

  const datosSueldos = data.map((element) => {
    const { idSueldo,
      nombreCompleto,
      totalSalarioBase,
      totalBono,
      totalEntregas,
      sueldoBruto,
      sueldoNeto,
      totalValesDespensa,
      SalarioFinaldecimal,
      mesSalario,
      año } = element;
    // Array con nombres de meses
    const nombresMeses = [
      'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
      'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
    ];

    // Obtener el nombre del mes
    const nombreMes = nombresMeses[mesSalario - 1]; // Restamos 1 porque los meses en JavaScript son 0-indexados


    return {
      idSueldo,
      nombreCompleto,
      totalSalarioBase,
      totalBono,
      totalEntregas,
      sueldoBruto,
      sueldoNeto,
      totalValesDespensa,
      SalarioFinaldecimal,
      mesSalario: nombreMes,
      año
    };
  });
  // console.log(datosSueldos);



  return (
    <>
      <div
        className="flex flex-col overflow-x-auto"
        style={{ ...estiloPrincipal, ...(window.innerWidth <= 600 && estiloMovil) }}
      >
        <div className="sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      #
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Nombre Completo
                    </th>
                    <th scope="col" className="px-6 py-4">
                      salario correspondiente
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Salario Base
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Bono
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Entregas
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Sueldo Bruto
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Sueldo Neto
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Vales Despensa
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Salario neto mas vales
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {datosSueldos.map((trabajador, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'border-b dark:border-neutral-500' : 'border-b'}>
                      <td className="whitespace-nowrap px-6 py-4 font-medium">{index + 1}</td>
                      <td className="whitespace-nowrap px-6 py-4 ">{trabajador.nombreCompleto}</td>
                      <td className="whitespace-nowrap px-6 py-4 ">{trabajador.mesSalario} {trabajador.año}</td>
                      <td className="whitespace-nowrap px-6 py-4">${trabajador.totalSalarioBase}</td>
                      <td className="whitespace-nowrap px-6 py-4">${trabajador.totalBono}</td>
                      <td className="whitespace-nowrap px-6 py-4">${trabajador.totalEntregas}</td>
                      <td className="whitespace-nowrap px-6 py-4">${trabajador.sueldoBruto}</td>
                      <td className="whitespace-nowrap px-6 py-4">${trabajador.sueldoNeto}</td>
                      <td className="whitespace-nowrap px-6 py-4">${trabajador.totalValesDespensa}</td>
                      <td className="whitespace-nowrap px-6 py-4">${trabajador.SalarioFinaldecimal}</td>
                      <td className="whitespace-nowrap px-6 py-4 space-x-2">
                        <button
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                          onClick={() => handleEliminarEmpleado(trabajador.idSueldo)}
                        >
                          Eliminar
                        </button>

                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
