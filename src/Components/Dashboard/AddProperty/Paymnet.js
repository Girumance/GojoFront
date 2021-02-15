import { Button, Grid, Paper, TextField, makeStyles, Typography } from '@material-ui/core';
import Axios from 'axios';
import {useDispatch} from "react-redux"
import {ADDSNAKBARDATA} from "./../../../Actions"

import React from 'react';
const useStyles = makeStyles((theme) => ({
    root: {
      padding:50,      
    },
    
  }));
const Paymnet = (props) => {
    const dispatch = useDispatch()
    
        
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
                let message="";
                let type=""

                switch(res.data){

                    case 1:
                        message="You have payed 400 birr succesfully!"
                        type="success"
                        break;
                    case -1:
                        message="You have insufficient money!"
                        type="error" 
                        break;
                        
                     case 0:
                         message="Check your phone number and password!"
                         type="error"   
                }

                const dataa={
                    message,
                    type,
                    open:true
                }
                dispatch(ADDSNAKBARDATA(dataa))
        }
        
        )

}

    const css = useStyles();

    return (

        <div className={css.root} >
        <Grid container direction="column" spacing={3}>
            <Grid item sm={12}>
                <Typography variant="h2" align="center" color="secondary">Payment Terms And Conditions:</Typography>
                <Typography variant="h5" align="center" color="secondary">when you post your property 400.00 ETB(ETHIOPIAN BIRR) will be debited from your account!</Typography>
            </Grid>
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
                <Button onClick={onPay} color="secondary" variant="outlined" fullWidth >Pay</Button>
            </Grid>

        </Grid>
        
        </div>   
        
    );
};

export default Paymnet;