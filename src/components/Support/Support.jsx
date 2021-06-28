import React from 'react';
import Header from '../../layouts/Header'
import NavbarPreguntasFrecuentes from '../../layouts/NavbarPreguntasFrecuentes'


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import Grid from '@material-ui/core/Grid';



import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

import MoreVertIcon from '@material-ui/icons/MoreVert';

import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import { Container } from '@material-ui/core';

import FooterSupport from '../../layouts/FooterSupport';

import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

import Box from '@material-ui/core/Box';

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
        backgroundColor: "#EBEBEB"
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


export default function Support({ item }) {
    const classes = useStyles();
    return (
        <>


            <div className={classes.backgroundColor}>

                <div className={classes.margin}>
                    <Header item={'Support'} />
                    <NavbarPreguntasFrecuentes />
                    <div className={classes.backgroundColorTextNavBar}>
                        <p align="center">Acceda facilmente a toda la información que necesita sobre cualquier producto, desde <br /> preguntas frecuentes hasta guías de instalación, controladores y descargas.</p>
                    </div>

                    <CardHeader></CardHeader>
                    <Container maxWidth="25%">
                        <Grid container spacing={3}>
                            <Grid item xs={6}>

                                <Card className={classes.root} style={{ backgroundColor: "white" }}>
                                    <CardActionArea>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="p" color="primary">
                                                <b>Contactar Servicio al Cliente</b>
                                            </Typography>
                                            <Typography variant="body2" color="primary" component="p"  >
                                                Si tiene una solicitud urgente con respecto a un pedido, llamenos durante el horario comercial para obtener una respuesta inmediata
                                            </Typography>

                                            <Typography variant="body2" color="primary" component="p">
                                                <div class="MuiCardHeader-root">
                                                    <div class="MuiCardHeader-avatar">
                                                        <MailOutlineIcon fontSize="large"></MailOutlineIcon>
                                                    </div>
                                                    <div class="MuiCardHeader-content">
                                                        <span class="MuiTypography-root MuiCardHeader-title MuiTypography-body2 MuiTypography-displayBlock"><b>Email Servicio al Cliente</b></span>
                                                        <span class="MuiTypography-root MuiCardHeader-subheader MuiTypography-body2 MuiTypography-colorPrimary MuiTypography-displayBlock">Complete un formulario corto para enviar una solicitud por correo</span>
                                                        <Button href="mailto:techomecochabamba@gmail.com?subject=Comunicarme%20contigo&body=Quiero%20hablar%20contigo" target="_blank" style={{color: "white"}}size="small" variant="contained" color="secondary">
                                                           <AlternateEmailIcon></AlternateEmailIcon> Email
                                                        </Button>
                                                    </div>
                                                </div>
                                                <div class="MuiCardHeader-root">
                                                    <div class="MuiCardHeader-avatar">
                                                        <PhoneEnabledIcon href="https://api.whatsapp.com/send?phone=59179338704&text=Hola%20Amigo%20" target="_blank" fontSize="large"></PhoneEnabledIcon>
                                                    </div>
                                                    <div class="MuiCardHeader-content">
                                                        <span class="MuiTypography-root MuiCardHeader-title MuiTypography-body2 MuiTypography-displayBlock"><b>Teléfono Servicio al Cliente</b></span>
                                                        <span class="MuiTypography-root MuiCardHeader-subheader MuiTypography-body2 MuiTypography-colorPrimary MuiTypography-displayBlock">Lunes - Sábado 9:00 am - 8:00 pm</span>
                                                        <span class="MuiTypography-root MuiCardHeader-subheader MuiTypography-body2 MuiTypography-colorSecondary MuiTypography-displayBlock">+591 79338704</span>
                                                        <Button href="https://api.whatsapp.com/send?phone=59179338704&text=Hola%20Amigo%20" target="_blank" style={{color: "green"}} size="small" variant="contained" color="primary">
                                                            <WhatsAppIcon></WhatsAppIcon>whatsapp
                                                        </Button>
                                                    </div>
                                                </div>
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item xs={6}>
                                <Card className={classes.root} style={{ backgroundColor: "white" }}>
                                    <CardActionArea>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="p" color="primary">
                                                <b>Contactar Soporte Técnico</b>
                                            </Typography>
                                            <Typography variant="body2" color="primary" component="p"  >
                                                ¿Tiene dudas sobre un producto que ya posee? Pregunte a un experto
                                            </Typography>

                                            <Typography variant="body2" color="primary" component="p">
                                                <div class="MuiCardHeader-root">
                                                    <div class="MuiCardHeader-avatar">
                                                        <MailOutlineIcon fontSize="large"></MailOutlineIcon>
                                                    </div>
                                                    <div class="MuiCardHeader-content">
                                                        <span class="MuiTypography-root MuiCardHeader-title MuiTypography-body2 MuiTypography-displayBlock"><b>Email Soporte Técnico</b></span>
                                                        <span class="MuiTypography-root MuiCardHeader-subheader MuiTypography-body2 MuiTypography-colorPrimary MuiTypography-displayBlock">Complete un formulario corto para enviar una solicitud por correo</span>
                                                        <Button href="mailto:techomecochabamba@gmail.com?subject=Comunicarme%20contigo&body=Quiero%20hablar%20contigo" target="_blank" style={{color: "white"}} size="small" variant="contained" color="secondary">
                                                            <AlternateEmailIcon></AlternateEmailIcon>Email
                                                        </Button>
                                                    </div>
                                                </div>
                                                <div class="MuiCardHeader-root">
                                                    <div class="MuiCardHeader-avatar">
                                                        <PhoneEnabledIcon  fontSize="large"></PhoneEnabledIcon>
                                                    </div>
                                                    <div class="MuiCardHeader-content">
                                                        <span class="MuiTypography-root MuiCardHeader-title MuiTypography-body2 MuiTypography-displayBlock"><b>Teléfono Servicio al Cliente</b></span>
                                                        <span class="MuiTypography-root MuiCardHeader-subheader MuiTypography-body2 MuiTypography-colorPrimary MuiTypography-displayBlock">Lunes - Sábado 9:00 am - 8:00 pm</span>
                                                        <span class="MuiTypography-root MuiCardHeader-subheader MuiTypography-body2 MuiTypography-colorSecondary MuiTypography-displayBlock">+591 79338704</span>
                                                        <Button href="https://api.whatsapp.com/send?phone=59179338704&text=Hola%20Amigo%20" target="_blank" style={{color: "green"}} size="small" variant="contained" color="primary">
                                                            <WhatsAppIcon></WhatsAppIcon>whatsapp
                                                        </Button>
                                                    </div>
                                                </div>
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>
                    <div className={classes.text}>
                        <p>Brindamos servicio técnico en la tienda.</p>
                    </div>
                </div>
                <FooterSupport></FooterSupport>
            </div>
        </>
    );
}
