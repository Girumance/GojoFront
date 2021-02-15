<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

>>>>>>> dev
import React, {useState} from 'react';
import { Grid, Typography, TextField,Button,MenuItem,Select, InputLabel } from '@material-ui/core';
import Sidebar from "../Sidebar";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import AddImage from "./AddImage"
import {useSelector, useDispatch} from "react-redux"
import {useParams} from "react-router-dom"
import ImageController from "./ImageController"
import {ADDSNAKBARDATA} from "./../../../Actions/index"
import "../style.css"
import Axios from 'axios';



function EditProperty(props) {

    const userdata =useSelector( state => state.userdata)
    const isLogin = useSelector( state => state.login)
    const dispatch = useDispatch()
    const images = useSelector(state => state.editimage)
    const [radio,setRadio] = React.useState("Sell")
    const [type, setType] = React.useState("All")
    const [load, setLoad] = React.useState(false);
    const {id} = useParams()
    const [data,setData] = useState({});


    const url =process.env.REACT_APP_BACKEND_URL+"property/getById/"+id
    if(!load){
    Axios.get(url).then( res => {
        setData(res.data)
        setLoad(true)
        

    })}
   // const [id, setId] = React.useState("")

  


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
                //"propertyType": type,
                "location": null,
                "city": city,
                "area":area,
                "region": null,
                "description": description,
            
                "titile": title,
                "no_Of_BedRooms": beds,
                "no_of_Bathrooms": bath,
                "amenities": null,
                "propertyFor":radio
            }
            
            const url =process.env.REACT_APP_BACKEND_URL+"property/update/"+id
            
            Axios.post(url,data).then(res => {
                
                const idd=res.data.id;
                    console.log(res.data)
                    const dataa={
                        message:"Property Has Updated!!",
                        type:"success",
                        open:true
                    }
                    dispatch(ADDSNAKBARDATA(dataa))
                
                images.map((result, index) => {
                    onImageUpload(result,idd,index)
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

                        <Typography variant="h5" color="textSecondary" align="center">Update Details</Typography>
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
            key={`${Math.floor((Math.random() * 1000))}-min`}
            defaultValue={data.titile}
            type="text"
            label="Title"
            autoFocus
            />
                    </Grid>


                    <Grid item sm={8}>
                    <TextField
            //autoComplete="Description"
            name="desc"
            variant="outlined"
            required
            fullWidth
            id="desc"
            rows={4}
            multiline
            defaultValue={data.description}
            key={`${Math.floor((Math.random() * 1000))}-min`}
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
          defaultValue={data.propertyType}
          key={`${Math.floor((Math.random() * 1000))}-min`}
          onChange={typeHandler}
        >
          <MenuItem  value="Apartment">Apartment</MenuItem>
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
            key={`${Math.floor((Math.random() * 1000))}-min`}
            defaultValue={data.price}
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
            key={`${Math.floor((Math.random() * 1000))}-min`}
            defaultValue={data.no_Of_BedRooms}
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
            key={`${Math.floor((Math.random() * 1000))}-min`}
            defaultValue={data.no_of_Bathrooms}
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
            key={`${Math.floor((Math.random() * 1000))}-min`}
            defaultValue={data.area}
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
            key={`${Math.floor((Math.random() * 1000))}-min`}
            defaultValue={data.city}
            type="text"
            label="City"
            autoFocus
            />


                    </Grid>
                    <Grid item sm={8}>
                    <FormControl component="fieldset">
      <FormLabel component="legend">For</FormLabel>
      <RadioGroup aria-label="For" name="for" onChange={radioHandler}  >
        <FormControlLabel checked = {(data.propertyFor == "Sell") ? true : false } value="Sell" control={<Radio />} label="Sell" />
        <FormControlLabel checked = {(data.propertyFor == "Rent") ? true : false } value="Rent" control={<Radio />} label="Rent" />
      </RadioGroup>
    </FormControl>

    </Grid>


    <Grid item sm={10}>
        <ImageController id={id} />

    </Grid>
        


    <Grid item sm={10}>
<AddImage/>

</Grid>



<Grid item sm={8}>
<Button onClick={ondAdd} fullWidth variant="contained" color="secondary"> Update Details</Button>

</Grid>

                </Grid>
            </Grid>
        </Grid>
        </Grid>
        </Grid>
        </div>
            
       
    );
}

export default EditProperty;
>>>>>>> dev
