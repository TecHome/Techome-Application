import React from 'react';
import { makeStyles, Grid, Typography, Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    flexGrow: 1,
    textAlign: 'center',
    color: theme.palette.text.primary,
    background: theme.palette.primary.main,
    height: 165
  },
  textStyle: {
    color: theme.palette.text.secondary,
    fontSize: 18,
    padding: 0,
    [theme.breakpoints.down('650')]: {
      fontSize: 15,
    },
  },
  headerStyle: {
    color: theme.palette.text.secondary,
    fontSize: 25,
    padding: 15,
    [theme.breakpoints.down('650')]: {
      fontSize: 23,
    },
  },
  divider: {
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 50,
    marginRight: 50
  }
}));


export default function Footer() {
  const classes = useStyles();

  return (
    <>
      <Grid className={classes.container}>
        <Typography className={classes.headerStyle} variante='h6' >
          TecHome
        </Typography>
        <Typography className={classes.textStyle} variante='h5' >
          SuperMall # 7 Horario de Atencion: Lun - Sab de 10:00 - 20:00
        </Typography>
        <Divider className={classes.divider} />
        <Typography className={classes.textStyle} variante='h5' >
          © 2020 Copyright: UCB - Universidad Catolica Boliviana
        </Typography>
      </Grid>
    </>
  );
}
