import React, { useState } from "react";
import { iniciarSesion, cerrarSesion } from "../firebase/functions";
import { TextField, Button } from "@material-ui/core";

// Pantalla de inicio de sesión
const IniciarSesion = () => {
  // Estados
  const [usuario, setUsuario] = useState({
    correo: "",
    password: "",
  });

  const [mensajeError, setMensajeError] = useState("");
  const [mostrarPassword, setMostrarPassword] = useState(false);

  // Función llamada al cambiar el texto del input
  const cambiarTexto = (propiedad, valor) => {
    setUsuario({ ...usuario, [propiedad]: valor });
  };

  // Función para cambiar visibilidad de la contraseña
  const cambiarVisibilidad = () => {
    setMostrarPassword(!mostrarPassword);
  };

  // Función que inicia sesión al clickear el botón
  const inicioSesion = async () => {
    // Verifica que los input estén llenos
    if (usuario.correo.trim() === "" || usuario.password === "") {
      setMensajeError("Ingresa tu correo y tu contraseña, por favor");
      return;
    }

    // Inicia sesión
    try {
      await iniciarSesion(usuario.correo.trim(), usuario.password);
      alert("Inicio de sesión exitoso");
    } catch (error) {
      let mensaje;
      if (error.code === "auth/invalid-email") {
        mensaje = "Ingresa una dirección de correo electrónico válida";
      } else if (
        error.code === "auth/user-not-found" ||
        error.code === "auth/wrong-password"
      ) {
        mensaje = "Correo o contraseña inválidos, intenta nuevamente";
      } else {
        mensaje = "Se produjo un error desconocido";
      }
      setMensajeError(mensaje);
    }
  };

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <TextField
        fullWidth
        label="Correo"
        variant="outlined"
        type="email"
        error={mensajeError !== ""}
        onChange={(e) => cambiarTexto("correo", e.target.value)}
      ></TextField>
      <TextField
        fullWidth
        label="Contraseña"
        variant="outlined"
        type="password"
        error={mensajeError !== ""}
        onChange={(e) => cambiarTexto("password", e.target.value)}
      ></TextField>
      <Button
        variant="contained"
        fullWidth
        color="primary"
        onClick={inicioSesion}
      >
        Ingresar
      </Button>
      <Button
        variant="contained"
        fullWidth
        color="primary"
        onClick={() => cerrarSesion()}
      >
        Salir
      </Button>
    </div>
  );
};

export default IniciarSesion;
