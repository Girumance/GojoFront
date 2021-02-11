import React from 'react';
import { Grid } from '@material-ui/core';
import Sidebar from '../Sidebar';
//import "./style.css"
import Index from './index';
import {useSelector} from "react-redux"


function Manage(props) {
    const user = useSelector(state => state.userdata);

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
                <Index data={user}/>
            </Grid>
        </Grid>
        </Grid>
        </Grid>
        </div>
            
       
    );
}

export default Manage;