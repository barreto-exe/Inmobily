import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import IniciarSesion from "./pages/IniciarSesion";
import RegistrarUsuario from "./pages/RegistrarUsuario";
import "./App.css";

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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
