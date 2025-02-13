import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useDispatch} from "react-redux"
import {Login, Adduserdata,SignIn} from "./../Actions"
import {ADDSNAKBARDATA} from "./../Actions"
import Axios from "axios"

function Copyright() {

  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        GojoHomes.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIN(props) {
  const classes = useStyles();
  const dispatch =useDispatch();
  const [Close] = useState(props)
 
    
  
  const getInput = () => {

    const email = document.getElementById("email").value;
    const password=document.getElementById("password").value;

    const data = {

      username:email,
      password:password
    }

    

    signin(data);
  }

  const signin = (data) => {

    const backurl=process.env.REACT_APP_BACKEND_URL+"login"
    Axios.post(backurl,data).then( res => {

      

      if(res.data.type=="USER"){

        let message="";
        let type="";
            message="Wellcome back "+res.data.firstName+"!"
            type="success"
            dispatch(Login())
            dispatch(Adduserdata(res.data))
            localStorage.setItem("username",data.username)
            localStorage.setItem("password",data.password)
            Close.onClose();
            const dataa={
              message,
              type,
              open:true
          }
        
            dispatch(ADDSNAKBARDATA(dataa))
        
               
    }

    else{
      let message="";
      let type="";

      message="Username And Password Doesn't Match!!"
      type="error"

            const dataa={
              message,
              type,
              open:true
          }
        
            dispatch(ADDSNAKBARDATA(dataa))
        

            

    }

    
    

    
     
      
    }).catch(res => {
      let message="";
      let type="";
      message="Username And Password Doesn't Match!!"
      type="error"

            const dataa={
              message,
              type,
              open:true
          }
        
            dispatch(ADDSNAKBARDATA(dataa))
    })

    

  }

  

  
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={getInput}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}