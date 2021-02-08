import React from "react";
import MaterialTable from 'material-table'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SortIcon from '@material-ui/icons/Sort';
import FilterListIcon from '@material-ui/icons/FilterList';
import { FilterList } from "@material-ui/icons";


const TablaReportes = (props) => {
  return(
    <div>
      <MaterialTable columns={props.columnas} data={props.data} title={props.titulo}
        actions={[
          {
            icon: MoreVertIcon,
            tooltip: 'Editar',
            onClick: (event, rowData) => console.log("Ha accedido al editar cliente de: " + rowData.nombre)
          },
          {
            icon: SortIcon,
            tooltip: 'Ordenar',
            isFreeAction: true,
            onClick: (event) => alert("You want to add a new row")
          },
          {
            icon: FilterList,
            tooltip: 'Ordenar',
            isFreeAction: true,
            onClick: (event) => alert("You want to add a new row")
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
      </div>
    </div>
  )
}

export default TablaReportes;