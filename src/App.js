import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import IniciarSesion from "./pages/IniciarSesion";
import RegistrarUsuario from "./pages/RegistrarUsuario";
import "./App.css";
import Cartera from "./pages/Cartera";
import Libreta from "./pages/Libreta";
import Reportes from "./pages/Reportes";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          {/* Iniciar sesión TODO: Luego debe cambiarse la ruta a "/login" */}
          <Route exact path="/">
            <IniciarSesion />
          </Route>
          {/* Registrar cuenta */}
          <Route path="/signup">
            <RegistrarUsuario />
          </Route>
        {/* test para el sidebar */}
          <Route path="/cartera">
            <Cartera />
            <Sidebar />
          </Route>
          <Route path="/libreta">
            <Libreta />
            <Sidebar />
          </Route>
          <Route path="/reportes">
            <Reportes />
            <Sidebar />
          </Route>          
        </Switch>

      </Router>
    </div>
  );
}

export default App;
