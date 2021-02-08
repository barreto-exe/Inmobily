import React, { useState } from "react";
import {
  TextField,
  Button,
  InputAdornment,
  Icon,
  Avatar,
  makeStyles,
  IconButton,
  Link,
} from "@material-ui/core";
import logo from "../assets/logo.png";
import "./RegistrarAgencia.css";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import { VisibilityOutlined, VisibilityOffOutlined } from "@material-ui/icons";
import { registrarAgencia } from "../firebase/functions";
import { useHistory } from "react-router-dom";

const RegistrarAgencia = () => {
  // Estado inicial
  const datosIniciales = {
    nombre: "",
    rif: "",
    descripcion: "",
  };

  // Estados
  const [agencia, setAgencia] = useState(datosIniciales);
  const [mensajesError, setMensajesError] = useState(datosIniciales);
  const [foto, setFoto] = useState(null);
  const [mostrarPassword, setMostrarPassword] = useState(false);

  const history = useHistory();

  // Función llamada al cambiar el texto del input
  const cambiarTexto = (propiedad, valor) => {
    setAgencia({ ...agencia, [propiedad]: valor });
  };

  const cambiarVisibilidad = () => {
    setMostrarPassword(!mostrarPassword);
  };

  const manejarMousePassword = (e) => {
    e.preventDefault();
  };

  const seleccionarFoto = (e) => {
    const foto = e.target.files[0];
    setFoto(foto);
  };

  const registroAgencia = async () => {
    // Reinicia los mensajes de error
    const mensajesError = { ...datosIniciales };

    if (agencia.nombre.trim() === "") {
      mensajesError.nombre = "Ingresa el nombre de tu agencia, por favor";
    }
    if (agencia.rif.trim() === "") {
      mensajesError.rif = "Ingresa el RIF de tu agencia, por favor";
    }

    if (agencia.nombre.trim() === "" || agencia.rif.trim() === "") {
      setMensajesError(mensajesError);
      return;
    }

    try {
      await registrarAgencia(agencia, foto);
      history.push("/signup");
    } catch (error) {
      if (error === "agencia-repetida") {
        mensajesError.rif = "Ya está registrada una agencia con este RIF"
      }
      // TODO: Manejar luego las desconexiones
      setMensajesError(mensajesError);
    }
  };

  return (
    <div className="registro-agencia-container">
      <div>
        <img src={logo} width="300px" height="auto" />
      </div>
      <div className="registro-agencia-subcontainer">
        <div className="title-input-registroa-container">
          <h1>Registrar Agencia</h1>
          <div className="inputs-registroa-container">
            <TextField
              className="inputs-registroa"
              label="Nombre de la Agencia"
              variant="filled"
              required
              style={{ marginBottom: "20px" }}
              error={mensajesError.nombre !== ""}
              helperText={mensajesError.nombre}
              onChange={(e) => cambiarTexto("nombre", e.target.value)}
            />
            <TextField
              className="inputs-registroa"
              label="RIF"
              variant="filled"
              required
              style={{ marginBottom: "20px" }}
              error={mensajesError.rif !== ""}
              helperText={mensajesError.rif}
              onChange={(e) => cambiarTexto("rif", e.target.value)}
            />
            <TextField
              className="inputs-registroa"
              label="Descripción"
              variant="filled"
              style={{ marginBottom: "20px" }}
              error={mensajesError.descripcion !== ""}
              helperText={mensajesError.descripcion}
              onChange={(e) => cambiarTexto("descripcion", e.target.value)}
            />
          </div>
        </div>
        <div className="photo-registroa-container">
          <p>Logo de Agencia</p>
          <div className="registroa-rightside">
            <div className="registroa-avatar">
              <Avatar
                style={{ fontSize: "40px", height: "180px", width: "180px" }}
                alt="Foto de perfil"
                src={foto && URL.createObjectURL(foto)}
              />
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="icono-boton-archivo"
                type="file"
                onChange={seleccionarFoto}
              />
            </div>
            <div className="registroa-foto-icon">
              <label htmlFor="icono-boton-archivo" className="foto-icono">
                <IconButton
                  aria-label="upload picture"
                  color="inherit"
                  component="span"
                  size="medium"
                >
                  <PhotoCamera style={{ color: "#191e34" }} />
                </IconButton>
              </label>
            </div>
          </div>
          <div className="button-registroa">
            <Button
              variant="contained"
              fullWidth
              style={{ right: "130px", top: "40px" }}
              color="primary"
              onClick={registroAgencia}
            >
              Registrarse
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrarAgencia;
