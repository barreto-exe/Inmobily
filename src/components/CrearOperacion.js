import { TextField } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import './CrearOperacion.css';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper"


const TabPanel = (props) => {
  const { children, value, index } = props;
  return <div>{value === index && <div>{children}</div>}</div>;
};

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

  const personaNatural=
      <div>
        <h1>natural</h1>
      </div>;

  const personaJuridica=
      <div>
        <h1>juridica</h1>
      </div>;

  const [currency, setCurrency] = React.useState(0);

  const [value, setValue] = useState(0);
  const [showCreate, setShowCreate] = useState(false);

  const manejarTabs = (e, val) => setValue(val);


  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return(
    <div className="container-crear-operacion">
      <Paper elevation={6}>
        <Tabs textColor="primary" indicatorColor="primary" centered value={value} onChange={manejarTabs}>
            <Tab label="Persona Natural" />
            <Tab label="Persona Jurídica" />
        </Tabs>
      </Paper>
      <TabPanel value={value} index={0}>
        {personaNatural}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {personaJuridica}
      </TabPanel>
    </div>
  );
};

export default CrearOperacion;