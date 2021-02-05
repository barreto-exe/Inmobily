import React, { useState, useEffect } from "react";
import { obtenerOperacionesCerramiento } from "../firebase/functions";
import { useUsuario } from "../contexts/UsuarioContext";
import Paper from '@material-ui/core/Paper';
import './Operaciones.css';
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreHorizOutlined';

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
      <Paper className="container-operaciones">
        <p className="text-operaciones">(Operacion Asignada) #001 Cliente: Roman Rodriguez</p>
        <div className="button-more-operaciones">
          <IconButton>
            <MoreIcon />
          </IconButton>
        </div>
      </Paper>
    </div>
  );
};

export default OperacionesCerramiento;
