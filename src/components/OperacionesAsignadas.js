import React, { useState, useEffect } from "react";
import { obtenerOperacionesAsignadas } from "../firebase/functions";
import { useUsuario } from "../contexts/UsuarioContext";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Link } from "react-router-dom";

// TODO: Considerar tal vez unir los tres componentes OperacionesXXXXX en uno solo, solo si es conveniente

const OperacionesAsignadas = () => {
  const [operaciones, setOperaciones] = useState([]);
  const [cargando, setCargando] = useState(true);

  const usuario = useUsuario();

  useEffect(() => {
    setCargando(true); // TODO: Quitar esta carga si no genera problemas
    const unsubscribe = obtenerOperacionesAsignadas(usuario, (operaciones) => {
      setOperaciones(operaciones);
      setCargando(false);
    });

    return unsubscribe;
  }, []);

  if (cargando) {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  }

  return (
    <div>
      <List>
        {/* TODO: Quitar esta luego que es solo de ejemplo */}
        <ListItem
          divider
          button
          style={{
            backgroundColor: "#fff",
            borderRadius: "5pt",
            marginBottom: "10pt",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          <ListItemText
            primary="Operacion Asignada"
            secondary="#001 Cliente: Jesús González"
            secondaryTypographyProps={{ align: "left" }}
            style={{ whiteSpace: "pre" }}
          />
        </ListItem>

        {/* Esta es la real */}
        {operaciones.map((operacion) => (
          <ListItem
            divider
            button
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
              primary="Operacion Asignada"
              secondary={`#${operacion.numero} Cliente: ${operacion.cliente.nombre} ${operacion.cliente.apellido}`}
              secondaryTypographyProps={{ align: "left" }}
              style={{ whiteSpace: "pre" }}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default OperacionesAsignadas;
