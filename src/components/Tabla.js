import React from "react";
import MaterialTable from 'material-table'
import InfoIcon from '@material-ui/icons/Info';
import {
  Button,
} from '@material-ui/core'

const Tabla = (props) => {
  return(
    <div>
      <MaterialTable columns={props.columnas} data={props.data} title={props.titulo}
        actions={[
          {
            icon: 'edit',
            tooltip: 'Editar',
            onClick: (event, rowData) => console.log("Ha accedido al editar cliente de: " + rowData.nombre)
          },
          {
            icon: InfoIcon,
            tooltip: 'Informacion',
            onClick: (event, rowData) => console.log("Informacion sobre: " + rowData.nombre)
          }
        ]} 
        options={{actionsColumnIndex: -1, pageSizeOptions:[5], emptyRowsWhenPaging: false, 
          searchFieldStyle:{width: '150px'}, headerStyle:{fontWeight:'bold'}}}
        localization={
        {
          body:{emptyDataSourceMessage: 'No hay información para mostrar'},
          toolbar: {searchPlaceholder: 'Buscar'},
          header:{actions:''}, 
          pagination:{
            firstTooltip: 'Ir al principio', 
            nextTooltip: 'Siguiente página',
            previousTooltip: 'Página anterior',
            lastTooltip: 'Ir al final',
            labelDisplayedRows: ''
        }}}
      />
      <div style={{position: 'relative', bottom: '45px', left: '10px', width: '80px'}}>
        <Button>Administrar</Button>
      </div>
    </div>
  )
}

export default Tabla;