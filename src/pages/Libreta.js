import React from "react";
import "./Cartera.css";
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function TabPanel (props){
    const {children,value,index}=props;
    return (<div>
        {
            value === index && (
                <div>{children}</div>
            )
        }
    </div>)
}

const Libreta = () => {

    const [value,setValue]=React.useState(0) 

    const handleTabs=(e,val)=>(
        setValue(val)
    )

    return (
        <div className={"fondo"}>
            <div className={"container-menu"}>
            <Paper position="fixed">
                <Tabs centered value={value} onChange={handleTabs}>
                <Tab label="Operaciones Asignadas"  />
                <Tab label="Operaciones de Captación"  />
                <Tab label="Operaciones de Cerramiento"  />
                <Tab label="Operaciones Unificadas"  />
                </Tabs>
            </Paper>
            <TabPanel value={value} index={0}>
                TO-DO: EL CONTENIDO DE LAS OPERACIONES ASIGNADAS
            </TabPanel>
            <TabPanel value={value} index={1}>
                TO-DO: EL CONTENIDO DE LAS OPERACIONES DE CAPTACION
            </TabPanel>
            <TabPanel value={value} index={2}>
                TO-DO: EL CONTENIDO DE LAS OPERACIONES DE CERRAMIENTO
            </TabPanel>
            <TabPanel value={value} index={3}>
                TO-DO: EL CONTENIDO DE LAS OPERACIONES UNIFICADAS
            </TabPanel>
            </div>    
        </div>
    );
};

export default Libreta;