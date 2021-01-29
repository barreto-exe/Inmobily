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
import { Visibility, VisibilityOff } from "@material-ui/icons";
import "./IniciarSesion.css";
import MailIcon from "@material-ui/icons/Mail";
import LockIcon from "@material-ui/icons/Lock";
import FondoLogo from "../assets/fondologo.jpg";
import { Link } from "react-router-dom";

const ButtonCustom = withStyles((theme) => ({
  root: {
    color: "#fff",
    backgroundColor: "#41A48F",
    "&:hover": {
      backgroundColor: "#215248",
    },
  },
}))(Button);

const InputCustom = withStyles({
  //Estilizar Inputs
  root: {
    "& label.Mui-focused": {
      color: "#fff",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#fff",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#fff",
      },
      "&:hover fieldset": {
        borderColor: "#fff",
        borderBottomColor: "#fff",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#fff",
      },
    },
  },
})(TextField);

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
      alert("Inicio de sesión exitoso");
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

  console.log(mensajesError)

  return (
    <div className="container">
      <div className="container_login">
        <img src={FondoLogo} className="fondologo" />
        <div className="container_login_verification">
          <div className="container_login_verification_inputs">
            <InputCustom
              fullWidth
              style={{ borderRadius: "5pt", marginTop: "10%" }}
              label="Correo"
              type="email"
              error={mensajesError.correo !== ""}
              helperText={mensajesError.correo}
              onChange={(e) => cambiarTexto("correo", e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailIcon style={{ color: "#fff" }} />
                  </InputAdornment>
                ),
              }}
            ></InputCustom>
            <InputCustom
              fullWidth
              style={{ borderRadius: "5pt", marginTop: "10%" }}
              label="Contraseña"
              type={mostrarPassword ? "text" : "password"}
              error={mensajesError.password !== ""}
              helperText={mensajesError.password}
              onChange={(e) => cambiarTexto("password", e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon style={{ color: "#fff" }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={cambiarVisibilidad}
                      onMouseDown={manejarMousePassword}
                      edge="end"
                      style={{ color: "#fff" }}
                    >
                      {mostrarPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            ></InputCustom>
          </div>
          <div className="container_button_inicio">
            <ButtonCustom
              variant="contained"
              color="primary"
              onClick={inicioSesion}
            >
              Ingresar
            </ButtonCustom>
          </div>
          <p style={{ color: "#fff" }}>¿Eres nuevo en Inmobily?</p>
          <div className="container_button_registro">
            <ButtonCustom
              component={Link}
              to="/signup"
              style={{ marginLeft: "5pt", marginRight: "5pt" }}
              variant="contained"
              color="primary"
            >
              Registrarse
            </ButtonCustom>
            <ButtonCustom
              style={{ marginLeft: "5pt", marginRight: "5pt" }}
              variant="contained"
              color="primary"
            >
              Registrar Agencia
            </ButtonCustom>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IniciarSesion;
