import React, { useState, useEffect } from "react";
import { obtenerOperacionesUnificadas } from "../firebase/functions";
import { useUsuario } from "../contexts/UsuarioContext";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Link } from "react-router-dom";

// TODO: Considerar tal vez unir los tres componentes OperacionesXXXXX en uno solo, solo si es conveniente

const OperacionesUnificadas = () => {
  const [operaciones, setOperaciones] = useState([]);
  const [cargando, setCargando] = useState(true);

  const usuario = useUsuario();

  useEffect(() => {
    setCargando(true); // TODO: Quitar esta carga si no genera problemas
    const unsubscribe = obtenerOperacionesUnificadas(
      usuario.agenciaID,
      (operaciones) => {
        setOperaciones(operaciones);
        setCargando(false);
      }
    );

    return unsubscribe;
  }, []);

  if (cargando) {
    return (
      <div className="container-op-center" style={{marginTop: '20pt'}}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <div>
      <List>
        {/* Esta es la real */}
        {operaciones.map((operacion) => (
          <ListItem
            divider
            button
            key={operacion.id}
            component={Link}
            to={"/operaciones/" + operacion.id}
            style={{
              backgroundColor: "#fff",
              borderRadius: "5pt",
              marginBottom: "10pt",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            <ListItemText
              key={operacion.id + "dsas"}
              primary="Operacion Unificada"
              secondary={`Cliente: ${operacion.cliente.nombre} ${operacion.cliente.apellido}`}
              secondaryTypographyProps={{ align: "left" }}
              style={{ whiteSpace: "pre" }}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default OperacionesUnificadas;
