import React, { Component } from 'react';
import { Paper,Grid, TextField, Button, Typography } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SendIcon from '@material-ui/icons/Send';
import "./Details.css"
class RequestDetails extends Component {
    render() {
        return (
           
                <Paper elevation={4}>
                 <div className="Form">
                <Grid container direction="column" spacing={2}>

                <Grid item sm={12}>

                    <Typography variant="h4" align="center">Contact Property Owner</Typography>
                </Grid>

                <Grid item sm={12}>
                   <Button startIcon={<PhoneIcon/>}  variant="contained" color="primary" fullWidth={true}>+251921064879</Button>
                    </Grid>

            <Grid item sm={12}>
                    <Grid container spacing={1}>

                        <Grid item sm={6}>
                                <TextField variant="outlined" label="First Name" fullWidth={true}/>
                        </Grid>

                        <Grid item sm={6}>
                        <TextField fullWidth={true} variant="outlined" label="Last Name"/>
                        </Grid>

                    </Grid>
                    </Grid>

                    <Grid item sm={12}>
                    <Grid container spacing={1}>

                        <Grid item sm={6}>
                                <TextField fullWidth={true} variant="outlined" label="Email"/>
                        </Grid>

                        <Grid item sm={6}>
                        <TextField fullWidth={true} variant="outlined" label="Phone Number"/>
                        </Grid>

                    </Grid>
                    </Grid>

                    <Grid item sm={12}>
                    <TextField rows={4} rowsMax={4} fullWidth={true} variant="outlined" label="Message" multiline="true"/>
                    </Grid>
                    

                    <Grid item sm={12}>
                   <Button startIcon={<SendIcon/>} variant="outlined" color="primary" fullWidth={true}>Send Message</Button>
                    </Grid>

                    <Grid item sm={12}>
                   <Button startIcon={<FavoriteIcon/>} variant="contained" color="secondary" fullWidth={true}>Add to Favorite</Button>
                    </Grid>

                </Grid>
                </div>

                </Paper>
            
        );
    }
}

export default RequestDetails;