import React, { useState } from "react";
import { iniciarSesion, cerrarSesion } from "../firebase/functions";
import {
  TextField,
  Button,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import {
  fade,
  ThemeProvider,
  withStyles,
  makeStyles,
  createMuiTheme,
} from "@material-ui/core/styles";
import { VisibilityOutlined, VisibilityOffOutlined } from "@material-ui/icons";
import "./IniciarSesion.css";
import MailIcon from "@material-ui/icons/MailOutlined";
import LockIcon from "@material-ui/icons/LockOutlined";
import FondoLogo from "../assets/fondologo.jpg";
import { Link, useHistory } from "react-router-dom";


// Pantalla de inicio de sesión
const IniciarSesion = () => {
  // Estado inicial
  const datosIniciales = {
    correo: "",
    password: "",
  };

  // Estados
  const [usuario, setUsuario] = useState(datosIniciales);

  const [mensajesError, setMensajesError] = useState(datosIniciales);
  const [mostrarPassword, setMostrarPassword] = useState(false);

  const history = useHistory();

  // Función llamada al cambiar el texto del input
  const cambiarTexto = (propiedad, valor) => {
    setUsuario({ ...usuario, [propiedad]: valor });
  };

  // Función para cambiar visibilidad de la contraseña
  const cambiarVisibilidad = () => {
    setMostrarPassword(!mostrarPassword);
  };

  // Función del icono de de visibilidad
  const manejarMousePassword = (e) => {
    e.preventDefault();
  };

  // Función que inicia sesión al clickear el botón
  const inicioSesion = async () => {
    const mensajesError = { ...datosIniciales };

    if (usuario.correo.trim() === "") {
      mensajesError.correo = "Ingresa tu correo, por favor";
    }
    if (usuario.password === "") {
      mensajesError.password = "Ingresa tu contraseña, por favor";
    }

    // Verifica que los input estén llenos
    if (usuario.correo.trim() === "" || usuario.password === "") {
      setMensajesError(mensajesError);
      return;
    }

    // Inicia sesión
    try {
      await iniciarSesion(usuario.correo.trim(), usuario.password);
      history.push("/");
    } catch (error) {
      if (error.code === "auth/invalid-email") {
        mensajesError.correo =
          "Ingresa una dirección de correo electrónico válida";
      } else if (error.code === "auth/user-not-found") {
        mensajesError.correo =
          "No hay usuarios con este correo, intenta de nuevo";
      } else if (error.code === "auth/wrong-password") {
        mensajesError.password = "Contraseña incorrecta, intenta nuevamente";
      }
      // TODO: Pensar en el error de desconexión
      setMensajesError(mensajesError);
    }
  };

  return (
    <div className="container">
      <div className="container-login">
        <img src={FondoLogo} className="fondologo" />
        <div className="container-login-verification">
          <div className="container-login-verification-inputs">
            <TextField
              fullWidth
              className="textFields"
              label="Correo"
              type="email"
              variant="filled"
              style={{marginTop: "5%"}}
              error={mensajesError.correo !== ""}
              helperText={mensajesError.correo}
              onChange={(e) => cambiarTexto("correo", e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailIcon style={{color: "#191e34"}} />
                  </InputAdornment>
                ),
              }}
            ></TextField>
            <TextField
              fullWidth
              className="textFields"
              label="Contraseña"
              style={{marginTop: "5%"}}
              variant="filled"
              type={mostrarPassword ? "text" : "password"}
              error={mensajesError.password !== ""}
              helperText={mensajesError.password}
              onChange={(e) => cambiarTexto("password", e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon style={{color: "#191e34"}} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={cambiarVisibilidad}
                      onMouseDown={manejarMousePassword}
                      edge="end"
                      style={{color: "#191e34"}}
                    >
                      {mostrarPassword ? <VisibilityOutlined /> : <VisibilityOffOutlined />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            ></TextField>
          </div>
          <div className="container-button-inicio">
            <Button
              variant="contained"
              color="primary"
              onClick={inicioSesion}
            >
              Ingresar
            </Button>
          </div>
          <p style={{ color: "#fff" }}>¿Eres nuevo en Inmobily?</p>
          <div className="container-button-registro">
            <Button
              component={Link}
              to="/signup"
              style={{ marginLeft: "5pt", marginRight: "5pt" }}
              variant="contained"
              color="primary"
            >
              Registrarse
            </Button>
            <Button
              component={Link}
              to="/signup/agencia"
              style={{ marginLeft: "5pt", marginRight: "5pt" }}
              variant="contained"
              color="primary"
            >
              Registrar Agencia
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IniciarSesion;
