import React, { useState, useEffect } from "react";
import "./CrearOpCierre.css";
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Switch from '@material-ui/core/Switch';

const CrearOpCierre = () => {

  // Estado inicial
  const datosIniciales = {
    precio: 0.0,
    superficie: 0.0,
    ubicacion: "",
    tipoDeNegocio: "",
    tipoDeInmueble: "",
    usoDeInmueble: "",
    estiloDeInmueble: "",
    condicionDeObra: "",
    cantBannos: 0,
    cantHabitaciones: 0,
    capEstacionamiento: 0,
    parque: false, 
    piscina: false, 
    salon: false, 
    cancha: false, 
    parrilla: false,
  };

  const DatosPersonaNatural = 
    <div>
        <h1>cierre</h1> 
    </div>;

  // Estados
  const [inmueble, setInmueble] = useState(datosIniciales);
  const [areasSociales, setAreasS] = useState({
    parque: false, 
    piscina: false, 
    salon: false, 
    cancha: false, 
    parrilla: false,
  });

  const { parque, piscina, salon, cancha, parrilla } = areasSociales;

  const tiposDeNegocio = [
    { value: "Compra", label: 'Compra', },
    { value: "Alquiler", label: 'Alquiler', },
    { value: "Construccion", label: 'Construcción', }, ];

  const tiposDeInmueble = [
    { value: "Casa", label: 'Casa', },
    { value: "Apartamento", label: 'Apartameto', },
    { value: "TownHouse", label: 'TownHouse', },
    { value: "Edificio", label: 'Edificio', },
    { value: "Terreno", abel: 'Terreno', },
    { value: "Local", label: 'Local', },
    { value: "Oficina", label: 'Oficina', },
    { value: "Galpón", label: 'Galpón', },
    { value: "Empresa", label: 'Empresa', },
    { value: "Finca", label: 'Finca', }, ];      
    
  const condicionesDeObra = [
    { value: "Obra lista", label: 'Obra lista', },
    { value: "Obra limpia",  label: 'Obra limpia', }, 
    { value: "Obra gris", label: 'Obra gris', },];  

  const usosDeInmueble = [
    { value: "Residencial", label: 'Residencial', },
    { value: "Comercial", label: 'Comercial', }, ];

  const estilosDeInmueble = [
    { value: "Moderno", label: 'Moderno', }, 
    { value: "Contemporáneo", label: 'Contemporáneo', },
    { value: "Antiguo", label: 'Antiguo', }, ];

  // Función llamada al cambiar el texto del input
  const cambiarTexto = (propiedad, valor) => {
    setInmueble({ ...inmueble, [propiedad]: valor });
  };
    
  const hcAreasSociales = (event) => {
    setAreasS({ ...areasSociales, [event.target.name]: event.target.checked });
    setInmueble({...inmueble, [event.target.name]: event.target.checked});
  };

  return (
    <div> 
      {DatosPersonaNatural}
      {/* Textfield precio */}
      <TextField
          label="Precio"
          variant="outlined"
          defaultValue="0.0"
          name="precio"
          type="number"
          style={{ marginBottom: "15px", marginLeft: "15px" }}
          startAdornment={<InputAdornment position ="start">$</InputAdornment>}
          labelWidth={60}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => cambiarTexto("precio", e.target.value)}
      />
      {/* Textfield ubicación */}
      <TextField
          label="Ubicación"
          variant="outlined"
          defaultValue=""
          name="ubicacion"
          style={{ marginBottom: "15px", marginLeft: "15px" }}
          labelWidth={60}
          onChange={(e) => cambiarTexto("ubicacion", e.target.value)}
      />
      {/* Textfield superficie */}
      <TextField
          label="Superficie"
          variant="outlined"
          defaultValue="0.0"
          name="superficie"
          type="number"
          style={{ marginBottom: "15px", marginLeft: "15px" }}
          startAdornment={<InputAdornment position ="start">$</InputAdornment>}
          labelWidth={60}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => cambiarTexto("superficie", e.target.value)}
      />
      {/* Textfield tipo de negocio */}
      <TextField
          select
          label="Tipo de negocio"
          value="Compra"
          name="tipoDeNegocio"
          onChange={(e) => cambiarTexto(e.target.name, e.target.value)}
          variant="outlined"
          style={{ marginBottom: "15px", marginLeft: "15px" }}
          labelWidth={60}
        >
          {tiposDeNegocio.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
      </TextField>
      {/* Textfield tipo de inmueble */}
      <TextField
          select
          label="Tipo de inmueble"
          value="Casa"
          name="tipoDeInmueble"
          onChange={(e) => cambiarTexto(e.target.name, e.target.value)}
          variant="outlined"
          style={{ marginBottom: "15px", marginLeft: "15px" }}
          labelWidth={60}
        >
          {tiposDeInmueble.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
      </TextField>
      {/* Textfield uso del inmueble */}
      <TextField
          select
          label="Uso del inmueble"
          value="Residencial"
          name="usoDeInmueble"
          onChange={(e) => cambiarTexto(e.target.name, e.target.value)}
          variant="outlined"
          style={{ marginBottom: "15px", marginLeft: "15px" }}
          labelWidth={60}
        >
          {usosDeInmueble.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
      </TextField>
      {/* Textfield condicion de obra */}
      <TextField
          select
          label="Condición de obra"
          value="Obra lista"
          name="condicionDeObra"
          onChange={(e) => cambiarTexto(e.target.name, e.target.value)}
          variant="outlined"
          style={{ marginBottom: "15px", marginLeft: "15px" }}
          labelWidth={60}
        >
          {condicionesDeObra.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
      </TextField>
      {/* Textfield estilo de inmueble */}
      <TextField
          select
          label="Estilo de inmueble"
          value="Moderno"
          name="estiloDeInmueble"
          onChange={(e) => cambiarTexto(e.target.name, e.target.value)}
          variant="outlined"
          style={{ marginBottom: "15px", marginLeft: "15px" }}
          labelWidth={60}
        >
          {estilosDeInmueble.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
      </TextField>
      {/* Textfield cantidad de baños */}
      <TextField
          label="N° Baños"
          variant="outlined"
          defaultValue="0"
          name="cantBannos"
          type="number"
          style={{ marginBottom: "15px", marginLeft: "15px" }}
          labelWidth={60}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => cambiarTexto(e.target.name, e.target.value)}
      />
      {/* Textfield cantidad de habitaciones */}
      <TextField
          label="N° Habitaciones"
          variant="outlined"
          defaultValue="0"
          name="cantHabitaciones"
          type="number"
          style={{ marginBottom: "15px", marginLeft: "15px" }}
          labelWidth={60}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => cambiarTexto(e.target.name, e.target.value)}
      />
      {/* Textfield capacidad de estacionamiento */}
      <TextField
          label="Capacidad de estacionamiento"
          variant="outlined"
          defaultValue="0"
          name="capEstacionamiento"
          type="number"
          style={{ marginBottom: "15px", marginLeft: "15px" }}
          labelWidth={60}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => cambiarTexto(e.target.name, e.target.value)}
      />
      {/* Check box áreas sociales */}
      <FormControlLabel
          value="areas"
          control={<Switch color="primary" />}
          label="Áreas Sociales"
          style={{ marginBottom: "5px", marginLeft: "15px" }}
      />
      <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={parque} onChange={hcAreasSociales} name="parque" />}
            label="Parque infantil"
            style={{ marginBottom: "5px", marginLeft: "15px" }}
          />
          <FormControlLabel
            control={<Checkbox checked={piscina} onChange={hcAreasSociales} name="piscina" />}
            label="Piscina"
            style={{ marginBottom: "5px", marginLeft: "15px" }}
          />
          <FormControlLabel
            control={<Checkbox checked={salon} onChange={hcAreasSociales} name="salon" />}
            label="Salón de reuniones"
            style={{ marginBottom: "5px", marginLeft: "15px" }}
          />
          <FormControlLabel
            control={<Checkbox checked={cancha} onChange={hcAreasSociales} name="cancha" />}
            label="Cancha deportiva"
            style={{ marginBottom: "5px", marginLeft: "15px" }}
          />
          <FormControlLabel
            control={<Checkbox checked={parrilla} onChange={hcAreasSociales} name="parrilla" />}
            label="Parrillera"
            style={{ marginBottom: "5px", marginLeft: "15px" }}
          />
        </FormGroup>  

    </div>
  );
};

export default CrearOpCierre;