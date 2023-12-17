import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Trabajadores_, Error } from "./paginas/GestorPaginas";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Trabajadores_ />} />
        <Route path="/index" element={<Trabajadores_ />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
