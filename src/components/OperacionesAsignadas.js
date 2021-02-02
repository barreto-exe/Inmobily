import React, { useState, useEffect } from "react";
import { obtenerOperacionesAsignadas } from "../firebase/functions";
import { useUsuario } from "../contexts/UsuarioContext";

const OperacionesAsignadas = () => {
  const [operaciones, setOperciones] = useState([]);
  const [cargando, setCargando] = useState(true);

  const usuario = useUsuario();

  useEffect(() => {
    const unsubscribe = obtenerOperacionesAsignadas(usuario, () => {

    });

    return unsubscribe;
  }, []);
};

export default OperacionesAsignadas;
