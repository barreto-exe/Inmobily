import React, { useState, useEffect } from "react";
import "./CrearOpCaptacion.css";
import {
  TextField,
} from "@material-ui/core";
import MenuItem from '@material-ui/core/MenuItem';
import { Label } from "@material-ui/icons";

const CrearOpCaptacion = () => {

  const [persona, setPersona] = useState(null);
  const [currency, setCurrency] = useState(1);

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const personNatural = () => {
    return(
      <div>
        <div>
          <TextField
            fullWidth
            label="Nombre"
            variant="outlined"
            required
            />
          <TextField
            fullWidth
            label="Apellido"
            variant="outlined"
            required
          />
        </div>
        <div>
          <TextField
            fullWidth
            label="Correo"
            variant="outlined"
            required
          />
          <TextField
            fullWidth
            label="Teléfono"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Cédula"
            variant="outlined"
            required
          />
        </div>
        <div>
          <TextField
            fullWidth
            label="Descripción"
            variant="outlined"
            required
          />
        </div>
      </div>
    )
  }

  const personJuridica = () => {
    return(
      <div>
        {personNatural()}
        <div>
          <TextField
            fullWidth
            label="Nombre de Empresa"
            variant="outlined"
            required
          />
          <TextField
            fullWidth
            label="RIF de Empresa"
            variant="outlined"
            required
          />
        </div>
        <div>
          <TextField
            fullWidth
            label="Registro Mercantil"
            variant="outlined"
            required
          />
          <TextField
            fullWidth
            label="Solvenvia de IVSS"
            variant="outlined"
            required
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
      <div>
        <p>Tipo de persona: </p>
        <TextField
          select
          label="Persona"
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
    </div>
  );
};

export default CrearOpCaptacion;