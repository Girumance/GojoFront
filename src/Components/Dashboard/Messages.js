import React from 'react';
import { Grid } from '@material-ui/core';
import Sidebar from './Sidebar';
import "./style.css"

function Messages(props) {
    return (

        <div className="root">
            <Grid container>
                <Grid item sm={2}>
                </Grid >

                <Grid item sm={8}>
        <Grid  container spacing={1}>
            <Grid item sm={3}>
                <Sidebar/>
            </Grid>


            <Grid item sm={9}> 
                <h2>dfjlfsjlfjlk</h2>
            </Grid>
        </Grid>
        </Grid>
        </Grid>
        </div>
            
       
    );
}

export default Messages;