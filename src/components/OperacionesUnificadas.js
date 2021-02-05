import React, { useState, useEffect } from "react";
import { obtenerOperacionesUnificadas } from "../firebase/functions";
import { useUsuario } from "../contexts/UsuarioContext";

// TODO: Considerar tal vez unir los tres componentes OperacionesXXXXX en uno solo, solo si es conveniente

const OperacionesUnificadas = () => {
  const [operaciones, setOperciones] = useState([]);
  const [cargando, setCargando] = useState(true);

  const usuario = useUsuario();

  useEffect(() => {
    setCargando(true); // TODO: Quitar esta carga si no genera problemas
    const unsubscribe = obtenerOperacionesUnificadas(usuario, (operaciones) => {
      setOperaciones(operaciones);
      setCargando(false);
    });

    return unsubscribe;
  }, []);

  return (
    <div>
      <h1>Operaciones Unificadas</h1>
    </div>
  );
};

export default OperacionesUnificadas;
