import React, { useState, useEffect } from "react";
import "./DatosCrearOp.css";
import {
  TextField,
} from "@material-ui/core";
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';


const DatosCrearOp = () => {

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

  const [persona, setPersona] = useState(null);
  const [currency, setCurrency] = useState(1);
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const compAreasSociales = () => {
    return (
      <FormGroup >
          <div className="container-op-flex-check">
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
          </div>
          <div className="container-op-flex-check">
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
          </div>
        </FormGroup>
    )
  }

  const personNatural = () => {
    return(
      <div>
        <div className="container-op-flex">
          <TextField
            fullWidth
            label="Nombre"
            variant="outlined"
            required
            style={{marginLeft: '10pt', marginRight: '10pt'}}
          />
          <TextField
            fullWidth
            label="Apellido"
            variant="outlined"
            required
            style={{marginLeft: '10pt', marginRight: '10pt'}}
          />
        </div>
        <div className="container-op-flex">
          <TextField
            fullWidth
            label="Correo"
            variant="outlined"
            required
            style={{marginLeft: '10pt', marginRight: '10pt'}}
          />
          <TextField
            fullWidth
            label="Teléfono"
            variant="outlined"
            style={{marginLeft: '10pt', marginRight: '10pt'}}
          />
          <TextField
            fullWidth
            label="Cédula"
            variant="outlined"
            required
            style={{marginLeft: '10pt', marginRight: '10pt'}}
          />
        </div>
        <div className="container-op-flex">
          <TextField
            fullWidth
            label="Descripción"
            variant="outlined"
            required
            style={{marginLeft: '10pt', marginRight: '10pt'}}
          />
        </div>
      </div>
    )
  }

  const personJuridica = () => {
    return(
      <div>
        {personNatural()}
        <div className="container-op-flex">
          <TextField
            fullWidth
            label="Nombre de Empresa"
            variant="outlined"
            required
            style={{marginLeft: '10pt', marginRight: '10pt'}}
          />
          <TextField
            fullWidth
            label="RIF de Empresa"
            variant="outlined"
            required
            style={{marginLeft: '10pt', marginRight: '10pt'}}
          />
        </div>
        <div className="container-op-flex">
          <TextField
            fullWidth
            label="Registro Mercantil"
            variant="outlined"
            required
            style={{marginLeft: '10pt', marginRight: '10pt'}}
          />
          <TextField
            fullWidth
            label="Solvenvia de IVSS"
            variant="outlined"
            required
            style={{marginLeft: '10pt', marginRight: '10pt'}}
          />
          
        </div>
      </div>
    )
  }

  const askPerson = [
    {
      value: 1,
      label: 'Persona Natural',
    },
    {
      value: 2,
      label: 'Persona Jurídica',
    },
  ];

  return (
    <div>
      <div className="container-op-center">
        {/* ACA VA EL RADIO BUTTON KAREN :) */}
      </div>
      <div className="container-op-selectpersona">
        <TextField
          select
          fullWidth
          label="Tipo de persona"
          value={currency}
          onChange={handleChange}
          variant="outlined"
        >
          {askPerson.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      {
        (currency == 1) ? 
        personNatural() :
        personJuridica()
      }
      {/* Textfield precio */}
      <div className="container-op-flex">
        <TextField
            fullWidth
            style={{marginLeft: '10pt', marginRight: '10pt'}}
            label="Precio ($)"
            variant="outlined"
            defaultValue="0.0"
            name="precio"
            type="number"
            startAdornment={<InputAdornment position ="start">$</InputAdornment>}
            labelWidth={60}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => cambiarTexto("precio", e.target.value)}
        />
        {/* Textfield superficie */}
        <TextField
            fullWidth
            style={{marginLeft: '10pt', marginRight: '10pt'}}
            label="Superficie (m²)"
            variant="outlined"
            defaultValue="0.0"
            name="superficie"
            type="number"
            startAdornment={<InputAdornment position ="start">$</InputAdornment>}
            labelWidth={60}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => cambiarTexto("superficie", e.target.value)}
        />
      </div>
      <div className="container-op-flex">
        {/* Textfield ubicación */}
        <TextField
            fullWidth
            style={{marginLeft: '10pt', marginRight: '10pt'}}
            label="Ubicación"
            variant="outlined"
            defaultValue=""
            name="ubicacion"
            labelWidth={60}
            onChange={(e) => cambiarTexto("ubicacion", e.target.value)}
        />
      </div>
      <div className="container-op-flex">
        {/* Textfield tipo de negocio */}
        <TextField
            select
            fullWidth
            label="Tipo de negocio"
            value="Compra"
            name="tipoDeNegocio"
            onChange={(e) => cambiarTexto(e.target.name, e.target.value)}
            variant="outlined"
            style={{marginLeft: '10pt', marginRight: '10pt'}}
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
            fullWidth
            label="Tipo de inmueble"
            value="Casa"
            name="tipoDeInmueble"
            onChange={(e) => cambiarTexto(e.target.name, e.target.value)}
            variant="outlined"
            style={{marginLeft: '10pt', marginRight: '10pt'}}
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
            fullWidth
            label="Uso del inmueble"
            value="Residencial"
            name="usoDeInmueble"
            onChange={(e) => cambiarTexto(e.target.name, e.target.value)}
            variant="outlined"
            style={{marginLeft: '10pt', marginRight: '10pt'}}
            labelWidth={60}
          >
            {usosDeInmueble.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
        </TextField>
      </div>
      <div className="container-op-flex">
        {/* Textfield condicion de obra */}
        <TextField
            select
            fullWidth
            label="Condición de obra"
            value="Obra lista"
            name="condicionDeObra"
            onChange={(e) => cambiarTexto(e.target.name, e.target.value)}
            variant="outlined"
            style={{marginLeft: '10pt', marginRight: '10pt'}}
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
            fullWidth
            select
            label="Estilo de inmueble"
            value="Moderno"
            name="estiloDeInmueble"
            onChange={(e) => cambiarTexto(e.target.name, e.target.value)}
            variant="outlined"
            style={{marginLeft: '10pt', marginRight: '10pt'}}
            labelWidth={60}
          >
            {estilosDeInmueble.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
        </TextField>
      </div>
      <div className="container-op-flex">
        {/* Textfield cantidad de baños */}
        <TextField
            fullWidth
            label="N° Baños"
            variant="outlined"
            defaultValue="0"
            name="cantBannos"
            type="number"
            style={{marginLeft: '10pt', marginRight: '10pt'}}
            labelWidth={60}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => cambiarTexto(e.target.name, e.target.value)}
        />
        {/* Textfield cantidad de habitaciones */}
        <TextField
            fullWidth
            label="N° Habitaciones"
            variant="outlined"
            defaultValue="0"
            name="cantHabitaciones"
            type="number"
            style={{marginLeft: '10pt', marginRight: '10pt'}}
            labelWidth={60}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => cambiarTexto(e.target.name, e.target.value)}
        />
        {/* Textfield capacidad de estacionamiento */}
        <TextField
            fullWidth
            label="Capacidad de estacionamiento"
            variant="outlined"
            defaultValue="0"
            name="capEstacionamiento"
            type="number"
            style={{marginLeft: '10pt', marginRight: '10pt'}}
            labelWidth={60}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => cambiarTexto(e.target.name, e.target.value)}
        />
      </div>
      {/* Check box áreas sociales (MIGUEL)*/}
      <div className="container-op-center">
        <FormControlLabel
            value="areas"
            control={<Switch color="primary" />}
            label="Áreas Sociales"
            onChange={(event) => setChecked(event.target.checked)}
            style={{ marginBottom: "5px", marginLeft: "15px" }}
        />
      </div>

      {
        checked ? 
        compAreasSociales() : undefined
      }
    </div>
  );
};

export default DatosCrearOp;