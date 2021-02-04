import React from "react";
import "./Cartera.css";
import StyledTable from "./StyledTable";

const Cartera = () => {

  //Estas columnas son fijas, el campo field es el nombre con el que se accedera a dicho dato
  const columnas = {
    clientes_asesores : [
      {
        title: 'Nombre',
        field: 'nombre',
      },
      {
        title: 'Teléfono',
        field: 'tlf',
      },
    ],
    propiedades: [
      {
        title: 'Descripción',
        field: 'descripcion',
      },
      {
        title: 'Ubicación',
        field: 'ubicacion',
      },
    ],
    plantillas: [
      {
        title: 'Descripción',
        field: 'descripcion',
      },
    ],
    gerentes: [
      {
        title: 'Nombre',
        field: 'nombre',
      },
      {
        title: 'Teléfono',
        field: 'tlf',
      },
      {
        title: 'Departamento',
        field: 'departamento',
      }
    ]
  }
  //Esto es para probar, en este formato se introducira la data a las tablas
  const data = {
    clientes : [
      {nombre: "Miguelanggelo Sumoza" , tlf: "0424-9514722"},
      {nombre: "Samuel De Luque" , tlf: "0416-8429842"},
      {nombre: "Jose Saad uwu lindo" , tlf: "0424-5891422"},
      {nombre: "Justin Bieber" , tlf: "0418-9843571"},
      {nombre: "Monica Cuaulma" , tlf: "0426-4587266"},
      {nombre: "Bad Bunny" , tlf: "0415-8714478"},
    ],
    asesores : [
      {nombre: "Román Rodriguez uWu" , tlf: "0424-9514722"},
      {nombre: "Vanessita <3" , tlf: "0416-8429842"},
      {nombre: "Karen Morán O:" , tlf: "0424-5891422"},
      {nombre: "María Guerra >:(" , tlf: "0418-9843571"},
    ],
    propiedades : [
      {descripcion: "Casita bien lindis uwu", ubicacion: "para que quieres saber jaja"}
    ],
    plantillas : [
      {descripcion: "Primer campo de plantillas"},
      {descripcion: "Segundo campo de plantillas"},
      {descripcion: "Tercer campo de plantillas"},
    ],
    gerentes : [
      {nombre: "Jerry Mattedi", tlf: "0415-7894512", departamento: "Marketing"},
      {nombre: "Alvis Daen", tlf: "0486-4554871", departamento: "Director General"},
    ]
  }

  return (
    <div className="fondo">
      <div className="container-menu">
        <div className="clientes-asesores-container">
          <div className="table-clientes">
            <StyledTable columnas={columnas.clientes_asesores} data={data.clientes} titulo="Clientes" />
          </div>
          <div className="table-asesores">
            <StyledTable columnas={columnas.clientes_asesores} data={data.asesores} titulo="Asesores" />
          </div>
        </div>
        <div className="plantillas-propiedades-container">
          <div className="table-propiedades">
            <StyledTable columnas={columnas.propiedades} data={data.propiedades} titulo="Propiedades" />
          </div>
          <div className="table-plantillas">
            <StyledTable columnas={columnas.plantillas} data={data.plantillas} titulo="Plantillas" />
          </div>
        </div>
        <div className="gerentes-table">
          <StyledTable columnas={columnas.gerentes} data={data.gerentes} titulo="Gerentes" />
        </div>
      </div>   
    </div>
  );
};

export default Cartera;