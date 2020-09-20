import React from 'react';
import { Grid, Typography, TextField,Button } from '@material-ui/core';
import Sidebar from "../Sidebar";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import AddImage from "./AddImage"
import "../style.css"

function Messages(props) {
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
      <RadioGroup aria-label="For" name="for"  >
        <FormControlLabel value="Sell" control={<Radio />} label="Sell" />
        <FormControlLabel value="Rent" control={<Radio />} label="Rent" />
      </RadioGroup>
    </FormControl>

    </Grid>
    <Grid item sm={10}>
<AddImage/>

</Grid>

<Grid item sm={8}>
<Button fullWidth variant="contained" color="primary"> Add</Button>
</Grid>

                </Grid>
            </Grid>
        </Grid>
        </Grid>
        </Grid>
        </div>
            
       
    );
}

export default Messages;