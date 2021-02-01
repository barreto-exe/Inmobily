import React from "react";
import {
  Route,
  Redirect,
} from "react-router-dom";
import { useUsuario } from "../contexts/UsuarioContext";

// Envoltorio del Route para proteger rutas con autenticación
const Ruta = ({ children, auth, ...rest }) => {
  const usuario = useUsuario();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        (auth ? usuario : !usuario) ? (
          children
        ) : (
          <Redirect
            exact 
            to={{
              pathname: auth ? "/login" : "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default Ruta;