import React from 'react';
import {makeStyles} from "@material-ui/core"

const useStyles =makeStyles({
    root:{
        height:"40vh",
        marginTop:"5vh",
        backgroundColor:"blue"
    }
})

function Footer() {

    const classes= useStyles();
    return (
        <div className={classes.root}>
            
        </div>
    );
}

export default Footer;