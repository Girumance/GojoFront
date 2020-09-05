import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function ImageCard() {
  const classes = useStyles();

  return (
    <Card  className={classes.root}>
        <CardMedia
          className={classes.media}
          image={require("./back.jpg")}
          title="Images"
        />
       
    </Card>
  );
}
