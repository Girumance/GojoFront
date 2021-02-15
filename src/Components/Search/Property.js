import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import HotelOutlinedIcon from '@material-ui/icons/HotelOutlined';
import BathtubOutlinedIcon from '@material-ui/icons/BathtubOutlined';
import { Badge, Grid } from '@material-ui/core';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import {useNavigate} from "react-router-dom"
const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
  media: {
    height: 180,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  const navigate = useNavigate();
  const url=process.env.REACT_APP_BACKEND_URL+"image/downloadProfile/"+props.details.id;
const click= () => {
const path="/Detail/"+props.details.id
navigate(path)
}



  return (
    <Card className={classes.root}>
      <CardActionArea onClick={click}>
        <CardMedia
          className={classes.media}
          image={url}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.details.titile}
          </Typography>

          <Typography gutterBottom variant="h6" color="textSecondary" component="h3">
          Note that the development build
          </Typography>

            <Grid container>
                <Grid item md={6}>
                <Typography variant="h5"  align="left">
                {props.details.price}
          </Typography>
                </Grid>

                <Grid item md={6}>
                <Typography variant="h4" color="textSecondary" component="p" align="right">
           <Badge className="badge" badgeContent={props.details.no_Of_BedRooms} color="secondary"> <HotelOutlinedIcon/> </Badge>
           <Badge badgeContent={props.details.no_of_Bathrooms} color="secondary"> <BathtubOutlinedIcon/> </Badge>
          </Typography>
                </Grid>

            </Grid>

          
          
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="outlined" size="small" color="secondary" startIcon={<CallOutlinedIcon/>}>
          Call
        </Button>
        <Button variant="outlined" size="small" color="secondary" startIcon={<EmailOutlinedIcon/>}>
          Email
        </Button>
      </CardActions>
    </Card>
  );
}