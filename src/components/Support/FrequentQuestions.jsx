import React from 'react'
import Header from '../../layouts/Header'
import NavbarPreguntasFrecuentes from '../../layouts/NavbarPreguntasFrecuentes'


import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { CardMedia } from '@material-ui/core';

import Grid from '@material-ui/core/Grid';

import Box from '@material-ui/core/Box';

import ReactPlayer from 'react-player';

import { Divider } from '@material-ui/core';

import ImageStepper from '../../assets/images/stepperTecHome.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: 'inline-block',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  margin: {
    marginTop: 70,
  },
  backgroundColor: {
    color: theme.palette.text.primary,
    background: theme.palette.primary.main,
  },
  image: {
    width: '100%',
    maxWidth: '1700px',
  },
  backgroundColorTextNavBar: {
    color: theme.palette.text.primary,
    background: theme.palette.primary.main,
    marginTop: -15,
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

export default function FrequentQuestions({ item }) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.backgroundColor}>
        <div className={classes.margin}>
          <Header item={'FrequentQuestions'} />
          <NavbarPreguntasFrecuentes />
          <p align="center" className={classes.backgroundColorTextNavBar}>Acceda facilmente a toda la información que necesita sobre cualquier producto, desde <br />
            <p align="center">preguntas frecuentes hasta guías de instalación, controladores y descargas.</p>
          </p>
          <Divider variant="middle" />
          <Box display="flex" justifyContent="center">
            <h3>¿Cómo devuelvo un producto?</h3>
          </Box>
          <Box display="flex" justifyContent="center">
            <img src={ImageStepper} alt="SuperMall" className={classes.image}></img>
          </Box>

          <div className={classes.root}>


            <Grid container >
              <Grid item xs>
                <Box display="flex" justifyContent="center">
                  <h3>Inicia el proceso</h3>
                </Box>
                <Box display="flex" justifyContent="center">
                  <p>Con la factura y el producto dirigirse a la tienda.</p>
                </Box>
              </Grid>
              <Grid item xs>
                <Box display="flex" justifyContent="center">
                  <h3>Devuelve el artículo</h3>
                </Box>
                <Box display="flex" justifyContent="center">
                  <p>Si el vendedor acepta la devolución, y el producto esta en condiciones para ser devuelto sin rayaduras, ni golpes o algún daño causado. Entonces llena el formulario que se le proporcionará.</p>
                </Box>
              </Grid>
              <Grid item xs>
                <Box display="flex" justifyContent="center">
                  <h3>Devuelve el artículo</h3>
                </Box>
                <Box display="flex" justifyContent="center">
                  <p>Entrega el artículo y se reembolsa el importe de la compra.</p>
                </Box>
              </Grid>
            </Grid>
          </div>
          <div className={classes.text}>
            <Box display="flex" justifyContent="center">
              <h3>¿Como realizo una compra online?</h3>
            </Box>
          </div>
          <Box display="flex" justifyContent="center">
            <ReactPlayer url="https://www.youtube.com/watch?v=lSm4QZqN8cA" />
          </Box>
        </div>
      </div>

    </>

  )
}
