import React, { useState } from "react";
import "./Cartera.css";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import OperacionesAsignadas from "../components/OperacionesAsignadas";
import OperacionesCaptacion from "../components/OperacionesCaptacion";
import OperacionesCerramiento from "../components/OperacionesCerramiento";
import OperacionesUnificadas from "../components/OperacionesUnificadas";

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
        <Paper position="fixed">
          <Tabs centered value={value} onChange={manejarTabs}>
            <Tab label="Asignadas" />
            <Tab label="De Captación" />
            <Tab label="De Cerramiento" />
            <Tab label="Unificadas" />
          </Tabs>
        </Paper>
        <TabPanel value={value} index={0}>
          <OperacionesAsignadas />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <OperacionesCaptacion />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <OperacionesCerramiento />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <OperacionesUnificadas />
        </TabPanel>
      </div>
    </div>
  );
};

export default Libreta;
