import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Ruta from "./components/Ruta";
import { UsuarioProvider } from "./contexts/UsuarioContext";
import IniciarSesion from "./pages/IniciarSesion";
import RegistrarUsuario from "./pages/RegistrarUsuario";
import Cartera from "./pages/Cartera";
import Libreta from "./pages/Libreta";
import Reportes from "./pages/Reportes";
import Sidebar from "./components/Sidebar";
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
        <UsuarioProvider>
          <Router>
            <Switch>
              <Ruta path="/login">
                <IniciarSesion />
              </Ruta>
              {/* Registrar cuenta */}
              <Ruta path="/signup">
                <RegistrarUsuario />
              </Ruta>
              {/* test para el sidebar */}
              <Ruta exact path="/" auth>
                <Libreta />
                <Sidebar />
              </Ruta>
              <Ruta path="/cartera" auth>
                <Cartera />
                <Sidebar />
              </Ruta>
              <Ruta path="/reportes" auth>
                <Reportes />
                <Sidebar />
              </Ruta>
            </Switch>
          </Router>
        </UsuarioProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
