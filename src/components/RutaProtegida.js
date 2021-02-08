import React from "react";
import {
  Route,
  Redirect,
} from "react-router-dom";
import { useUsuario } from "../contexts/UsuarioContext";

// Envoltorio del Route para proteger rutas con autenticación
const RutaProtegida = ({ children, ...rest }) => {
  const usuario = useUsuario();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        usuario ? (
          children
        ) : (
          <Redirect
            exact 
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default RutaProtegida;