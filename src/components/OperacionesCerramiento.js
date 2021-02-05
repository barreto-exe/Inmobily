import React, { useState, useEffect } from "react";
import { obtenerOperacionesCerramiento } from "../firebase/functions";
import { useUsuario } from "../contexts/UsuarioContext";

// TODO: Considerar tal vez unir los tres componentes OperacionesXXXXX en uno solo, solo si es conveniente

const OperacionesCerramiento = () => {
  const [operaciones, setOperaciones] = useState([]);
  const [cargando, setCargando] = useState(true);

  const usuario = useUsuario();

  useEffect(() => {
    setCargando(true); // TODO: Quitar esta carga si no genera problemas
    const unsubscribe = obtenerOperacionesCerramiento(usuario, (operaciones) => {
      setOperaciones(operaciones);
      setCargando(false);
    });

    return unsubscribe;
  }, []);

  return (
    <div>
      <h1>Operaciones de Cerramiento</h1>
    </div>
  );
};

export default OperacionesCerramiento;
