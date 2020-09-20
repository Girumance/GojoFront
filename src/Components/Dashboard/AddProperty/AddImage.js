import React from 'react';
import {ADDFILE} from "../../../Actions"
import { useDispatch,useSelector} from "react-redux"
import { ClickAwayListener, Typography, TextField ,Button, Grid} from '@material-ui/core';
import ImageHolder from "./ImageHolder"
function AddImage(props) {
    let img = useSelector( state => state.images)
    let upload =null
    let image=null
const dispatch = useDispatch();
    const Click = ()=>{
        
        
        const file={
            "image":image,
            "upload":upload
        }
    dispatch(ADDFILE(file))
   
    }


    function onFile(e){
        
      image=URL.createObjectURL( e.target.files[0])
    upload =e.target.files[0]

    
      }

   

    return (
        <div>
            <Typography variant="body2">Add Image</Typography>
            <TextField onChange={onFile}  id="image" variant="outlined" type="file"/>
            <Button onClick={Click} color="primary" variant="outlined">Add Image</Button>

            <Grid container spacing={1}>

            {
                    img.map( (res, index) => <ImageHolder key={index} img={res} />)
            }

            </Grid>
        </div>
    );
        }

export default AddImage;