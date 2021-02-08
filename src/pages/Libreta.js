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

const TabPanel = (props) => {
  const { children, value, index } = props;
  return <div>{value === index && <div>{children}</div>}</div>;
};

const Libreta = () => {
  const [value, setValue] = useState(0);


  //aca se añadiran las operaciones, debemos definir en que parte se crearan
  const aperturarOp = ()=>{
    if (value==0) console.log('Asignada');
    if (value==1) console.log('Captación');
    if (value==2) console.log('Cierre');
    if (value==3) console.log('Unificada');
  }

  const manejarTabs = (e, val) => setValue(val);

  return (
    <div className={"fondo"}>
      <div className={"container-menu"}>
        <Paper position="fixed">
          <Tabs centered value={value} onChange={manejarTabs}>
            <Tab label="Asignadas" />
            <Tab label="De Captación" />
            <Tab label="De Cierre" />
            <Tab label="Unificadas" />
          </Tabs>
        </Paper>
        <Button variant="contained" onClick={()=>{aperturarOp()}} color="primary" style={{marginTop:'10pt',marginBottom:'5pt',marginLeft:'5pt'}}>
            Aperturar Operación
        </Button>
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
