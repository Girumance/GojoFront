import React from 'react';
import {Grid, Typography, Badge, makeStyles} from "@material-ui/core"
const useStyles= makeStyles({
    image:{
        marginRight:"40px"
    },
    root:{
        marginTop:"5vh"
    }

})

function Howthisworks() {

    const classes = useStyles();
    return (
        <Grid container className={classes.root}>

            <Grid item md={3}>

            </Grid>

            <Grid item md={6}>

                <Grid container justify="center" alignItems="center" >
                    <Grid md={6}>
                       <img alt="House" className={classes.image} src={require("./images/how-this-works.svg")}/> 
                    </Grid>

                    <Grid md={6}>

                        <Grid container direction="column" spacing={4}>
                                <Grid item>
                                    <Typography  variant="h4">How this works</Typography>

                                </Grid>
                            <Grid item >
                            <Badge badgeContent={1} color="primary"><Typography variant="h5"> Set up your property</Typography> </Badge>
<Typography variant="body1" color="textSecondary">Explain what's unique, show off with photos, and set the right pric</Typography>
                            </Grid>

                            <Grid item>
                            <Badge badgeContent={2} color="primary"> <Typography variant="h5">Start earning</Typography> </Badge>
                            <Typography variant="body1" color="textSecondary">We’ll help you collect payment, deduct a commission, and send you the balance</Typography>
                            </Grid>

                    <Grid item>
                    <Badge badgeContent={3} color="primary"> <Typography variant="h5">Get the perfect match</Typography></Badge>
                    <Typography variant="body1" color="textSecondary">We’ll connect you with travellers from home and abroad</Typography>
                    </Grid>

                        </Grid>

                    </Grid>

                </Grid>

            </Grid>

            <Grid item md={3}>

            </Grid>


        </Grid>
            
    
    );
}

export default Howthisworks;