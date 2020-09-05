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

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={require("./../HomePage/images/back.jpg")}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>

          <Typography gutterBottom variant="h6" color="textSecondary" component="h3">
          Note that the development build
          </Typography>

            <Grid container>
                <Grid item md={6}>
                <Typography variant="h5"  align="left">
                2300Birr
          </Typography>
                </Grid>

                <Grid item md={6}>
                <Typography variant="h4" color="textSecondary" component="p" align="right">
           <Badge className="badge" badgeContent={2} color="primary"> <HotelOutlinedIcon/> </Badge>
           <Badge badgeContent={2} color="primary"> <BathtubOutlinedIcon/> </Badge>
          </Typography>
                </Grid>

            </Grid>

          
          
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="outlined" size="small" color="primary" startIcon={<CallOutlinedIcon/>}>
          Call
        </Button>
        <Button variant="outlined" size="small" color="secondary" startIcon={<EmailOutlinedIcon/>}>
          Email
        </Button>
      </CardActions>
    </Card>
  );
}