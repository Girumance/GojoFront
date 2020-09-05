import React, {useState} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 340,
  },
});

const  HomeCards = props => {


  const classes = useStyles();
  
  const [img] = useState(props);
  

  const disimage= img.image.img;

  return (
    <Card className={classes.root}>

        <CardMedia
          className={classes.media}
          image={disimage}
          title={props.title}
        />
        <CardContent>
          <Typography color="textSecondary" gutterBottom variant="h5" component="h2">
          {img.image.title}
          </Typography>
          
          <Typography variant="body2" color="textSecondary" component="p">
          View 25,799 houses
          </Typography>
        </CardContent>
     
    </Card>
  );
}


export default HomeCards;