import React from 'react';
import { Typography, Paper, Divider, Button } from "@material-ui/core";
import "./DetallesLibreta.css"

const DetallesAsesor = () => {  
    return (  
        <div className={"fondo"}>
            <div className={"detalles-container"}>
                <Typography variant="h5" style={{paddingBottom: '15px'}}>
                        Información del Asesor
                </Typography>


                <Paper elevation={3} className={"paper"}>
                <div style={{position:'relative', marginLeft:"175px"}}>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <Typography variant="button" display="block" style={{paddingRight: '20px', paddingTop: '20px'}}>
                            Nombre
                        </Typography>
                        <Typography variant="body1" style={{paddingTop: '20px'}}>
                            Jesus
                        </Typography>
                    </div>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <Typography variant="button" display="block" style={{paddingRight: '20px', paddingTop: '5px'}}>
                            Apellido
                        </Typography>
                        <Typography variant="body1" style={{paddingTop: '5px'}}>
                            Rondon
                        </Typography>
                    </div>
                </div>



                <div style={{display: "flex", flexDirection: "row", marginLeft:"100px", marginTop: "20px", marginBottom:"50px"}}>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <Typography variant="button" style={{paddingTop: '10px'}}>
                            Dirección
                        </Typography>
                        <Typography variant="body1">
                            Puerto Ordaz   
                        </Typography>
                        <Typography variant="button" style={{paddingTop: '20px'}}>
                            Teléfono
                        </Typography>
                        <Typography variant="body1" style={{paddingBottom: "20px"}}>
                            0414-88855522  
                        </Typography>
                    </div>

                    <Divider orientation="vertical" flexItem style={{margin:'25px'}}/>

                    <div style={{display: "flex", flexDirection: "column"}}>
                        <Typography variant="button" style={{paddingTop: '10px'}}>
                            Cédula
                        </Typography>
                        <Typography variant="body1">
                            8.958.741  
                        </Typography>
                        <Typography variant="button" style={{paddingTop: '20px'}}>
                            Correo
                        </Typography>
                        <Typography variant="body1" style={{paddingBottom: "20px"}}>
                            jesus@gmail.com 
                        </Typography>
                    </div>
                </div>
                </Paper>
                <Button variant = "contained" color = "primary">
                    Ascender a Gerente
                </Button>
            </div>
        </div>
    );
    
};
 
export default DetallesAsesor;