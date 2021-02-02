import React from "react";
import "./AjustesPerfil.css";
import { Typography, TextField, Button, Divider} from "@material-ui/core";


const AjustesPerfil = () => {
    return (
        <div className={"fondo"}>

            <div className={"container-menu"}> {/*TODO: poner componente para cambiar foto de perfil */}
                <div className={"info"}>
                    <Typography variant="h5">Nombre y Apellido</Typography>
                    <Typography variant="body1">Dirección</Typography>
                    <Typography variant="body1">Cargo</Typography>
                </div>
                <div className={"inputs-ajustes-container"}>
                    <div className={"input-flex"}>
                        <TextField 
                            className={"inputs-ajustes"} 
                            label="Nombre" 
                            variant="outlined" 
                            style={{marginRight:'30px'}} 
                            defaultValue="Bob"
                        />
                        <TextField 
                            className={"inputs-ajustes"} 
                            label="Apellido" 
                            variant="outlined"
                            defaultValue="Cholo"
                        />
                    </div>
                <TextField 
                    className={"inputs-ajustes"} 
                    label="Telefono" 
                    variant="outlined" 
                    style={{marginBottom:'20px', marginRight:'30px'}} 
                    defaultValue="0414-8888888"
                />
                <TextField 
                    className={"inputs-ajustes"} 
                    label="Dirección" 
                    defaultValue="Perro Seco" 
                    variant="outlined" 
                    style={{marginBottom:'20px'}}
                />
                <Button
                    variant="contained"
                    color="primary"
                    style={{marginBottom:'20px', marginLeft:'690px'}}>
                        Guardar Cambios
                </Button>
                <Divider variant="middle" style={{width:'100px', position:'absolute', left:'370px'}}/>
                <Typography 
                    variant="body1" 
                    style={{padding:'10px', paddingBottom:'20px'}}>
                        Cambiar Contraseña
                </Typography>
                <TextField 
                    className={"inputs-ajustes"} 
                    label="Contraseña Actual" 
                    variant="outlined" 
                    style={{marginBottom:'20px', marginRight:'30px'}} 
                />
                <div className={"inputs-password"}>
                    <TextField 
                        className={"inputs-ajustes"} 
                        label="Nueva Contraseña"
                        variant="outlined" 
                        style={{marginBottom:'20px'}}
                    />
                    <TextField 
                        className={"inputs-ajustes"} 
                        label="Repetir Nueva Contraseña"
                        variant="outlined" 
                        style={{marginBottom:'20px'}}
                    />
                    <Button
                    variant="contained"
                    color="primary"
                    style={{marginBottom:'20px', marginLeft:'215px'}}>
                        Cambiar Contraseña
                    </Button>
                </div>
                </div>
            </div>

        </div>
    );
};

export default AjustesPerfil;