import React, { useState } from "react";
import "./Cartera.css";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import CrearOpCierre from "../components/CrearOpCierre";
import CrearOpCaptacion from "../components/CrearOpCaptacion";
import DatosCrearOp from '../components/DatosCrearOp'

const TabPanel = (props) => {
  const { children, value, index } = props;
  return <div>{value === index && <div>{children}</div>}</div>;
};

const Libreta = () => {
  const [value, setValue] = useState(0);

  const manejarTabs = (e, val) => setValue(val);

  return (
    <div className={"fondo"}>
      <div className={"container-menu"}>
        <Paper elevation={6} position="fixed">
          <Tabs textColor="primary" indicatorColor="primary" centered value={value} onChange={manejarTabs}>
            <Tab label="Aperturar operacion de Cierre" />
            <Tab label="Aperturar operación de Captación" />
          </Tabs>
        </Paper>
        <TabPanel value={value} index={0}>
          <DatosCrearOp />
          <CrearOpCierre />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <DatosCrearOp />
          <CrearOpCaptacion />
        </TabPanel>
      </div>
    </div>
  );
};

export default Libreta;