import React, { useState, useEffect } from "react";
import "./DatosCrearOp.css";
import {
  TextField,
} from "@material-ui/core";
import MenuItem from '@material-ui/core/MenuItem';

const DatosCrearOp = () => {

  const [persona, setPersona] = useState(null);
  const [currency, setCurrency] = useState(1);

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

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
    </div>
  );
};

export default DatosCrearOp;