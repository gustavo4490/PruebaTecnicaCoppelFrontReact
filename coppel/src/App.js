import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Trabajadores_, Error,AllTrabajadores, RegistrarEntregas  } from "./paginas/GestorPaginas";
import Header from "./componenetes/Header";


function App() {
  return (
    <BrowserRouter>
    <Navigation />
      <Routes>
        <Route index element={<Trabajadores_ />} />
        <Route path="/index" element={<Trabajadores_ />} />
        <Route path="/empleados" element={<AllTrabajadores />} />
        <Route path="/entregas" element={<RegistrarEntregas />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

function Navigation() {
  return (
    <Header/>
  );
}

export default App;
