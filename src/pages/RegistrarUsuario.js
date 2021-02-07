import React, { useState } from "react";
import { registrarUsuario } from "../firebase/functions";
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
import { VisibilityOutlined, VisibilityOffOutlined } from "@material-ui/icons";
import "./RegistroUsuario.css";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import logo from "../assets/logo.png";
import { useHistory } from "react-router-dom";

// Página para registrar una cuenta nueva
const RegistrarUsuario = () => {
  // Estado inicial
  const datosIniciales = {
    nombre: "",
    apellido: "",
    correo: "",
    cedula: "",
    telefono: "",
    direccion: "",
    password: "",
    confirmacion: "",
  };

  // Estados
  const [usuario, setUsuario] = useState(datosIniciales);
  const [foto, setFoto] = useState(null);
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

  const seleccionarFoto = (e) => {
    const foto = e.target.files[0];
    setFoto(foto);
  };

  // Función del icono de de visibilidad
  const manejarMousePassword = (e) => {
    e.preventDefault();
  };

  // Función de registro la cuenta al clickear el botón
  const registrarCuenta = async () => {
    // Reinicia los mensajes de error
    const mensajesError = { ...datosIniciales };

    // Borra los espacios al inicio y al final
    for (const propiedad in usuario) {
      if (propiedad !== "password" && propiedad !== "confirmacion") {
        usuario[propiedad] = usuario[propiedad].trim();
      }
    }

    // Maneja los errores de inputs vacíos
    if (usuario.nombre === "") {
      mensajesError.nombre = "Ingresa tu nombre, por favor";
    }
    if (usuario.apellido === "") {
      mensajesError.apellido = "Ingresa tu apellido, por favor";
    }
    if (usuario.cedula === "") {
      mensajesError.cedula = "Ingresa tu cédula, por favor";
    }
    if (usuario.correo === "") {
      mensajesError.correo = "Ingresa tu correo, por favor";
    }
    if (usuario.direccion === "") {
      mensajesError.direccion = "Ingresa tu dirección, por favor";
    }
    if (usuario.password === "") {
      mensajesError.password =
        "Ingresa una contraseña de al menos 6 caracteres, por favor";
    }
    if (usuario.confirmacion === "") {
      mensajesError.confirmacion = "Repite tu contraseña, por favor";
    }

    // Verifica que todo input requerido esté lleno
    for (const propiedad in usuario) {
      if (usuario[propiedad] === "" && propiedad !== "telefono") {
        setMensajesError(mensajesError);
        return;
      }
    }

    // Verifica que las contraseñas coincidan
    if (usuario.password !== usuario.confirmacion) {
      mensajesError.confirmacion =
        "Las contraseñas no coinciden, vuelve a intentarlo";
      setMensajesError(mensajesError);
      return;
    }

    // Intenta registrar al usuario
    try {
      await registrarUsuario(usuario, foto);
      history.push("/");
    } catch (error) {
      if (error.code === "auth/invalid-email") {
        mensajesError.correo =
          "Ingresa una dirección de correo electrónico válida";
      } else if (error.code === "auth/email-already-in-use") {
        mensajesError.correo =
          "Ya existe un usuario con esta dirección de correo, intenta nuevamente";
      } else if (error.code === "auth/weak-password") {
        mensajesError.password =
          "Ingresa una contraseña de al menos 6 caracteres, por favor";
      }
      // TODO: Pensar en cómo manejar el error de desconexión
      setMensajesError(mensajesError);
    }
  };

  return (
    <div>
      <div style={{ width: "913px", margin: "30px auto auto auto" }}>
        <img src={logo} width="300px" height="auto" />
      </div>
      <div className="cRegistro">
        <div>
          <h1 className="titleRegistro">Registrar Usuario</h1>
          <div className="containerFlexing">
            <TextField
              fullWidth
              className="textFields"
              label="Nombre"
              variant="filled"
              required
              style={{ marginRight: "20px" }}
              error={mensajesError.nombre !== ""}
              helperText={mensajesError.nombre}
              onChange={(e) => cambiarTexto("nombre", e.target.value)}
            ></TextField>
            <TextField
              fullWidth
              className="textFields"
              label="Apellido"
              variant="filled"
              required
              error={mensajesError.apellido !== ""}
              helperText={mensajesError.apellido}
              onChange={(e) => cambiarTexto("apellido", e.target.value)}
            ></TextField>
          </div>

          <TextField
            fullWidth
            className="textFields"
            label="Correo"
            type="email"
            variant="filled"
            required
            style={{ marginBottom: "20px" }}
            error={mensajesError.correo !== ""}
            helperText={mensajesError.correo}
            onChange={(e) => cambiarTexto("correo", e.target.value)}
          ></TextField>
          {/* TODO: Mejorar la cédula por lo que mencionó Rondón */}
          <div className="containerFlexing">
            <TextField
              fullWidth
              className="textFields"
              label="Cédula"
              variant="filled"
              required
              style={{ marginRight: "20px" }}
              error={mensajesError.cedula !== ""}
              helperText={mensajesError.cedula}
              onChange={(e) => cambiarTexto("cedula", e.target.value)}
            ></TextField>
            <TextField
              fullWidth
              className="textFields"
              label="Teléfono"
              variant="filled"
              error={mensajesError.telefono !== ""}
              helperText={mensajesError.telefono}
              onChange={(e) => cambiarTexto("telefono", e.target.value)}
            ></TextField>
          </div>
          {/* TODO: Considerar en el futuro una forma distinta de ingresar la dirección */}
          <TextField
            fullWidth
            label="Dirección"
            className="textFields"
            variant="filled"
            required
            style={{ marginBottom: "20px" }}
            error={mensajesError.direccion !== ""}
            helperText={mensajesError.direccion}
            onChange={(e) => cambiarTexto("direccion", e.target.value)}
          ></TextField>
          <div className="containerFlexing">
            <TextField
              fullWidth
              className="textFields"
              style={{ marginRight: "20px" }}
              label="Contraseña"
              type={mostrarPassword ? "text" : "password"}
              variant="filled"
              required
              error={mensajesError.password !== ""}
              helperText={mensajesError.password}
              onChange={(e) => cambiarTexto("password", e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={cambiarVisibilidad}
                      onMouseDown={manejarMousePassword}
                      edge="end"
                      style={{ color: "#191e34" }}
                    >
                      {mostrarPassword ? (
                        <VisibilityOutlined />
                      ) : (
                        <VisibilityOffOutlined />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            ></TextField>
            <TextField
              fullWidth
              className="textFields"
              label="Repetir Contraseña"
              type={mostrarPassword ? "text" : "password"}
              variant="filled"
              required
              error={mensajesError.confirmacion !== ""}
              helperText={mensajesError.confirmacion}
              onChange={(e) => cambiarTexto("confirmacion", e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={cambiarVisibilidad}
                      onMouseDown={manejarMousePassword}
                      edge="end"
                      style={{ color: "#191e34" }}
                    >
                      {mostrarPassword ? (
                        <VisibilityOutlined />
                      ) : (
                        <VisibilityOffOutlined />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            ></TextField>
          </div>
        </div>
        <div className="container-avatar-icon">
          <div className="rightAvatar">
            <Avatar
              style={{ fontSize: "40px", height: "220px", width: "220px" }}
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
          <div className="div-foto-icon">
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
            <div className="reg-boton">
              <Button
                variant="contained"
                fullWidth
                style={{ right: "130px", top: "40px" }}
                color="primary"
                onClick={registrarCuenta}
              >
                Registrarse
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrarUsuario;
