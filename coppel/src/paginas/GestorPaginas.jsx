import Trabajadores from "./Trabajadores";
import PaginaError from "./PaginaError";
import MostrarTodosLosTrabajadores from "./MostrarTodosLosTrabajadores";
import PaginaEntregas from "./PaginaEntregas";
import PaginaCalcularSueldo from "./PaginaCalcularSueldo"
import MostrarTodosLosSueldos from "./MostrarTodosLosSueldos";

export const Trabajadores_ = () => <Trabajadores />;

export const Error = () =>  <PaginaError/>;

export const AllTrabajadores = () =>  <MostrarTodosLosTrabajadores/>;

export const RegistrarEntregas = () =>  <PaginaEntregas/>;

export const CalcularSueldo = () =>  <PaginaCalcularSueldo/>;

export const MostrarSueldos = () =>  <MostrarTodosLosSueldos/>;