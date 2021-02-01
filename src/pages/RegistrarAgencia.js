import React, {useState} from 'react';
import {
  TextField,
  Button,
  InputAdornment,
  Icon,
  Avatar,
  makeStyles,
  IconButton,
  Link,
} from "@material-ui/core";
import logo from "../assets/logo.png"
import "./RegistrarAgencia.css"
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const RegistrarAgencia = () => {
  const [foto, setFoto] = useState(null);

  const seleccionarFoto = (e) => {
    const foto = e.target.files[0];
    setFoto(foto);
  };

  return(
    <div className="registro-agencia-container">
      <div>
        <img src={logo} width="300px" height="auto"/>
      </div>
      <div className="registro-agencia-subcontainer">
        <div className="title-input-registroa-container">
          <h1>Registrar Agencia</h1>
          <div className="inputs-registroa-container">
            <TextField className="inputs-registroa" label="Nombre de la Agencia" variant="filled"
              required style={{marginBottom:'20px'}}
            />
            <TextField className="inputs-registroa" label="RIF" variant="filled"
              required style={{marginBottom:'20px'}}
            />
            <TextField className="inputs-registroa" label="Contraseña" variant="filled" 
              required style={{marginBottom:'20px'}}
            />
            <TextField className="inputs-registroa" label="Confirmar Contraseña" variant="filled"
              required style={{marginBottom:'20px'}}
            />
          </div>
        </div>
        <div className="photo-registroa-container">
          <p>Logo de Agencia</p>
          <div className="registroa-rightside">            
            <div className="registroa-avatar">
              <Avatar style={{fontSize: '40px' ,height: '180px', width: '180px'}} 
              alt="Foto de perfil" src={foto && URL.createObjectURL(foto)}/>
              <input accept="image/*" style={{display: 'none'}} id="icono-boton-archivo"  
              type="file" onChange={seleccionarFoto}/>
            </div>
            <div className="registroa-foto-icon">
              <label htmlFor="icono-boton-archivo" className="foto-icono" >
                <IconButton aria-label='upload picture' color="inherit" component="span" size="medium">
                  <PhotoCamera/>
                </IconButton>
              </label>
            </div>
          </div>
          <div className="button-registroa">
              <Button
                variant="contained"
                fullWidth
                style={{right:'130px', top: '40px'}}
                color="primary"
                /*onClick={registrarCuenta}>*/>
                Registrarse
              </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegistrarAgencia;