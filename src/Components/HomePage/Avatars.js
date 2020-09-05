import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import {Avatar} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
  }));

function Avatars(props) {
    const classes = useStyles();
    return (
        <Grid container className="avatar">
            <Grid item md={3}>

            </Grid>

            <Grid item md={6}>
                <Grid container spacing={1} justify="center" alignItems="center" >

                    <Grid item md={4} >
                        <div align="center">
                        <Avatar  className={classes.large} src={require("./images/keychain.svg")}/>
                        </div>
                        <Typography align="center" variant="h6">Your rental, your way</Typography>
                        <Typography align="center" variant="body2" color="textSecondary">Set your price, dates, rules, and more. We give you the tools to make sure you’re in control.</Typography>
                        
                    </Grid>

                    <Grid item md={4}>

                    <div align="center">
                        <Avatar  className={classes.large} src={require("./images/millions-of-travlers.svg")}/>
                        </div>
                        <Typography align="center" variant="h6">Millions of travellers.</Typography>
                        <Typography align="center" variant="body2" color="textSecondary">Put your home in front of a global network of travellers looking for the perfect match.</Typography>
                        

                    </Grid>

                    <Grid item md={4}> 

                    <div align="center">
                        <Avatar  className={classes.large} src={require("./images/shield.svg")}/>
                        </div>
                        <Typography align="center" variant="h6">We’re here for you, 24/7</Typography>
                        <Typography align="center" variant="body2" color="textSecondary">A dedicated support team is ready around the clock to make sure that everything runs smoothly.</Typography>
                        


                    </Grid>
                </Grid>

            </Grid>

            <Grid item md={3}>

            </Grid>
<hr/>
        </Grid>

            
    
    );
}

export default Avatars;