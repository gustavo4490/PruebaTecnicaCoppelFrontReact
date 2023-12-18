import axios from "axios";


export const controlApi = axios.create({
    baseURL: 'http://localhost:8080/api_sueldos_coppel'
      })

export const createTrabajador = (trabajador) => controlApi.post('/trabajadores', trabajador);

export const getAllTrabajadoresPorPagina = async (page) => {
  return await controlApi.get(`/trabajadores?page=${page}`).then(
    rest => rest.data
  );
};