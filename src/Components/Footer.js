import React from 'react';
import {makeStyles, Typography} from "@material-ui/core"
import SnakBar from "./SnakBar"

const useStyles =makeStyles({
    root:{
        height:"40vh",
        marginTop:"5vh",
        backgroundColor:"#3f51b5",
        padding:"px"
    }
})

function Footer() {

    const classes= useStyles();
    return (
        <div className={classes.root}>
            <SnakBar/>

   
        </div>
    );
}

export default Footer;