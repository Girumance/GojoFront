import React from 'react';
import { Paper,Grid, TextField, Button, Typography } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import SendIcon from '@material-ui/icons/Send';
import "./Details.css"
import Axios from 'axios';
function RequestDetails(props) {


   const onSend=()=>{
    const fname =  document.getElementById("fName").value
    const lastname=document.getElementById("lastName").value
    const email = document.getElementById("email").value
    const phone = document.getElementById("phone").value
    const message = document.getElementById("message").value
    const propertyId= props.id


    const data={
        firstName:fname,
        lastName:lastname,
        email:email,
        phone:phone,
        message:message,
        propertyId:propertyId
    }
    
    const url=process.env.REACT_APP_BACKEND_URL+"message/save"
    Axios.post(url,data).then(res => {
        console.log(res.data)
    })

        
    }


    
        return (
           
                <Paper elevation={4}>
                 <div className="Form">
                <Grid container direction="column" spacing={2}>

                <Grid item sm={12}>

                    <Typography variant="h4" align="center">Contact Property Owner</Typography>
                </Grid>

                <Grid item sm={12}>
                   <Button startIcon={<PhoneIcon/>}  variant="outline" color="secondary" fullWidth={true}>GoJO Homes</Button>
                    </Grid>

            <Grid item sm={12}>
                    <Grid container spacing={1}>

                        <Grid item sm={6}>
                                <TextField id="fName" variant="outlined" label="First Name" fullWidth={true}/>
                        </Grid>

                        <Grid item sm={6}>
                        <TextField id="lastName" fullWidth={true} variant="outlined" label="Last Name"/>
                        </Grid>

                    </Grid>
                    </Grid>

                    <Grid item sm={12}>
                    <Grid container spacing={1}>

                        <Grid item sm={6}>
                                <TextField id="email" fullWidth={true} variant="outlined" label="Email"/>
                        </Grid>

                        <Grid item sm={6}>
                        <TextField id="phone" fullWidth={true} variant="outlined" label="Phone Number"/>
                        </Grid>

                    </Grid>
                    </Grid>

                    <Grid item sm={12}>
                    <TextField id="message" rows={4} rowsMax={4} fullWidth={true} variant="outlined" label="Message" multiline="true"/>
                    </Grid>
                    

                    <Grid item sm={12}>
                   <Button startIcon={<SendIcon/>} onClick={onSend} variant="outlined" color="secondary" fullWidth={true}>Send Message</Button>
                    </Grid>

                    

                </Grid>
                </div>

                </Paper>
            
        );
    }

export default RequestDetails;