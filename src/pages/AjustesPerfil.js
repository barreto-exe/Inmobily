import React, { useState } from "react";
import "./AjustesPerfil.css";
import {
  Typography,
  TextField,
  Button,
  Divider,
  Avatar,
  IconButton,
} from "@material-ui/core";
import { useUsuario } from "../contexts/UsuarioContext";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import { actualizarUsuario, subirArchivo } from "../firebase/functions";

const AjustesPerfil = () => {
  const usuario = useUsuario();

  const [nuevosDatos, setNuevosDatos] = useState({
    nombre: usuario.nombre,
    apellido: usuario.apellido,
    telefono: usuario.telefono,
    direccion: usuario.direccion,
  });

  const [nuevaPassword, setNuevaPassword] = useState({
    actual: "",
    nueva: "",
    confirmacion: "",
  });

  const [errorMessage, setErrorMessage] = useState(false);
  const [errorPass, setErrorPass] = useState("");
  const [foto, setFoto] = useState(null);

  const seleccionarFoto = async (e) => {
    const foto = e.target.files[0];
    setFoto(foto);
  };

  // Función llamada al cambiar el texto del input de usuario
  const cambiarTextoUsuario = (propiedad, valor) => {
    setNuevosDatos({ ...nuevosDatos, [propiedad]: valor });
  };

  // Función llamada al cambiar el texto del input de contraseñas
  const cambiarTextoPass = (propiedad, valor) => {
    setNuevaPassword({ ...nuevaPassword, [propiedad]: valor });
  };

  // Actualizar datos de usuario
  const actualizar = async () => {
    if (
      nuevosDatos.nombre === "" ||
      nuevosDatos.apellido === "" ||
      nuevosDatos.telefono === "" ||
      nuevosDatos.direccion === ""
    ) {
      setErrorMessage(true);
      return;
    }

    try {
      await actualizarUsuario(usuario, nuevosDatos, foto);
      window.location.reload();
    } catch (error) {
      console.log(error);
      // TODO: Colocar un mensaje de error por desconexión
    }
  };

  // Cambiar contraseña
  const cambiarPassword = async () => {
    if (
      nuevaPassword.actual === "" ||
      nuevaPassword.nueva === "" ||
      nuevaPassword.confirmacion === ""
    ) {
      setErrorPass("Ingresa tus contraseñas, por favor");
      return;
    }

    if (nuevaPassword.nueva !== nuevaPassword.confirmacion) {
      setErrorPass("Las contraseñas deben coincidir");
      return;
    }

    try {
      alert("A");

      window.location.reload();
    } catch (error) {
      console.log(error);
      // TODO: Colocar error de desconexión
    }
  };

  return (
    <div className={"fondo"}>
      <div className={"container-menu"}>
        {/*TODO: poner componente para cambiar foto de perfil */}
        <div className={"info"}>
          <div className="foto-ajustes">
            <Avatar
              style={{ fontSize: "40px", height: "130px", width: "130px" }}
              alt="Foto de perfil"
              src={(foto && URL.createObjectURL(foto)) || usuario.fotoURL}
            />
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="icono-boton-ajustes"
              type="file"
              onChange={seleccionarFoto}
            />
            <div className="foto-icono-container-ajustes">
              <label
                htmlFor="icono-boton-ajustes"
                className="foto-icono-ajustes"
              >
                <IconButton
                  aria-label="upload picture"
                  color="inherit"
                  component="span"
                  size="small"
                >
                  <PhotoCamera
                    style={{
                      color: "#191e34",
                      width: "20px",
                      height: "20px",
                      padding: "5",
                    }}
                  />
                </IconButton>
              </label>
            </div>
          </div>
          <div className="informacion-ajustes">
            <Typography variant="h5">
              {usuario.nombre + " " + usuario.apellido}
            </Typography>
            <Typography variant="body1">{usuario.direccion}</Typography>
            <Typography variant="body1">Cargo</Typography>
            {/* TODO: Colocar el cargo cuando el campo exista */}
          </div>
        </div>
        <div className={"inputs-ajustes-container"}>
          {/* TODO: Colocar correctamente el mensaje de error */}
          {errorMessage && <p>Debes llenar todos los campos</p>}
          <div className={"input-flex"}>
            <TextField
              className={"inputs-ajustes"}
              label="Nombre"
              variant="outlined"
              style={{ marginRight: "30px" }}
              defaultValue={usuario.nombre}
              onChange={(e) => cambiarTextoUsuario("nombre", e.target.value)}
            />
            <TextField
              className={"inputs-ajustes"}
              label="Apellido"
              variant="outlined"
              defaultValue={usuario.apellido}
              onChange={(e) => cambiarTextoUsuario("apellido", e.target.value)}
            />
          </div>
          <TextField
            className={"inputs-ajustes"}
            label="Telefono"
            variant="outlined"
            style={{ marginBottom: "20px", marginRight: "30px" }}
            defaultValue={usuario.telefono}
            onChange={(e) => cambiarTextoUsuario("telefono", e.target.value)}
          />
          <TextField
            className={"inputs-ajustes"}
            label="Dirección"
            defaultValue={usuario.direccion}
            variant="outlined"
            style={{ marginBottom: "20px" }}
            onChange={(e) => cambiarTextoUsuario("direccion", e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            style={{ marginBottom: "20px", marginLeft: "690px" }}
            onClick={actualizar}
          >
            Guardar Cambios
          </Button>
          <Divider
            variant="middle"
            style={{ width: "100px", position: "absolute", left: "370px" }}
          />
          <Typography
            variant="body1"
            style={{ padding: "10px", paddingBottom: "20px" }}
          >
            Cambiar Contraseña
          </Typography>
          {/* TODO: Estilizar este mensaje de error */}
          {errorPass !== "" && <p>{errorPass}</p>}
          <TextField
            className={"inputs-ajustes"}
            label="Contraseña Actual"
            variant="outlined"
            type="password"
            style={{ marginBottom: "20px", marginRight: "30px" }}
            onChange={(e) => cambiarTextoPass("actual", e.target.value)}
          />
          <div className={"inputs-password"}>
            <TextField
              className={"inputs-ajustes"}
              label="Nueva Contraseña"
              variant="outlined"
              type="password"
              style={{ marginBottom: "20px" }}
              onChange={(e) => cambiarTextoPass("nueva", e.target.value)}
            />
            <TextField
              className={"inputs-ajustes"}
              label="Repetir Nueva Contraseña"
              variant="outlined"
              type="password"
              style={{ marginBottom: "20px" }}
              onChange={(e) => cambiarTextoPass("confirmacion", e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              style={{ marginBottom: "20px", marginLeft: "215px" }}
              onClick={cambiarPassword}
            >
              Cambiar Contraseña
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AjustesPerfil;
