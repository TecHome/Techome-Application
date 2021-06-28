import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../../layouts/Header';
import Carousel from './Carousel/Carousel';
import Gallery from './Gallery/Gallery';
import HeaderProducts from './Gallery/Header';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 5,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  offset: {
    minHeight: 0,
    [theme.breakpoints.up('716')]: {
      minHeight: 35,
    },
    [theme.breakpoints.up('720')]: {
      minHeight: 41,
    },
    [theme.breakpoints.up('733')]: {
      minHeight: 6,
    },
    [theme.breakpoints.up('734')]: {
      minHeight: 28,
    },
    [theme.breakpoints.up('737')]: {
      minHeight: 22,
    },
    [theme.breakpoints.up('751')]: {
      minHeight: 0,
    },
    [theme.breakpoints.up('1283')]: {
      minHeight: 36,
    },
    [theme.breakpoints.up('1300')]: {
      minHeight: 0,
    },
  }
}));

export default function MediaCard() {
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <div className={classes.root}>
      <Header item={'Home'} />
      <div className={classes.offset} ></div>
      <Carousel />
      <HeaderProducts />
      <Gallery />
    </div>
  );
}
