import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../../layouts/Header'
import Carousel from './Carousel/Carousel'
import Gallery from './Gallery/Gallery';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 5,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function MediaCard() {
  const classes = useStyles();

  return (

    <div className={classes.root}>
      <Header item={'Home'} />
      <Carousel/>
      <Gallery/>
    </div>
  );
}
