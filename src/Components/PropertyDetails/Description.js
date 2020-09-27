import React from 'react';
import { Grid, Paper,Typography, makeStyles, List,ListItem, ListItemIcon, ListItemText, Button } from '@material-ui/core';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import HotelIcon from '@material-ui/icons/Hotel';
import BathtubIcon from '@material-ui/icons/Bathtub';
import RoomIcon from '@material-ui/icons/Room';
import ScheduleIcon from '@material-ui/icons/Schedule';
import Map from "./Map"

const useStyles=makeStyles({
    root:{
        marginTop:"15px"
    },

    paper:{
        padding:"30px;"
    },
    map:{
        margin:"30px; "
    }

})

function Description(props) {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item sm={1}></Grid>
                <Grid item sm={10}>
                    <Paper className={classes.paper}>
                        <Typography variant="h4" color="textSecondary">Home</Typography>
                        <Typography variant="h6" color="secondary">Br 2,500,000</Typography>
                        <Grid container>
                            <Grid item sm={6}>
                       <List>
                            <ListItem>
                                <ListItemIcon><FullscreenIcon/></ListItemIcon>
                                <ListItemText>2500square meter</ListItemText>
                            </ListItem>

                            <ListItem>
                                <ListItemIcon><HotelIcon/></ListItemIcon>
                                <ListItemText>3</ListItemText>
                            </ListItem>

                            <ListItem>
                                <ListItemIcon><BathtubIcon/></ListItemIcon>
                                <ListItemText>2</ListItemText>
                            </ListItem>

                            <ListItem>
                                <ListItemIcon><RoomIcon/></ListItemIcon>
                                <ListItemText>Bishoftu</ListItemText>
                            </ListItem>

                       </List>

                       </Grid>

                       <Grid item sm={6}>
                            <Button variant="contained" color="secondary" disabled>For sale</Button>

                            <List>
                                <ListItem>
                                    <ListItemIcon><ScheduleIcon/></ListItemIcon>
                                    <ListItemText>2020-05-01</ListItemText>
                                </ListItem>
                            </List>
                       </Grid>

                       <Grid item sm={12}>
                           <Typography variant="h5" >Description</Typography>

                           <Typography variant="body1" color="textSecondary">WE VALUE YOUR SAFETY ABOVE EVERYTHING. NEVER PAY MONEY BEFORE VIEWING A PROPERTY, PLEASE REPORT ANY USER REQUESTING UPFRONT PAYMENT USING THE REPORT ABUSE BUTTON ON THIS PAGE. FOR MORE TOP TIPS ON KEEPING SAFE, SEE OUR SAFETY PAGES.</Typography>

                       </Grid>
                       </Grid>

                    </Paper>


                </Grid>
                <Grid item sm={1}></Grid>

            </Grid>
           
                <Paper elevation={1} className={classes.map}>
                <Map/>
                </Paper>
                
        
            
        </div>
    );
}

export default Description;