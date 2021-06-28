import React from 'react'
import Header from '../../layouts/Header'
import NavbarPreguntasFrecuentes from '../../layouts/NavbarPreguntasFrecuentes'

import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import imageSuperMall from '../../assets/images/ubication/supermall.jpg'

import { Divider } from '@material-ui/core';


import GoogleMap from '../../components/GoogleMap/GoogleMap'




const useStyles = makeStyles((theme) => ({
  root: {
    lexGrow: 1,
  },
  media: {
    height: 140,
  },
  paper: {
    height: 240,
    width: 200,
  },
  control: {
    padding: theme.spacing(2),
  },
  text: {
    textAlign: "center",
  },
  margin: {
    marginTop: 70,
  },
  backgroundColor: {
    color: theme.palette.text.primary,
    background: theme.palette.primary.main,
  },

  content: {
    padding: '25px 50px 230px 600px',
  },
  backgroundColorTextNavBar: {
    color: theme.palette.text.primary,
    background: theme.palette.primary.main,
    marginTop: -15,
    [theme.breakpoints.down('1300')]: {
      marginTop: 25,
    },
    [theme.breakpoints.down('1283')]: {
      marginTop: -10,
    },
    [theme.breakpoints.down('751')]: {
      marginTop: 10,
    },
    [theme.breakpoints.down('734')]: {
      marginTop: -5,
    },
    [theme.breakpoints.down('733')]: {
      marginTop: 18,
    },
    [theme.breakpoints.down('716')]: {
      marginTop: -20,
    },
    [theme.breakpoints.down('600')]: {
      marginTop: -35,
    },
    [theme.breakpoints.down('512')]: {
      marginTop: 10,
    },
  },
}));

export default function Ubication({ item }) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.backgroundColor}>
        <div className={classes.margin}>
          <Header item={'Ubication'} />
          <NavbarPreguntasFrecuentes />
          <p align="center" className={classes.backgroundColorTextNavBar}>Encuentranos en la siguiente dirección Av. Blanco Galindo  <br />
            <p align="center">casi Av. Perú Cochabamba, Bolivia </p>
          </p>
          <Divider variant="middle" />

          <Box display="flex" justifyContent="center" style={{marginLeft:"-700px", height:350,marginBottom:"50px",marginTop:"45px"}}>
            <GoogleMap />

          </Box>






          <Box display="flex" justifyContent="center">
            <img src={imageSuperMall} alt="SuperMall" width="700" height="400"></img>
          </Box>
        </div>
      </div>

    </>

  )
}
