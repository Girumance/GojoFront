import React, { Component, useState } from 'react';
import { Grid, Paper } from '@material-ui/core';
import ImageCard from './ImageCard';
import "./Details.css"
import Axios from 'axios';
import { render } from '@testing-library/react';
class PicDIsplay extends Component {
    constructor(props){
        super(props)

        this.state={
            images:[]
        }
        const imageUrl=process.env.REACT_APP_BACKEND_URL+"image/allimages/5f7005e86ab4f20e8463b1f8"

        Axios.get(imageUrl).then( res => {
      
            this.setState({
                images:res.data
            })
         })
    }

   
          render(){
        
       const url=process.env.REACT_APP_BACKEND_URL+"image/downloadProfile/5f7005e86ab4f20e8463b1f8"
        return (
            <Grid container direction="column" spacing={3}>
                
                <Grid item sm={12}>
                
                <Paper elevation={3}>


                    
                <img alt="Main pic" className="mainPic" src={url} />
            
                

                </Paper>

                </Grid>

                <Grid item sm={12}>
                    <Grid container spacing={1}>
                        
                        {
                        this.state.images.map( (res, index) =>
                         <Grid index={index} item xs={12} sm={2}>
                            <ImageCard data={res}/>
                         </Grid>
                        )}
                        

                    </Grid>
                </Grid>

                
            </Grid>
        );
    }
}


export default PicDIsplay;