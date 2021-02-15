import React from 'react';
import { Grid, Typography, TextField, Avatar, makeStyles, Button } from '@material-ui/core';
import Sidebar from './Sidebar';
import "./style.css"
import {useSelector} from "react-redux"

const usestyles =makeStyles( theme => ({

    large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
      },

}))

const selector = useSelector;

function profile(props) {
  
    const classes =usestyles()
    const userdata = selector(state => state.userdata)

    


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
                

                <Grid className="content" container direction="column" spacing={3}>

            
                <Grid item sm={10}>
                <Typography color="textSecondary" variant="h5">Acctount and Profile</Typography>
                </Grid>


                <Grid item sm={8}>

<Grid container>

    <Grid item sm={2}>
    <Avatar  className={classes.large}/>
    </Grid>

    <Grid item sm={10}>
                <TextField
            autoComplete="fname"
            name="file"
            variant="outlined"
            required
            fullWidth
            id="file"
            
            type="file"
            autoFocus
            />
    </Grid>

</Grid>


</Grid>

                 
             <Grid item sm={8} >
                        
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                defaultValue={userdata.firstName}
                autoFocus
                
              />
            </Grid>
            <Grid item sm={8}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                defaultValue={userdata.lastName}
              />
            </Grid>
           

                <Grid item  sm={8}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                defaultValue={userdata.email}
              />
              </Grid>

              <Grid item sm={8}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="phone"
                label="Phone Number"
                name="phone"
                autoComplete="phone"
                defaultValue={userdata.phoneNumber}
              />
              </Grid>

              <Grid item sm={8}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="City"
                label="City"
                name="City"
                autoComplete="City"
                defaultValue={userdata.Cityb}
              />
              </Grid>

                <Grid item sm={8}>

                    <Button size="large" color="secondary" fullWidth  variant="contained">Update</Button>

                </Grid>
          

                    </Grid>

                </Grid>
            </Grid>
        </Grid>
        </Grid>
        
        </div>
            
       
    );
}

export default profile;