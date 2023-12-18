import React from 'react';
import { getAllTrabajadoresPorPagina } from '../api/apiTrabajadores';
import { useQuery } from 'react-query';



export default function MostrarTodosLosTrabajadores() {
  const page = 1;

  const { data, isError, error, isLoading } = useQuery(['getTodosLosTrabajadores', page], () => getAllTrabajadoresPorPagina(page));
  if (isError) {
    return <span>Error {error.message}</span>
  }

  if (isLoading) {
    // return <GoogleStyleLoading />;
    return <span>cargando...............</span>;

  }

  // Asumiendo que data es un array de objetos y cada objeto tiene propiedades 'idCapital', 'nombre' y 'saldo'
  const datosTrabajadores = data.map((element) => {
    const { nombreCompleto, numeroEmpleado, rol,bonoPorHora,sueldoPorHora,valesDespensa } = element;
    return { nombreCompleto, numeroEmpleado, rol,bonoPorHora,sueldoPorHora,valesDespensa };
  });
  
  console.log(datosTrabajadores);
  return (
    <div>MostrarTodosLosTrabajadores</div>
  )
}
