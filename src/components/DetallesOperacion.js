import React, { useState, useEffect } from "react";
import { Typography, Paper, Divider } from "@material-ui/core";
import "./DetallesLibreta.css";
import { obtenerOperacion } from "../firebase/functions";
import { useUsuario } from "../contexts/UsuarioContext";
import { useParams } from "react-router-dom";

const DetallesOperacion = () => {
  const [op, setOp] = useState(null);
  const [carg, setCarg] = useState(true);
  const usuario = useUsuario();
  const params = useParams();

  useEffect(() => {
    return obtenerOperacion(usuario.agenciaID, params.id, (op) => {
      setOp(op);
      setCarg(false);
    });
  }, []);

  if (carg) {
    return (
      <div>
        <h1>Cargando...</h1>
      </div>
    );
  }

  return (
    <div className={"fondo"}>
      <div className={"detalles-container"}>
        <Typography variant="h5" style={{ paddingBottom: "15px" }}>
          Información de la Operación
        </Typography>

        <Paper elevation={3} className={"paper"}>
          <div style={{ position: "relative", marginLeft: "175px" }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Typography
                variant="button"
                display="block"
                style={{ paddingRight: "20px", paddingTop: "20px" }}
              >
                Nombre
              </Typography>
              <Typography variant="body1" style={{ paddingTop: "20px" }}>
                {op.cliente.nombre}
              </Typography>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Typography
                variant="button"
                display="block"
                style={{ paddingRight: "10px", paddingTop: "5px" }}
              >
                Apellido
              </Typography>
              <Typography variant="body1" style={{ paddingTop: "5px" }}>
                {op.cliente.apellido}
              </Typography>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "100px",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                align: "center",
              }}
            >
              <Typography variant="button" style={{ paddingTop: "10px" }}>
                Dirección
              </Typography>
              <Typography variant="body1">{op.inmueble.ubicacion}</Typography>
              <Typography variant="button" style={{ paddingTop: "20px" }}>
                Teléfono
              </Typography>
              <Typography variant="body1" style={{ paddingBottom: "20px" }}>
                {op.cliente.telefono}
              </Typography>
            </div>

            <Divider
              orientation="vertical"
              flexItem
              style={{ margin: "25px" }}
            />

            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="button" style={{ paddingTop: "10px" }}>
                Cédula
              </Typography>
              <Typography variant="body1">{op.cliente.cedula}</Typography>
              <Typography variant="button" style={{ paddingTop: "20px" }}>
                Correo
              </Typography>
              <Typography variant="body1" style={{ paddingBottom: "20px" }}>
                {op.cliente.correo}
              </Typography>
            </div>
          </div>

          <div style={{ position: "relative", marginLeft: "10px" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="button"
                display="block"
                style={{ paddingRight: "20px" }}
              >
                Descripción
              </Typography>
              <Typography variant="body2" style={{ paddingTop: "10px" }}>
                {op.inmueble.descripcion}
              </Typography>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "60px",
              marginTop: "20px",
              marginBottom: "50px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                align: "center",
              }}
            >
              <Typography variant="button" style={{ paddingTop: "10px" }}>
                Precio
              </Typography>
              <Typography variant="body1">{op.inmueble.precio} $</Typography>
              <Typography variant="button" style={{ paddingTop: "20px" }}>
                Superficie (m²)
              </Typography>
              <Typography variant="body1">{op.inmueble.superficie}</Typography>
              <Typography variant="button" style={{ paddingTop: "20px" }}>
                Tipo de inmueble
              </Typography>
              <Typography variant="body1">
                {op.inmueble.tipoDeInmueble}
              </Typography>
              <Typography variant="button" style={{ paddingTop: "20px" }}>
                Estilo del inmueble
              </Typography>
              <Typography variant="body1">
                {op.inmueble.estiloDeInmueble}
              </Typography>
              <Typography variant="button" style={{ paddingTop: "20px" }}>
                N° de habitaciones
              </Typography>
              <Typography variant="body1">
                {op.inmueble.cantHabitaciones}
              </Typography>
              <Typography variant="button" style={{ paddingTop: "20px" }}>
                áreas sociales
              </Typography>
              <Typography variant="body1" style={{ paddingBottom: "20px" }}>
                No
              </Typography>
            </div>

            <Divider
              orientation="vertical"
              flexItem
              style={{
                marginLeft: "25px",
                marginRight: "10px",
                marginBottom: "20px",
              }}
            />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                align: "center",
              }}
            >
              <Typography variant="button" style={{ paddingTop: "10px" }}>
                Ubicación
              </Typography>
              <Typography variant="body1">{op.inmueble.ubicacion}</Typography>
              <Typography variant="button" style={{ paddingTop: "20px" }}>
                Tipo de Negocio
              </Typography>
              <Typography variant="body1">
                {op.inmueble.tipoDeNegocio}
              </Typography>
              <Typography variant="button" style={{ paddingTop: "20px" }}>
                Uso del Inmueble
              </Typography>
              <Typography variant="body1">
                {op.inmueble.usoDeInmueble}
              </Typography>
              <Typography variant="button" style={{ paddingTop: "20px" }}>
                N° de baños
              </Typography>
              <Typography variant="body1">{op.inmueble.cantBannos}</Typography>
              <Typography variant="button" style={{ paddingTop: "20px" }}>
                Capacidad de estacionamiento
              </Typography>
              <Typography variant="body1" style={{ paddingBottom: "20px" }}>
                {op.inmueble.capEstacionamiento}
              </Typography>
            </div>
          </div>
        </Paper>
        <div style={{ padding: "20px" }} />
      </div>
    </div>
  );
};

export default DetallesOperacion;
