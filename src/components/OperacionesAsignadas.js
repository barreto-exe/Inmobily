import React, { useState, useEffect } from "react";
import { obtenerOperacionesAsignadas } from "../firebase/functions";
import { useUsuario } from "../contexts/UsuarioContext";

const OperacionesAsignadas = () => {
  const [operaciones, setOperciones] = useState([]);
  const [cargando, setCargando] = useState(true);

  const usuario = useUsuario();

  useEffect(() => {
    setCargando(true);
    const unsubscribe = obtenerOperacionesAsignadas(usuario, (operaciones) => {
      setOperaciones(operaciones);
      setCargando(false);
    });

    return unsubscribe;
  }, []);
};

export default OperacionesAsignadas;
