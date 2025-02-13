import React,{useState} from 'react';
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
import Axios from 'axios';
import {ADDSNAKBARDATA} from "./../Actions"
import {useDispatch} from "react-redux" 


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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp(props) {
  const classes = useStyles();
  const dispatch = useDispatch()
  const [Close] = useState(props)


  const onSubmit = ()=>{
    const fname=document.getElementById("firstName").value
    const lname=document.getElementById("lastName").value
    const email=document.getElementById("email").value
    const phone=document.getElementById("phone").value
    const password=document.getElementById("password").value
    const cpassword=document.getElementById("confirmpassword").value
    if( password.length > 0){
    if(password===cpassword ){
        
      let data={
        "firstName":fname,
        "lastName":lname,
        "email":email,
        "phoneNumber":phone,
        "password":password,
        "accountType":"USER",   
        }

        
        const backurl=process.env.REACT_APP_BACKEND_URL+"profile/signup"
        

       
       Axios.post(backurl,data).then( res =>{
        let message="";
        let type="";
  
        message="User Has Registered!"
        type="success"
  
              const dataa={
                message,
                type,
                open:true
            }
          
            dispatch(ADDSNAKBARDATA(dataa))
            Close.onClose();
       })

    }
    else{
      let message="";
      let type="";

      message="Password and Confirm Pawssword Must Match!!"
      type="error"

            const dataa={
              message,
              type,
              open:true
          }
        
          dispatch(ADDSNAKBARDATA(dataa))

    }

  }else{

    let message="";
      let type="";

      message="Password And Confirm Password Should Not Be Empty!"
      type="error"

            const dataa={
              message,
              type,
              open:true
          }
        
          dispatch(ADDSNAKBARDATA(dataa))

  }


}



  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>

              <Grid container spacing={2}>

                <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
              </Grid>

              <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="phone"
                label="Phone Number"
                name="phone"
                autoComplete="phone"
              />
              </Grid>

</Grid>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="confirmpassword"
                label="Confirm Password"
                type="password"
                id="confirmpassword"
                autoComplete="current-password"
              />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            onClick={onSubmit}
            
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}