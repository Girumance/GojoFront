import React from "react"
import "./homepage.css"
import {TextField, Grid, Button, Paper,InputAdornment} from "@material-ui/core"
import {Autocomplete} from "@material-ui/lab"
import SearchIcon from '@material-ui/icons/Search';
import AddLocationOutlinedIcon from '@material-ui/icons/AddLocationOutlined';
import {useNavigate} from "react-router-dom"

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

export default function  Body (){

  const navigate =useNavigate()


 const onSearch = ()=> {
    const searchResulut =document.getElementById("search").value

    const path="/search/"+searchResulut;
  navigate(path)

  }

  


        return(
            <Grid container xs={12} className="body" direction="row" justify="center" alignItems="center">
            
            <Grid item xs={3}>

            </Grid>


            <Grid container xs={6} >
              <Paper className="inputBorad" elevation={5}>

            
                <Grid xs={12}>
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

      <Grid xs={2}>
      <Button onClick={onSearch} startIcon={<SearchIcon/>} variant="contained" color="secondary" size="large">Search</Button>
      </Grid>
      </Paper>
            </Grid>


            <Grid item xs={3}>

            </Grid>



                   

           
            </Grid>


        );
    
}