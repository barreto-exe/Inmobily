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

const sidebarAncho = 240;
const useStyles = makeStyles((theme)=>({
  paper: {
    background: '#0E4C57',
    color: '#A4A6B3',
    width: sidebarAncho,
    top: 60
  },
  root: {
    color: '#A4A6B3',
    height: 24,
    width: 24
  }, 
  menu: {
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
    const opcionesMenu = [ 
        { 
            texto: "Libreta",
            icono: <Book />,
            //onClick: () => history.push("/")
        }, 
        {
            texto: "Cartera",
            icono: <BusinessCenter/>,
            onClick: () => history.push("/cartera")
        },
        {
            texto: "Reportes",
            icono: <AssessmentOutlined/>,
            //onClick: () => history.push("/signup")
        }
    ];

    return (
        <div>
            <AppBar position="fixed" className={classes.menu}>
                <Toolbar>
                    <MenuItem>
                        <IconButton aria-label="show 11 new notifications" color="#000">
                            <Badge badgeContent={11} color="secondary">
                                <Notifications />
                            </Badge>
                        </IconButton>
                    </MenuItem>
                </Toolbar>
            </AppBar>

            <MUIDrawer variant="permanent" classes={{paper: styles.paper}}  className={classes.sidebar}>
                <div> 
                    <p>¡Bienvenido/a!</p>
                </div>

                <div>
                    <List>
                        {opcionesMenu.map((item, index)=> {
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

                <div style={{ paddingTop:'150px' }}> 
                    <Divider />
                    <List>
                        {[{texto: "Ajustes", icono: <Settings/>, /*onClick: () => history.push("/")*/}].map((item, index)=> {
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