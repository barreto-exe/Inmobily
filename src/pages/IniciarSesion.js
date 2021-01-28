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
} from '@material-ui/core/styles';
import { Visibility, VisibilityOff } from "@material-ui/icons";
import "./IniciarSesion.css";
import MailIcon from "@material-ui/icons/Mail";
import LockIcon from "@material-ui/icons/Lock";
import FondoLogo from "./fondologo.jpg";

const ButtonCustom = withStyles((theme) => ({
  root: {
    color: "#fff",
    backgroundColor: "#41A48F",
    '&:hover': {
      backgroundColor: "#215248",
      
    },
  },
}))(Button);

const InputCustom = withStyles({      //Estilizar Inputs
  root: {
    '& label.Mui-focused': {
      color: '#fff',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#fff',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#fff',
      },
      '&:hover fieldset': {
        borderColor: '#fff',
        borderBottomColor: '#fff',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#fff',
      },
    },
  },
})(TextField);

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

  // Función del icono de de visibilidad
  const manejarMousePassword = (e) => {
    e.preventDefault();
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
    <div className="container">
      <div className="container_login">
        <img src={FondoLogo} className="fondologo" />
        <div className="container_login_verification">
          <div className="container_login_verification_inputs">
            <InputCustom
              fullWidth
              style={{borderRadius: '5pt', marginTop: '10%'}}
              label="Correo"
              type="email"
              error={mensajeError !== ""}
              onChange={(e) => cambiarTexto("correo", e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailIcon style={{color: "#fff"}}/>
                  </InputAdornment>
                ),
              }}
            ></InputCustom>
            <InputCustom
              fullWidth
              style={{borderRadius: '5pt', marginTop: '10%'}}
              label="Contraseña"
              type={mostrarPassword ? "text" : "password"}
              error={mensajeError !== ""}
              onChange={(e) => cambiarTexto("password", e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon style={{color: "#fff"}}/>
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={cambiarVisibilidad}
                      onMouseDown={manejarMousePassword}
                      edge="end"
                      style={{color: "#fff"}}
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
          <p style={{color: "#fff"}}>¿Eres nuevo en Inmobily?</p>
          <div className="container_button_registro">
            <ButtonCustom
              style={{marginLeft: '5pt', marginRight: '5pt'}}
              variant="contained"
              color="primary"
              onClick={inicioSesion}
            >
              Registrarse
            </ButtonCustom>
            <ButtonCustom
              style={{marginLeft: '5pt', marginRight: '5pt'}}
              variant="contained"
              color="primary"
              onClick={inicioSesion}
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
