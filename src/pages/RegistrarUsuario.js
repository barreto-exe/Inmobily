import React, { useState } from "react";
import { registrarUsuario } from "../firebase/functions";

// Página para registrar una cuenta nueva
const RegistrarUsuario = () => {
  // Estado inicial
  // TODO: Colocar el resto de datos
  const datosIniciales = {
    nombre: "",
    apellido: "",
    correo: "",
    cedula: "",
    telefono: "",
    password: "",
    confirmacion: "",
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
      mensajesError.apelido = "Ingresa tu apellido, por favor";
    }
    if (usuario.cedula === "") {
      mensajesError.cedula = "Ingresa tu cédula, por favor";
    }
    if (usuario.correo === "") {
      mensajesError.correo = "Ingresa tu correo, por favor";
    }
    if (usuario.password === "") {
      mensajesError.password =
        "Ingresa una contraseña de al menos 6 caracteres, por favor";
    }
    if (usuario.confirmacion === "") {
      mensajesError.confirmacion = "Repite tu contraseña, por favor";
    }
    // TODO: colocar el resto de datos

    // Verifica que todo input requerido esté lleno
    for (const propiedad in usuario) {
      // TODO: colocar el resto de campos no requerios
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
    </div>
  );
};

export default RegistrarUsuario;
