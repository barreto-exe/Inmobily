import React, { useState, useEffect } from "react";
import "./CrearOpCierre.css";
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const CrearOpCierre = () => {

  const DatosPersonaNatural = 
    <div>
        <h1>cierre</h1> 
    </div>;

    const opcionsino = [
        {
        resp: 1,
        label: 'Si',
        },
        {
        resp: 2,
        label: 'No',
        },
    ];

    const opciones = [
        {
        value: 1,
        label: 'opcion1',
        },
        {
        value: 2,
        label: 'opcion2',
        },
    ];

    const [currency, setCurrency] = React.useState(1);

    const handleChange = (event) => {
      setCurrency(event.target.value);
    };

  return (
    <div> 
      {DatosPersonaNatural}
      {/* textfield cuando se necesita texto */}
      <TextField
        label="ejemplo"
        variant="outlined"
        style={{ marginRight: "30px" }}
      />
      {/* textfield cuando se seleccionan opciones */}
      <TextField
          select
          label="Select"
          value={currency}
          onChange={handleChange}
          variant="outlined"
        >
          {opciones.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        {/* textfield cuando se seleccionan opciones de si / no */}
      <TextField
          select
          label="Select"
          resp={currency}
          onChange={handleChange}
          variant="outlined"
        >
          {opcionsino.map((option) => (
            <MenuItem key={option.resp} resp={option.resp}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
    </div>
  );
};

export default CrearOpCierre;