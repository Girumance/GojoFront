import { Button, Grid, Paper, TextField, makeStyles } from '@material-ui/core';
import Axios from 'axios';

import React from 'react';
const useStyles = makeStyles((theme) => ({
    root: {
      padding:50,      
    },
    
  }));
const Paymnet = (props) => {

    
        
const onPay = () => {

    const phoneNumber = document.getElementById("phoneNumber").value;
    const password= document.getElementById("password").value;

    const data ={
        phoneNumber,
        password,
        payment:400,
        id:props.id
    }
    
    const url = process.env.REACT_APP_BACKEND_URL+"bank/pay"
    Axios.post(url, data ).then( res => 
        {
            console.log(res.data)
        }
        
        )

}

    const css = useStyles();

    return (

        <div className={css.root} >
        <Grid container direction="column" spacing={3}>

            <Grid item sm={12}>
            <TextField
            autoComplete="PhoneNumber"
            name="PhoneNumber"
            variant="outlined"
            required
            fullWidth
            id="phoneNumber"
            
            type="phone"
            label="Phone Number"
            autoFocus
            />
            </Grid>

            <Grid item sm={12}>

            <TextField
            autoComplete="Password"
            name="Password"
            variant="outlined"
            required
            fullWidth
            id="password"
            
            type="password"
            label="Password"
            autoFocus
            />

            </Grid>

            <Grid item sm={12}>
                <Button onClick={onPay} variant="contained" fullWidth >Pay</Button>
            </Grid>

        </Grid>
        
        </div>   
        
    );
};

export default Paymnet;