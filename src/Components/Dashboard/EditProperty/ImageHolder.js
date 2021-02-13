import React from 'react';
import {Card,makeStyles,Grid} from '@material-ui/core/';

import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
function ImageHolder(props) {
    const classes = useStyles();
   
    return (
        <Grid item sm={2}>
            <Card className={classes.root}>
     
        <CardMedia
          className={classes.media}
          image={props.img.image}
          title="Contemplative Reptile"
        />
    </Card>

        </Grid>
            
        
    );
}

export default ImageHolder;