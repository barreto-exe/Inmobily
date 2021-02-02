import React from "react";
import "./AjustesPerfil.css";
import { Typography } from "@material-ui/core";


const AjustesPerfil = () => {
    return (
        <div className={"fondo"}>

            <div className={"container-menu"}>
                <div className={"info"}>
                    <Typography variant="h5">Nombre y Apellido</Typography>
                    <Typography variant="body1">Dirección</Typography>
                    <Typography variant="body1">Cargo</Typography>
                </div>

            </div>

        </div>
    );
};

export default AjustesPerfil;