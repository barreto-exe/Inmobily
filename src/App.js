import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RutaProtegida from "./components/RutaProtegida";
import { UsuarioProvider } from "./contexts/UsuarioContext";
import IniciarSesion from "./pages/IniciarSesion";
import RegistrarUsuario from "./pages/RegistrarUsuario";
import RegistrarAgencia from "./pages/RegistrarAgencia";
import Cartera from "./pages/Cartera";
import Libreta from "./pages/Libreta";
import Reportes from "./pages/Reportes";
import Sidebar from "./components/Sidebar";
import AjustesPerfil from "./pages/AjustesPerfil";
import CrearOperacion from "./pages/CrearOperacion";
import {
  unstable_createMuiStrictModeTheme as createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";

//Temas
const theme = createMuiTheme({
  palette: {
    //Botones
    primary: {
      main: "#41A48F",
    },
    //Gray 3
    secondary: {
      main: "#828282",
    },
    //Purple 1
    tertiary: {
      main: "#9B51E0",
    },
    //Azul oscuro 2
    quaternary: {
      main: "#828282",
    },
    //Azul oscuro
    quinary: {
      main: "#191E34",
    },
    //Turquesa
    sextarian: {
      main: "#00797D",
    },
    //Turquesa 2
    septenary: {
      main: "#41A48F",
    },
    //Blanquito
    octonary: {
      main: "#FFFFD3",
    },
    //Green 3
    nonary: {
      main: "#6FCF97",
    },
    //Blue 1
    denary: {
      main: "#2F80ED",
    },
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/login">
              <IniciarSesion />
            </Route>
            {/* Registrar cuenta */}
            <Route exact path="/signup">
              <RegistrarUsuario />
            </Route>
            {/* Registrar Agencia */}
            <Route path="/signup/agencia">
              <RegistrarAgencia />
            </Route>
            <UsuarioProvider>
              {/* Paginas con sidebar */}
              {/* Libreta */}
              <RutaProtegida exact path="/">
                <Libreta />
                <Sidebar />
              </RutaProtegida>
              {/* Cartera */}
              <RutaProtegida path="/cartera">
                <Cartera />
                <Sidebar />
              </RutaProtegida>
              {/* Reportes */}
              <RutaProtegida path="/reportes">
                <Reportes />
                <Sidebar />
              </RutaProtegida>
              {/* Ajustes del perfil */}
              <RutaProtegida path="/ajustes">
                <AjustesPerfil />
                <Sidebar />
              </RutaProtegida>
              {/* Aperturar Operación */}
              <RutaProtegida path="/crearoperacion">
                <CrearOperacion />
                <Sidebar />
              </RutaProtegida>
            </UsuarioProvider>
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
