import axios from "axios";
import { baseURL } from "./urlApi"


export const controlApi = axios.create({
  baseURL: `${baseURL}`
})

export const createTrabajador = (trabajador) => controlApi.post('/trabajadores', trabajador);

export const getAllTrabajadoresPorPagina = async (page) => {
  return await controlApi.get(`/trabajadores?page=${page}`).then(
    rest => rest.data
  );
};