import React from "react";
import "./Cartera.css";
import TablaReportes from "../components/TablarReportes";
import {
    Button,
  } from '@material-ui/core'


const Reportes = () => {
    const columnas = {
        historial_reportes : [
          {
            title: 'Imagen de perfil',
            field: 'imagen', 
            render: rowData => <img src={rowData.imagen} style={{width: 35, borderRadius: '50%'}}/>
          },
          {
            title: 'Detalles de Operación',
            field: 'detalles',
          },
          {
            title: 'Nombre de cliente',
            field: 'nombre',
          },
          {
            title: 'Fecha',
            field: 'fecha',
          },
          {
            title: 'Estado',
            field: 'estado',
          },
        ],
      }

    const data = {
        operacion : [
          {detalles: "Venta de una casa" , nombre: "Luisa", fecha: "20/20/20", estado: "cerrado",imagen:"https://i.imgur.com/Dhrzcnb.png"},
          {detalles: "Venta de un apartamento" , nombre: "Karen", fecha: "20/20/20", estado: "cerrado",imagen:"https://i.imgur.com/mw2F8bO.png"},
          {detalles: "Venta de una casa" , nombre: "Maria", fecha: "20/20/20", estado: "cerrado",imagen:"https://i.imgur.com/NwtfDJ6.png"},
          {detalles: "Venta de un TownHouse" , nombre: "Monica", fecha: "20/20/20", estado: "cerrado",imagen:"https://i2.wp.com/cinefilosoficial.com/wp-content/uploads/2020/12/baby-yoda-nombre-real-the-mandalorian.jpg?fit=1920%2C1080&ssl=1"},
          {detalles: "Venta de un apartamento" , nombre: "Yara", fecha: "20/20/20", estado: "cerrado",imagen:"https://i.imgur.com/8OK3URl.png"},
        ],
    }    

    return (
        <div className={"fondo"}>
            <div className={"container-menu"}>
                <div>
                    <TablaReportes columnas={columnas.historial_reportes} data={data.operacion} titulo="Historial de Operaciones" />
                </div>
                <div className={"pie-propiedades"}>
                    <Button style={{marginTop:'20pt'}} variant = "contained" color = "primary">Imprimir recibo de honorarios</Button>
                    <h4>Honorarios Calculados: 2.654,38$</h4>
                </div>
            </div>    
        </div>
    );
};

export default Reportes;