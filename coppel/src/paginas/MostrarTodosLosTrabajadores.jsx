import React from 'react';
import { getAllTrabajadoresPorPagina } from '../api/apiTrabajadores';
import { useQuery } from 'react-query';
import GoogleStyleLoading from '../componenetes/GoogleStyleLoading';
import { Link } from 'react-router-dom';

const estiloPrincipal = {
  width: '90%',
  margin: 'auto',
};

const estiloMovil = {
  width: '100%',
};

export default function MostrarTodosLosTrabajadores() {
  const [page, setPage] = React.useState(1);

  const { data, isError, error, isLoading, refetch } = useQuery(
    ['getTodosLosTrabajadores', page],
    () => getAllTrabajadoresPorPagina(page)
  );

  if (isError) {
    return <span>Error {error.message}</span>;
  }

  if (isLoading) {
    return <GoogleStyleLoading />;
  }

  const handlePageClick = async (pageNumber) => {

    setPage(pageNumber);
    await refetch();
  };

  const datosTrabajadores = data.map((element) => {
    const {
      nombreCompleto,
      numeroEmpleado,
      rol,
      bonoPorHora,
      sueldoPorHora,
      valesDespensa,
      idTrabajador,
    } = element;
    return {
      nombreCompleto,
      numeroEmpleado,
      rol,
      bonoPorHora,
      sueldoPorHora,
      valesDespensa,
      idTrabajador,
    };
  });

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
                    <th scope="col" className="px-6 py-4 hidden">
                      idTrabajador
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Nombre Completo
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Número de Empleado
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Rol
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Bono por Hora
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Sueldo por Hora
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {datosTrabajadores.map((trabajador, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'border-b dark:border-neutral-500' : 'border-b'}>
                      <td className="whitespace-nowrap px-6 py-4 font-medium">{index + 1}</td>
                      <td className="whitespace-nowrap px-6 py-4 hidden">{trabajador.idTrabajador}</td>
                      <td className="whitespace-nowrap px-6 py-4">{trabajador.nombreCompleto}</td>
                      <td className="whitespace-nowrap px-6 py-4">{trabajador.numeroEmpleado}</td>
                      <td className="whitespace-nowrap px-6 py-4">{trabajador.rol}</td>
                      <td className="whitespace-nowrap px-6 py-4">{trabajador.bonoPorHora}</td>
                      <td className="whitespace-nowrap px-6 py-4">{trabajador.sueldoPorHora}</td>
                      <td className="whitespace-nowrap px-6 py-4 space-x-2">
                        <Link className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" to={`/actualizar-empleado/${trabajador.idTrabajador}`}>Editar</Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <nav className="w-90 mx-auto py-4">
        <ul className="flex justify-center space-x-2">
          {[1, 2, 3, 4, 5].map((pageNumber) => (
            <li key={pageNumber}>
              <a
                href={`#${pageNumber}`}
                className="px-4 py-2 text-blue-500 border border-blue-500 rounded hover:bg-blue-500 hover:text-white"
                onClick={() => handlePageClick(pageNumber)}
              >
                {pageNumber}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
