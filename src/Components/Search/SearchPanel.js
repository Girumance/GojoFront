import React from "react"
import { Paper, Grid, InputAdornment } from "@material-ui/core";
import {Autocomplete} from "@material-ui/lab"
import {TextField,Button} from "@material-ui/core"
import AddLocationOutlinedIcon from '@material-ui/icons/AddLocationOutlined';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {useDispatch, useSelector} from "react-redux"
import {AddSearch} from "./../../Actions"
import {useNavigate} from "react-router-dom"
import "./Search.css"
import { useState } from "react";

const top100Films = [
    { title: 'Addis Ababa'},
    { title: 'Mekelle'},
    { title: 'Gondar'},
    { title: 'Adama' },
    { title: 'Hawassa' },
    { title: "Bahir Dar" },
    { title: 'Dire Dawa' },
    { title: 'Sodo' },
    { title: 'Dessie' },
    { title: 'Jimma' },
    { title: 'Jijiga'},
    { title: 'Shashamane' },
    { title: 'Bishoftu' },
  
  ];

function SearchPanel(props){

  const dispatch= useDispatch();
  const navigate =useNavigate()

  const select = useSelector( state => state.load)
  const [minPrice, setminprice] = React.useState("0");
  const [maxPrice, setMaxPrice] = React.useState("100000000");
  const [beds,setBeds] = React.useState("0");
  const [type, setType] = React.useState("All")
  const [propFor, setPropFor] = React.useState("All")
  

  const handleMinprice = (event) => {

    setminprice(event.target.value)
    console.log(event.target.value)

  }

  const handleFor = (event) => {

    setPropFor(event.target.value)
    
  }

  const handleMaxprice = (event) => {

    setMaxPrice(event.target.value)
  
  }

  const handleBeds = (event) => {

    setBeds(event.target.value)
    
  }

  const handleType = (event) => {

    setType(event.target.value)
    
  }

  


  

   const   onSearch= () =>{

          const search = document.getElementById("search").value;
          console.log(search)

          const data={
            min:minPrice,
            max:maxPrice,
            beds:beds,
            propertyFor:propFor,
            type:type,
            city:search,
            propertyType:type

          }

          
          
          dispatch(AddSearch(search));
          const path="/search/"+search;
          select(data);
 // navigate(path)
      }

        return(
            
            <Paper className="searchbox" elevation={5}>
                <Grid container>

                    <Grid item xs={12} md={1}>

                    </Grid>

                    <Grid item xs={12} md={10}>

                    <Grid container spacing={1} justify="center" alignItems="center">
<Grid item md={1} xs={12}>
<FormControl variant="outlined" className="selectwidth">
<InputLabel id="demo-simple-select-outlined-label">For</InputLabel>
<Select
labelId="demo-simple-select-outlined-label"
id="demo-simple-select-outlined"
label="For"
onChange={handleFor}
>
<MenuItem value="All">
<em>All</em>
</MenuItem>
<MenuItem value="Rent">Rent</MenuItem>
<MenuItem value="Sell">Buy</MenuItem>
</Select>
</FormControl>

</Grid>

                        <Grid xs={12} item md={5}>
                        <Autocomplete
        freeSolo
        id="search"
        disableClearable
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
          
            color="secondary"
            {...params}
            label="Search Location..."
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: 'search',startAdornment: (
              <InputAdornment position="start">
                <AddLocationOutlinedIcon/>
            </InputAdornment>
            ), }}
            /*InputProps={{
              
            }}*/

          />
        )}
      />
                        </Grid>

                        <Grid item xs={12} md={1}>

                        <FormControl variant="outlined" className="selectwidth">
        <InputLabel id="demo-simple-select-outlined-label">Min Price</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          label="Min Price"
          onChange={handleMinprice}
        >
          <MenuItem value="0">
            <em>None</em>
          </MenuItem>
          <MenuItem value="1000"> 1000 </MenuItem>
          <MenuItem value="10000"> 10,000 </MenuItem>
          <MenuItem value="100000"> 100,000 </MenuItem>
        </Select>
      </FormControl>

                        </Grid>

                        <Grid xs={12} item md={1}>

                        <FormControl variant="outlined" className="selectwidth">
        <InputLabel id="demo-simple-select-outlined-label">Max Price</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          label="Max Price"
          onChange={handleMaxprice}
        >
          <MenuItem value={100000000}>
            <em>None</em>
          </MenuItem>
          <MenuItem value={1000}>1000</MenuItem>
          <MenuItem value={10000}>10,000</MenuItem>
          <MenuItem value={10000000}>100,000</MenuItem>
        </Select>
      </FormControl>

                        </Grid>

                        <Grid xs={12} item md={1}>

                        <FormControl variant="outlined" className="selectwidth">
        <InputLabel id="demo-simple-select-outlined-label">Beds</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          label="Beds"
          onChange={handleBeds}
        >


          <MenuItem value="0">
            <em>All</em>
          </MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={8}>8</MenuItem>
        </Select>
      </FormControl>

                        </Grid>

                        <Grid xs={12} item md={2}>

<FormControl variant="outlined" className="selectwidth">
<InputLabel id="demo-simple-select-outlined-label">Property Type</InputLabel>
<Select
labelId="demo-simple-select-outlined-label"
id="demo-simple-select-outlined"
label="Property Type"
onChange={handleType}
>
<MenuItem value="All">
<em>All</em>
</MenuItem>
<MenuItem value="Apartment">Apartment</MenuItem>
<MenuItem value="Villa">Villa</MenuItem>
<MenuItem value="Studio">Studio</MenuItem>
</Select>
</FormControl>

</Grid>

                     <Grid item xs={12} md={1}>
                     <Button onClick={onSearch} size="large" color="secondary" variant='outlined'>Search</Button>
                       </Grid>   


                    </Grid>


                    
                    </Grid>

                    <Grid xs={12} item md={1}>
                   
                    </Grid>

                </Grid>
            </Paper>
            
        );            
}

export default SearchPanel;