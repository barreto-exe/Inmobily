import React, { useState } from "react";
import "./Cartera.css";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import OperacionesAsignadas from "../components/OperacionesAsignadas";
import OperacionesCaptacion from "../components/OperacionesCaptacion";
import OperacionesCierre from "../components/OperacionesCierre";
import OperacionesUnificadas from "../components/OperacionesUnificadas";
import Button from '@material-ui/core/Button';
import { Dialog, DialogTitle, DialogContent } from "@material-ui/core";
import CrearOperacion from "../components/CrearOperacion";

const TabPanel = (props) => {
  const { children, value, index } = props;
  return <div>{value === index && <div>{children}</div>}</div>;
};

const Libreta = () => {
  const [value, setValue] = useState(0);
  const [showCreate, setShowCreate] = useState(false);

  const manejarTabs = (e, val) => setValue(val);

  return (
    <div className={"fondo"}>
      <div className={"container-menu"}>
          <Button variant="contained" onClick={() => setShowCreate(true)} color="primary" style={{marginBottom:'20pt',marginLeft:'5pt'}}>
            Aperturar Operación
          </Button>
        <Dialog
          open={showCreate}
          onClose={() => setShowCreate(false)}
        >
          <DialogTitle>Aperturar Operación</DialogTitle>
          <DialogContent>
            <CrearOperacion close={() => setShowCreate(false)} />
          </DialogContent>
        </Dialog>
        <Paper position="fixed">
          <Tabs centered value={value} onChange={manejarTabs}>
            <Tab label="Asignadas" />
            <Tab label="De Captación" />
            <Tab label="De Cierre" />
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
          <OperacionesCierre /> 
        </TabPanel>
        <TabPanel value={value} index={3}>
          <OperacionesUnificadas />
        </TabPanel>
      </div>
    </div>
  );
};

export default Libreta;
