import { Button, Grid, makeStyles, Paper } from '@material-ui/core';
import Axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router';

const useState = makeStyles( (theme) => ({

    root:{
        marginTop:"20px",
        paddingTop:"20px",
        paddingBottom:"10px"
    }

}));

const ButtonsHolder = (props) => {
const navigate = useNavigate();
const onDelete = () => {

    const url =process.env.REACT_APP_BACKEND_URL+"property/delete/"+props.id
    Axios.get(url).then( res => {
            console.log(res.data)
    })
}

const onEdit = () => {

    navigate("/Edit/"+props.id)

}



    const classes = useState();
    return (
        <div className={classes.root}>

            <Grid container alignItems="right" alignContent="right">
                   
                    <Grid alignItems="center" alignContent="center" item sm={4}>
                        <Button onClick={onEdit}  color="secondary" variant="outlined">Edit</Button>
                    </Grid>

                    <Grid item sm={4}>
                        <Button color="secondary" onClick={onDelete} variant="outlined">Delete</Button>
                    </Grid>


            </Grid>
            
            </div>
    );
};

export default ButtonsHolder;