import axios from "axios";


export const controlApi = axios.create({
    baseURL: 'http://localhost:8080/api_sueldos_coppel'
      })

export const registrarEntregas = (entregas) => controlApi.post('/entregas', entregas);
