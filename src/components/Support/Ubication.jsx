import React from 'react'
import Header from '../../layouts/Header'
import NavbarPreguntasFrecuentes from '../../layouts/NavbarPreguntasFrecuentes'

import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import imageSuperMall from '../../assets/images/ubication/supermall.jpg'

import { Divider } from '@material-ui/core';


import GoogleMap from '../../components/GoogleMap/GoogleMap'

const useStyles = makeStyles((theme) =>({
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
      marginTop:70,
    },
    backgroundColor:{
        color: theme.palette.text.primary,
        background: theme.palette.primary.main,
    },
    
    content:{
      padding: '25px 50px 230px 600px',
    }
  }));

export default function Ubication({ item }) {
    const classes = useStyles();
    return (
        <>  
            <div className={classes.backgroundColor}>
                <div className={classes.margin}>
                    <Header item={'Ubication'}/>
                    <NavbarPreguntasFrecuentes/>
                    <p align="center">Encuentranos en la siguiente dirección Av. Blanco Galindo  <br />
                    <p align="center">casi Av. Perú Cochabamba, Bolivia </p> 
                    </p>
                    <Divider variant="middle" />

                   
                    <div className={classes.content}>
                      <GoogleMap/>
                    </div>
                    
                
                    <Box display="flex" justifyContent="center">
                    <img src={imageSuperMall}  alt="SuperMall" width="700" height="400"></img>
                    </Box>
                    
                </div>
            </div>
            
        </>
        
    )
}
