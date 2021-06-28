import React, { Component } from 'react'
import { makeStyles, Grid, Typography, Divider } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    container: {
      flexGrow: 1,
      textAlign: 'center',
      color: theme.palette.text.primary,
      background: theme.palette.primary.main,
      height: 165,
      marginBottom:230,
    },
    textStyle: {
      color: theme.palette.text.secondary,
      fontSize: 18,
      padding: 0
    },
    headerStyle: {
      color: theme.palette.text.secondary,
      fontSize: 25,
      padding: 15
    },
    divider:{
      marginTop: 15,
      marginBottom: 15,
      marginLeft: 50,
      marginRight: 50,
    }
  }));

  export default function FooterSupport() {
    const classes = useStyles();
   
    return (
        <>
            <Grid className={classes.container}>
                <Typography className={classes.headerStyle} variante='h6' >
                Asesores
                </Typography>
                <Typography className={classes.textStyle} variante='h5' >
                Contacto Telefono
                </Typography>
                <Divider className={classes.divider}/>
                <Typography className={classes.textStyle} variante='h5' >
                Adrian Mendoza M. +591 77777777
                </Typography>
                <Divider className={classes.divider}/>
                <Typography className={classes.textStyle} variante='h5' >
                Giovanni Alcocer +591 77777777
                </Typography>
                <Divider className={classes.divider}/>
                <Typography className={classes.textStyle} variante='h5' >
                Juan Jose Quiroga +591 77777777
                </Typography>
                <Divider className={classes.divider}/>
                <Typography className={classes.textStyle} variante='h5' >
                Alejandra Cossio +591 77777777
                </Typography>
                <Divider className={classes.divider}/>
                <Typography className={classes.textStyle} variante='h5' >
                Allen Vargas +591 77777777
                </Typography>
                <Divider variant="fullWidth"/>
                
            </Grid>
        </>
    )
    
}
