import React from 'react';
import { Grid, Paper,makeStyles } from '@material-ui/core';
import Property from "./Property"
import Location from "./../Map/Location"
import {Pagination} from "@material-ui/lab"
import { Typography } from '@material-ui/core';

const useStyles =makeStyles({

    contentPane:{
        padding:"20px",
        height:"100vh",
        overflow:"auto"
    },

    page:{
        marginTop:30,
        alignContent:"center",
        alignItems:"center"
    }


})
function ContentHolder(props) {

    const classes = useStyles();
    return (
        
        <Grid container>
            <Grid item md={1}>

            </Grid>

            <Grid item md={11}>
               
                    <Grid container spacing={2}>

                        <Grid item md={5} >
                            <h1>Contents</h1>
                            <Paper className={classes.contentPane}>
                            <Grid container spacing={1}>
                               
                                <Grid item md={6}>
                                        <Property/>
                                </Grid>


                                <Grid item md={6}>
                                        <Property/>
                                </Grid>

                                <Grid item md={6}>
                                        <Property/>
                                </Grid>

                                <Grid item md={6}>
                                        <Property/>
                                </Grid>

                                <Grid item md={6}>
                                        <Property/>
                                </Grid>

                                <Grid item md={6}>
                                        <Property/>
                                </Grid>

                                <Grid item md={6}>
                                        <Property/>
                                </Grid>

                                <Grid item md={6}>
                                        <Property/>
                                </Grid>

                                <Grid item md={6}>
                                        <Property/>
                                </Grid>

                                <Grid item md={6}>
                                        <Property/>
                                </Grid>
                               
                            </Grid>

                           <Typography align="center">
                            <Pagination  className={classes.page} count={10} variant="outlined" color="primary" />
                            </Typography>
                           
                            </Paper>
                        </Grid>

                        <Grid item md={7} >

                                <h1>Maps</h1>
                                 
                                <Location/>                           
                        </Grid>


                    </Grid>
            

            </Grid>
                {/*
            <Grid item md={1}>

            </Grid>
                */}
        </Grid>
            
        
    );
}

export default ContentHolder;