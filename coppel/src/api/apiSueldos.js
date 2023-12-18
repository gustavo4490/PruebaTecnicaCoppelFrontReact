import axios from "axios";
import { baseURL } from "./urlApi"


export const controlApi = axios.create({
    baseURL: `${baseURL}`
})

export const calcularSueldo = (sueldos) => controlApi.post('/sueldos', sueldos);
