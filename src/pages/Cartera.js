import React from "react";
import Sidebar from "../components/Sidebar";
import "./Cartera.css"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
    toolbar: theme.mixins.toolbar,
}));

const Cartera = () => {
    const classes = makeStyles();
    return (

        <div className={classes.toolbar}>
            <h1>cartera uwu</h1>
            
            <div>
                <Sidebar />
            </div>
        </div>
    );
};

export default Cartera;