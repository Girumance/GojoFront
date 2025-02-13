import React, { useState } from 'react';
import { Grid, Paper,makeStyles } from '@material-ui/core';
import Property from "./Property"
import Location from "./../Map/Location"
import {Pagination} from "@material-ui/lab"
import { Typography } from '@material-ui/core';
import Axios from "axios"
import {AddSearch} from "./../../Actions"
import {AddLoad} from "./../../Actions"
import { useSelector, useDispatch} from "react-redux"
const useStyles =makeStyles({

    contentPane:{
        padding:"20px",
        height:"100vh",
        overflow:"auto"
    },

    page:{
        marginTop:30,
        alignContent:"center",
        alignItems:"center"
    }


})
function ContentHolder(props) {

    const search=useSelector(state => state.search)
    const dispatch= useDispatch();

        

        const [data, setData]= useState([]);
        const [dataloaded,setDataloaded] = useState(false);

        const load = (data) => {

            const url =process.env.REACT_APP_BACKEND_URL+"property/filter"
            Axios.post(url,data).then( res => {
                    setData(res.data)
                    setDataloaded(true)
                    console.log(search)
                    console.log(res.data)
                   
                    
            })

        }


        if(dataloaded===false){
            const url =process.env.REACT_APP_BACKEND_URL+"property/city/"+props.city
            Axios.get(url).then( res => {
                    setData(res.data)
                    setDataloaded(true)
                    dispatch(AddLoad(load))
                    console.log("hello from the world")
                   
                    
            })
        }

               /* if(search!=="none"){
                const url =process.env.REACT_APP_BACKEND_URL+"property/city/Bishoftu"
                Axios.get(url).then( res => {
                        setData(res.data)
                        dispatch(AddSearch("none"))
                })}*/
        

        
    const classes = useStyles();
    
    
    
    return (
        
        <Grid  container>
            <Grid item md={1}>

            </Grid>

            <Grid item md={10}>
               
                    <Grid  container spacing={2}>

                        <Grid item md={7} >
                            <h1>Contents</h1>
                            <Paper className={classes.contentPane}>
                            <Grid  container spacing={2}>
                               {
                               data.map( (res,index) => <Grid key={index} item md={6}>
                                        <Property details={res}/>
                                                        </Grid>
                               )}
                               
                            </Grid>

                           <Typography align="center">
                            
                            </Typography>
                           
                            </Paper>
                        </Grid>

                        <Grid item md={5} >

                                <h1>Maps</h1>
                                 
                                <Location/>                           
                        </Grid>


                    </Grid>
            

            </Grid>
                {/*
            <Grid item md={1}>

            </Grid>
                */}
        </Grid>
            
        
    );
}

export default ContentHolder;