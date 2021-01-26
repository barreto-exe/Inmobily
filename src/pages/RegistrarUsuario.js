import React, { useState } from "react";
import { registrarUsuario } from "../firebase/functions";
import { TextField, Button } from "@material-ui/core";

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
  const [foto, setFoto] = useState();
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

  const seleccionarFoto = (e) => {
    const foto = e.target.files[0];
    setFoto(foto);
  };

  // Función de registro la cuenta al clickear el botón
  const registrarCuenta = async () => {
    // Reinicia los mensajes de error
    const mensajesError = datosIniciales;

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
      await registrarUsuario(usuario);
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
      <h1>Registrar Usuario</h1>
      <TextField
        fullWidth
        label="Nombre"
        variant="outlined"
        required
        error={mensajesError.nombre !== ""}
        helperText={mensajesError.nombre}
        onChange={(e) => cambiarTexto("nombre", e.target.value)}
      ></TextField>
      <TextField
        fullWidth
        label="Apellido"
        variant="outlined"
        required
        error={mensajesError.apellido !== ""}
        helperText={mensajesError.apellido}
        onChange={(e) => cambiarTexto("apellido", e.target.value)}
      ></TextField>
      <TextField
        fullWidth
        label="Correo"
        variant="outlined"
        type="email"
        required
        error={mensajesError.correo !== ""}
        helperText={mensajesError.correo}
        onChange={(e) => cambiarTexto("correo", e.target.value)}
      ></TextField>
      {/* TODO: Mejorar la cédula por lo que mencionó Rondón */}
      <TextField
        fullWidth
        label="Cédula"
        variant="outlined"
        required
        error={mensajesError.cedula !== ""}
        helperText={mensajesError.cedula}
        onChange={(e) => cambiarTexto("cedula", e.target.value)}
      ></TextField>
      <TextField
        fullWidth
        label="Teléfono"
        variant="outlined"
        error={mensajesError.telefono !== ""}
        helperText={mensajesError.telefono}
        onChange={(e) => cambiarTexto("telefono", e.target.value)}
      ></TextField>
      {/* TODO: Considerar en el futuro una forma distinta de ingresar la dirección */}
      <TextField
        fullWidth
        label="Dirección"
        variant="outlined"
        required
        error={mensajesError.direccion !== ""}
        helperText={mensajesError.direccion}
        onChange={(e) => cambiarTexto("direccion", e.target.value)}
      ></TextField>
      <TextField
        fullWidth
        label="Contraseña"
        variant="outlined"
        required
        error={mensajesError.password !== ""}
        helperText={mensajesError.password}
        onChange={(e) => cambiarTexto("password", e.target.value)}
      ></TextField>
      <TextField
        fullWidth
        label="Repetir Contraseña"
        variant="outlined"
        required
        error={mensajesError.confirmacion !== ""}
        helperText={mensajesError.confirmacion}
        onChange={(e) => cambiarTexto("confirmacion", e.target.value)}
      ></TextField>
      <input type="file" accept="image/*" onChange={seleccionarFoto}></input>
      <Button
        variant="contained"
        fullWidth
        color="primary"
        onClick={registrarCuenta}
      >
        Registrarse
      </Button>
    </div>
  );
};

export default RegistrarUsuario;
