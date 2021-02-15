import React, { useState } from 'react';
import { Grid, Paper,Typography, makeStyles, List,ListItem, ListItemIcon, ListItemText, Button } from '@material-ui/core';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import HotelIcon from '@material-ui/icons/Hotel';
import BathtubIcon from '@material-ui/icons/Bathtub';
import RoomIcon from '@material-ui/icons/Room';
import ScheduleIcon from '@material-ui/icons/Schedule';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Map from "./Map"
import {useSelector} from "react-redux"
import { red } from '@material-ui/core/colors';
import Axios from 'axios';
import UserDetails from './UserDetails';


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

    const isloggedin = useSelector(state => state.login)
    const userId     = useSelector(state => state.userdata)
    const [data,setData] = useState("");
    const [load,setLoad] = useState(false);
    const [userData, setUserData] = useState([]);
     
    const url = process.env.REACT_APP_BACKEND_URL+"property/getById/"+props.id

    if(!load)
    Axios.get(url).then( res => { 
        setData(res.data)
        console.log(res.data)
        const url1 = process.env.REACT_APP_BACKEND_URL+"profile/get/"+res.data.ownerId
        Axios.get(url1).then( res => {
            console.log(res.data)
                setUserData(res.data)
            
        })

        
        setLoad(true)
        
    })

   
    
    
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item sm={1}></Grid>
                <Grid item sm={10}>
                    <Paper className={classes.paper}>
                        <Typography variant="h4" color="textSecondary">{data.titile} <FavoriteIcon color="secondary"/></Typography>
                        <Typography variant="h6" color="secondary">Br {data.price}</Typography>
                      
                        <Grid container>
                            <Grid item sm={6}>
                       <List>
                            <ListItem>
                                <ListItemIcon><FullscreenIcon/></ListItemIcon>
                                <ListItemText>{data.area} square meter</ListItemText>
                            </ListItem>

                            <ListItem>
                                <ListItemIcon><HotelIcon/></ListItemIcon>
                                <ListItemText>{data.no_Of_BedRooms}</ListItemText>
                            </ListItem>

                            <ListItem>
                                <ListItemIcon><BathtubIcon/></ListItemIcon>
                                <ListItemText>{data.no_of_Bathrooms}</ListItemText>
                            </ListItem>

                            <ListItem>
                                <ListItemIcon><RoomIcon/></ListItemIcon>
                                <ListItemText>{data.city}</ListItemText>
                            </ListItem>

                       </List>

                       </Grid>

                       <Grid item sm={6}>
                            <Button variant="contained" color="secondary" disabled>For {data.propertyFor}</Button>

                            <List>
                                <ListItem>
                                    <ListItemIcon><ScheduleIcon/></ListItemIcon>
                                    <ListItemText>{data.date}</ListItemText>
                                </ListItem>
                            </List>
                       </Grid>

                       <Grid item sm={12}>
                           <Typography variant="h5" >Description</Typography>

                           <Typography  variant="body1" color="textSecondary">{data.description}</Typography>
                           
                       </Grid>
                       </Grid>

                    </Paper>

                    

                </Grid>
                <Grid item sm={1}></Grid>
                
            </Grid>

               
            <UserDetails data={userData}/>
        
           
                <Paper elevation={1} className={classes.map}>
                <Map/>
                </Paper>
                
        
            
        </div>
    );
}

export default Description;