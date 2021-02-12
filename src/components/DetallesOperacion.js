import React from 'react';
import { Typography, Paper, Divider } from "@material-ui/core";
import "./DetallesLibreta.css"

const DetallesOperacion = () => {  
    return (  
        <div className={"fondo"}>
            <div className={"detalles-container"}>
                <Typography variant="h5" style={{paddingBottom: '15px'}}>
                        Información de la Operación
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
                        <Typography variant="button" display="block" style={{paddingRight: '10px', paddingTop: '5px'}}>
                            Apellido
                        </Typography>
                        <Typography variant="body1" style={{paddingTop: '5px'}}>
                            Rondon
                        </Typography>
                    </div>
                </div>



                <div style={{display: "flex", flexDirection: "row", marginLeft:"100px", marginTop: "20px", marginBottom:"20px"}}>
                    <div style={{display: "flex", flexDirection: "column", align:"center"}}>
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

                <div style={{position:'relative', marginLeft:"10px"}}>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <Typography variant="button" display="block" style={{paddingRight: '20px'}}>
                            Descripción
                        </Typography>
                        <Typography variant="body2" style={{paddingTop: '10px'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                            Aliquam laoreet porta suscipit. Vivamus cursus molestie augue, <br />
                            vitae posuere ipsum posuere ut. Vestibulum cursus placerat augue, <br /> 
                            ut scelerisque purus scelerisque vel. 
                        </Typography>
                    </div>
                </div>



                <div style={{display: "flex", flexDirection: "row", marginLeft:"60px", marginTop: "20px", marginBottom:"50px"}}>
                    <div style={{display: "flex", flexDirection: "column", align:"center"}}>
                        <Typography variant="button" style={{paddingTop: '10px'}}>
                            Precio
                        </Typography>
                        <Typography variant="body1">
                            200,000 $  
                        </Typography>
                        <Typography variant="button" style={{paddingTop: '20px'}}>
                            Superficie (m²)
                        </Typography>
                        <Typography variant="body1">
                            450,3
                        </Typography>
                        <Typography variant="button" style={{paddingTop: '20px'}}>
                            Tipo de inmueble
                        </Typography>
                        <Typography variant="body1">
                            Casa
                        </Typography>
                        <Typography variant="button" style={{paddingTop: '20px'}}>
                            Estilo del inmueble
                        </Typography>
                        <Typography variant="body1">
                            Moderno
                        </Typography>
                        <Typography variant="button" style={{paddingTop: '20px'}}>
                            N° de habitaciones
                        </Typography>
                        <Typography variant="body1">
                            3
                        </Typography>
                        <Typography variant="button" style={{paddingTop: '20px'}}>
                            áreas sociales
                        </Typography>
                        <Typography variant="body1" style={{paddingBottom: "20px"}}>
                            No
                        </Typography>
                    </div>

                    <Divider orientation="vertical" flexItem style={{marginLeft:'25px', marginRight:"10px", marginBottom:"20px"}}/>

                    <div style={{display: "flex", flexDirection: "column", align:"center"}}>
                        <Typography variant="button" style={{paddingTop: '10px'}}>
                            Ubicación
                        </Typography>
                        <Typography variant="body1">
                            Puerto Ordaz
                        </Typography>
                        <Typography variant="button" style={{paddingTop: '20px'}}>
                            Tipo de Negocio
                        </Typography>
                        <Typography variant="body1">
                            Compra
                        </Typography>
                        <Typography variant="button" style={{paddingTop: '20px'}}>
                            Uso del Inmueble
                        </Typography>
                        <Typography variant="body1">
                            Residencial
                        </Typography>
                        <Typography variant="button" style={{paddingTop: '20px'}}>
                            N° de baños
                        </Typography>
                        <Typography variant="body1">
                            4
                        </Typography>
                        <Typography variant="button" style={{paddingTop: '20px'}}>
                            Capacidad de estacionamiento
                        </Typography>
                        <Typography variant="body1" style={{paddingBottom: "20px"}}>
                            2
                        </Typography>
                        
                    </div>
                </div>
                </Paper>
                <div style={{padding:"20px"}}/>
            </div>
        </div>
    );
    
};
 
export default DetallesOperacion;