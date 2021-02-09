import { TextField } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import './CrearOperacion.css';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

const currencies = [
  {
    value: 1,
    label: 'De Captación',
  },
  {
    value: 2,
    label: 'De Cierre',
  },
];

const CrearOperacion = ({ close }) => {

  const [currency, setCurrency] = React.useState(0);

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return(
    <div className="container-crear-operacion">
      <div className="container-select">
        <TextField
          select
          fullWidth
          label="Operación"
          value={currency}
          onChange={handleChange}
          variant="filled"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <Divider color="primary"/>
      <div className="container-inputs-crear-operacion">
        <div className="container-input-operacion-individual">
          <TextField
            fullWidth
            variant="filled"
            label="Input 1"
          />
        </div>
        <div className="container-input-operacion-individual">
          <TextField
            fullWidth
            variant="filled"
            label="Input 2"
          />
        </div>
        <div className="container-input-operacion-individual">
          <TextField
            fullWidth
            variant="filled"
            label="Input 3"
          />
        </div>
        <div className="container-input-operacion-individual">
          <TextField
            fullWidth
            variant="filled"
            label="Input 4"
          />
        </div>
        <div className="container-input-operacion-individual">
          <Button fullWidth variant="contained" color="primary">
            Crear Operación
          </Button>
        </div>
        <div className="container-input-operacion-individual" style={{textAlign: 'center', margin: 'auto'}}>
          <p className="boton-cancelar-crear-operacion" onClick={close}>CANCELAR</p>
        </div>
      </div>
    </div>
  );
};

export default CrearOperacion;