import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../layouts/Header'
import { Grid, Typography, Divider, Card, CardHeader, Button, CardMedia, CardContent, CardActions, makeStyles } from '@material-ui/core';
import ConsoleBanner from '../../assets/images/console/console_BG.jpg';
import { getConsoles } from '../../services/console';

const useStyles = makeStyles((theme) => ({
    container: {
        background: theme.palette.primary.main,
    },
    header: {
        textAlign: 'center',
        fontSize: 30,
        color: theme.palette.text.primary,
    },
    divider: {
        textAlign: 'center',
        marginRight: '45vw',
        marginLeft: '45vw',
        marginBottom: '1vw',
    },
    card: {
        color: theme.palette.primary.main,
        width: '70%',
        marginTop: 50,
        [theme.breakpoints.down('1324')]: {
            width: '75%',
        },
        [theme.breakpoints.down('1024')]: {
            width: '80%',
        },
        [theme.breakpoints.down('850')]: {
            width: '90%',
        },
        [theme.breakpoints.down('600')]: {
            width: '70%',
        },
    },
    root: {
        justify: "center",
        marginRight: '5vw',
        marginLeft: '5vw',
        width: '90vw',
        [theme.breakpoints.down('1324')]: {
            marginRight: '3vw',
            marginLeft: '3vw',
            width: '93vw'
        },
        [theme.breakpoints.down('1024')]: {
            marginRight: '2.5vw',
            marginLeft: '2.5vw',
            width: '95vw',
        },
        [theme.breakpoints.down('850')]: {
            marginRight: '1vw',
            marginLeft: '1vw',
            width: '98vw',
        },
    },
    media: {
        height:'10vw',
        width: '10vw'
    },
    cardHeader: {
        marginTop: -10,
        textAlign: 'left',
    },
    button: {
        color: theme.palette.text.primary,
        background: theme.palette.primary.dark,
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.secondary.main,
        },
    },
    action: {
        justifyContent: 'center',
    },
    content: {
        marginBottom: -20,
    },
    text: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        height: '5rem',
        [theme.breakpoints.down('1174')]: {
            height: '4.4rem',
        },
        [theme.breakpoints.down('160074')]: {
            height: '3rem',
        },
    },
    dividerCard: {
        marginTop: 50,
        [theme.breakpoints.down('600')]: {
            marginRight: 50,
            marginLeft: 50,
        },
    }
}));

export default function Consoles() {
    const classes = useStyles();
    const [consoles, setConsoles] = useState([]);

    useEffect(() => {
        getDataConsoless();
    }, []);

    function getDataConsoless() {
        getConsoles()
            .then((response) => {
                return response.data;
            })
            .then((response) => {
                console.log(response.response)
                setConsoles(response.response);
            })
    }

    return (
        <>
            <Header item={'Consoles'} />
            <Grid className={classes.container} container >
                <Grid item xs={12} sm={12}>
                    <Typography className={classes.header} variante='h1'>
                        Consolas
                    </Typography>
                    <Divider className={classes.divider}/>
                    <img
                        className="d-block w-100"
                        src={ConsoleBanner}
                        alt='Consoles'
                    />
                </Grid>
                <Grid className={classes.root} container>
                    {consoles.map(console => (
                        <>
                            <Grid align="center" className={classes.root2} item xs={12} sm={3}>
                                <Card className={classes.card}>
                                    <CardHeader
                                        titleTypographyProps={{ variant: 'h4' }}
                                        className={classes.cardHeader}
                                        title={console.product.brand}
                                    />
                                    <CardMedia
                                        className={classes.media}
                                        image={console.product.imageCard}
                                        title="Paella dish"
                                    />
                                    
                                    <CardContent className={classes.content}>
                                        <div className={classes.text}>
                                            <Typography variant="p" align="center">
                                                {console.product.name}
                                            </Typography>
                                        </div>
                                    </CardContent>
                                    <CardActions className={classes.action} disableSpacing>
                                        <Button
                                            className={classes.button}
                                            variant="contained"
                                            exact 
                                            component={Link}
                                            to={`/consoles/${console.id}`}
                                        >
                                            Leer Mas
                                        </Button>
                                    </CardActions>
                                </Card>
                                <Divider className={classes.dividerCard} />
                            </Grid>
                        </>
                    ))}
                </Grid>
        </Grid>
        </>
    );
}