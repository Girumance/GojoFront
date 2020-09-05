import React, { Component } from 'react';
import { Grid, Paper } from '@material-ui/core';
import ImageCard from './ImageCard';
import "./Details.css"
class PicDIsplay extends Component {
    render() {
        return (
            <Grid container direction="column" spacing={3}>
                
                <Grid item sm={12}>
                
                <Paper elevation={3}>
                    
                <img className="mainPic" src={require("./back.jpg")} />
            
                

                </Paper>

                </Grid>

                <Grid item sm={12}>
                    <Grid container spacing={1}>
                         <Grid item xs={12} sm={2}>
                            <ImageCard/>
                         </Grid>

                         <Grid item sm={2}>
                            <ImageCard/>
                         </Grid>

                         <Grid item sm={2}>
                            <ImageCard/>
                         </Grid>

                         <Grid item sm={2}>
                            <ImageCard/>
                         </Grid>
                         <Grid item sm={2}>
                            <ImageCard/>
                         </Grid>

                         <Grid item sm={2}>
                            <ImageCard/>
                         </Grid>

                    </Grid>
                </Grid>

                
            </Grid>
        );
    }
}

export default PicDIsplay;