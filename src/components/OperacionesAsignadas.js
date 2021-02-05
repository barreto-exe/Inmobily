import React, { useState, useEffect } from "react";
import { obtenerOperacionesAsignadas } from "../firebase/functions";
import { useUsuario } from "../contexts/UsuarioContext";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText"

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

  return (
    <div>
      <List>
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
      </List>
    </div>
  );
};

export default OperacionesAsignadas;
