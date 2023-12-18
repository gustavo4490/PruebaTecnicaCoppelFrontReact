import Trabajadores from "./Trabajadores";
import PaginaError from "./PaginaError";
import MostrarTodosLosTrabajadores from "./MostrarTodosLosTrabajadores";
import PaginaEntregas from "./PaginaEntregas";
import PaginaCalcularSueldo from "./PaginaCalcularSueldo"

export const Trabajadores_ = () => <Trabajadores />;

export const Error = () =>  <PaginaError/>;

export const AllTrabajadores = () =>  <MostrarTodosLosTrabajadores/>;

export const RegistrarEntregas = () =>  <PaginaEntregas/>;

export const CalcularSueldo = () =>  <PaginaCalcularSueldo/>;