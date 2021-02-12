import React, { useState } from "react";
import "./Cartera.css";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
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
        <DatosCrearOp />
      </div>
    </div>
  );
};

export default Libreta;