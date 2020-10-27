import React from 'react';
import PicDIsplay from './PicDIsplay';
import { Grid, makeStyles } from '@material-ui/core';
import RequestDetails from './RequestDetails';
import Description from './Description';
import {useParams} from "react-router-dom"
const useStyles = makeStyles({
    root:{
        marginTop:"7vh;"
    }
})


function Index(props) {
const {id} = useParams()

    const classes=useStyles()
    return (
       <Grid container className={classes.root}>

           <Grid item sm={1}>

           </Grid>

           <Grid item sm={10}>

               <Grid container spacing={2}>

                   <Grid item sm={9}>
                    <PicDIsplay id={id}/>
                    <Description id={id}/>
                   </Grid>

                   <Grid item sm={3 }> 
                        <RequestDetails id={id}/>
                   </Grid>

               </Grid>

           </Grid>


           <Grid item sm={1}>

           </Grid>

       </Grid>
    );
}

export default Index;