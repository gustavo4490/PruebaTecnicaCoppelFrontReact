import axios from "axios";
import { baseURL } from "./urlApi"


export const controlApi = axios.create({
    baseURL: `${baseURL}`
})

export const registrarEntregas = (entregas) => controlApi.post('/entregas', entregas);
