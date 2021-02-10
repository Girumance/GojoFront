import React from 'react';
import { Grid, Typography, TextField,Button,MenuItem,Select, InputLabel } from '@material-ui/core';
import Sidebar from "../Sidebar";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import AddImage from "./AddImage"
import {useSelector} from "react-redux"

import "../style.css"
import Axios from 'axios';

function AddProperty(props) {

    const userdata =useSelector( state => state.userdata)
    const isLogin = useSelector( state => state.login)
    const images = useSelector(state => state.images)
    const [radio,setRadio] = React.useState("Sell")
    const [type, setType] = React.useState("All")

   function onImageUpload(result,id,index){
       let profile = index==0 ? true : false;
    const urli=process.env.REACT_APP_BACKEND_URL+"image/upload/"+id+"/"+profile;
    const formData=new FormData();
    formData.append("photo",result.upload,result.upload.name)
    Axios.post(urli,formData).then(resl=>{
        console.log(resl)
    })
      }

      const radioHandler = (event) =>{
          setRadio(event.target.value);

          
      }

      const typeHandler = (event) =>{
        setType(event.target.value);
        

        
    }


      const  ondAdd= ()=>{

        const title=document.getElementById("title").value
        const price=document.getElementById("price").value
        const beds=document.getElementById("beds").value
        const bath=document.getElementById("bath").value
        const area=document.getElementById("area").value
        const description=document.getElementById("desc").value
        const city=document.getElementById("city").value
        

        

        if(isLogin){
            const data={
                "price": price,
                "propertyType": type,
                "location": null,
                "city": city,
                "area":area,
                "region": null,
                "description": description,
                "ownerId": userdata.Id,
                "titile": title,
                "no_Of_BedRooms": beds,
                "no_of_Bathrooms": bath,
                "amenities": null,
                "propertyFor":radio
            }

            const url =process.env.REACT_APP_BACKEND_URL+"property/save"
            Axios.post(url,data).then(res => {
                console.log(res)
                const id=res.data.id;
                images.map((result, index) => {
                    onImageUpload(result,id,index)
                })
            })
        }
        else{
            console.log("Log in plzzzz")
        }


        
        


        }



    return (

        <div className="root">
            <Grid container>
                <Grid item sm={2}>
                </Grid >

                <Grid item sm={8}>
        <Grid  container spacing={1}>
            <Grid item sm={3}>
                <Sidebar/>
            </Grid>


            <Grid item sm={9}> 
                <Grid container direction="column" spacing={3}>

                    <Grid item sm={10}>

                        <Typography variant="h5" color="textSecondary" align="center">Add Details</Typography>
                        <Typography variant="h6" color="textSecondary" align="center">Fill in all the necessary info that will make your property interesting and unique.</Typography>

                    </Grid>

                    <Grid item sm={8}>
                    <TextField
            autoComplete="title"
            name="title"
            variant="outlined"
            required
            fullWidth
            id="title"
            
            type="text"
            label="Title"
            autoFocus
            />
                    </Grid>


                    <Grid item sm={8}>
                    <TextField
            autoComplete="Description"
            name="desc"
            variant="outlined"
            required
            fullWidth
            id="desc"
            rows={4}
            multiline
            
            type="text"
            label="Description"
            autoFocus
            />
                    </Grid>

                    <Grid item sm={8}>
                    <FormControl variant="outlined" className="selectwidth">
        <InputLabel id="demo-simple-select-outlined-label">Property Type</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          label="Property Type"
          onChange={typeHandler}
        >


          <MenuItem value="Apartment">Apartment</MenuItem>
          <MenuItem value="Villa">Villa</MenuItem>
          <MenuItem value="Land">Land</MenuItem>
        </Select>
      </FormControl>
                    </Grid>

                    <Grid item sm={8}>
                    <TextField
            autoComplete="price"
            name="price"
            variant="outlined"
            required
            fullWidth
            id="price"
            
            type="text"
            label="Price in birr"
            autoFocus
            />
                    </Grid>

                    <Grid item sm={8}>
                    <TextField
            autoComplete="beds"
            name="beds"
            variant="outlined"
            required
            fullWidth
            id="beds"
    
            type="number"
            label="No of Beds"
            autoFocus
            />
                    </Grid>


                    <Grid item sm={8}>
                    <TextField
            autoComplete="bath"
            name="bath"
            variant="outlined"
            required
            fullWidth
            id="bath"
            
            type="number"
            label="No of Bathrooms"
            autoFocus
            />
                    </Grid>

                    <Grid item sm={8}>
                    <TextField
            autoComplete="area"
            name="area"
            variant="outlined"
            required
            fullWidth
            id="area"
            
            type="number"
            label="Square feet"
            autoFocus
            />
                    </Grid>


                    <Grid item sm={8}>
                    <TextField
            autoComplete="city"
            name="city"
            variant="outlined"
            required
            fullWidth
            id="city"
            
            type="text"
            label="City"
            autoFocus
            />
                    </Grid>
                    <Grid item sm={8}>
                    <FormControl component="fieldset">
      <FormLabel component="legend">For</FormLabel>
      <RadioGroup aria-label="For" name="for" onChange={radioHandler}  >
        <FormControlLabel value="Sell" control={<Radio />} label="Sell" />
        <FormControlLabel value="Rent" control={<Radio />} label="Rent" />
      </RadioGroup>
    </FormControl>

    </Grid>
    <Grid item sm={10}>
<AddImage/>

</Grid>

<Grid item sm={8}>
<Button onClick={ondAdd} fullWidth variant="contained" color="secondary"> Add Property</Button>
</Grid>

                </Grid>
            </Grid>
        </Grid>
        </Grid>
        </Grid>
        </div>
            
       
    );
}

export default AddProperty;