import React from "react";
import { Drawer as MUIDrawer,
    ListItem,
    List,
    ListItemIcon,
    ListItemText,
    AppBar,
    Toolbar,
    Divider,
    Badge,
    MenuItem,
    IconButton
} from "@material-ui/core";
import { Book, BusinessCenter, AssessmentOutlined, Settings, Notifications } from "@material-ui/icons";
import { withRouter } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import logo from "../assets/logo.png"

const sidebarAncho = 240;
const useStyles = makeStyles((theme)=>({
  paper: { //para el sidebar
    background: '#0E4C57',
    color: '#A4A6B3',
    width: sidebarAncho,
    top: 60
  },
  root: { //para los iconos
    color: '#A4A6B3',
    height: 24,
    width: 24
  }, 
  toolbar: {
    background: 'white',
    height: 60
  },
  sidebar: {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    alignment: "center"
  }
}));

const Sidebar = props => {
    const { history } = props;
    const styles = useStyles();
    const classes = useStyles();

    const opcionesSidebar = [  //array con las opciones del sidebar
        { 
            texto: "Libreta",
            icono: <Book />,
            onClick: () => history.push("/libreta")
        }, 
        {
            texto: "Cartera",
            icono: <BusinessCenter/>,
            onClick: () => history.push("/cartera") //se pone el link a donde va direccionado
        },
        {
            texto: "Reportes",
            icono: <AssessmentOutlined/>,
            onClick: () => history.push("/reportes")
        }
    ];

    const opcionesToolbar = [
        {
            texto: "Ajustes", 
            icono: <Settings/>, 
            /*onClick: () => history.push("/")*/
        }
    ];

    return (
        <div>
            <AppBar position="fixed" className={classes.toolbar}>
                <Toolbar>
                    <img src={logo} width="auto" height="50px"/>

                    <div style={{flexGrow: 1}} />

                    <MenuItem>
                        <IconButton aria-label="notificaciones" color="#000">
                            <Badge badgeContent={11} color="secondary">
                                <Notifications />
                            </Badge>
                        </IconButton>
                    </MenuItem>

                </Toolbar>
            </AppBar>

            <MUIDrawer variant="permanent" classes={{paper: styles.paper}}  className={classes.sidebar}>
                <div> 
                    <p style={{ paddingTop: '15px', textAlign: "center"}}>¡Bienvenido/a!</p> 
                </div>

                <div>
                    <List>
                        {opcionesSidebar.map((item, index)=> {
                            const { texto, icono, onClick } = item;
                            return(
                                <ListItem button key={texto} onClick={onClick}>
                                    <ListItemIcon classes={{root: styles.root}}>{icono}</ListItemIcon>
                                    <ListItemText primary={texto} />
                                </ListItem>
                            )
                        })}
                    </List>
                </div>

                <div style={{ paddingTop:'220px' }}> 
                    <Divider />
                    <List>
                        {opcionesToolbar.map((item, index)=> {
                            const { texto, icono, onClick } = item
                            return (
                                <ListItem button key={texto} onClick={onClick}>
                                    <ListItemIcon classes={{root: styles.root}}>{icono}</ListItemIcon>
                                    <ListItemText primary={texto} />
                                </ListItem>
                            )
                        })}
                    </List>
                </div>
            </MUIDrawer>
            
        </div>
    );
};

export default withRouter(Sidebar);