import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Grid, makeStyles, IconButton } from '@material-ui/core';
import { ShoppingCart, Person } from '@material-ui/icons';
import Info from './Info'
import Logo from '../assets/images/logoIco.png';

const useStyles = makeStyles((theme) => ({
    navbar: {
        boxShadow: 'none'
    },
    containerCenter: {
        flexGrow: 1,
        textAlign: 'center',
    },
    containerRight: {
        flexGrow: 1,
        textAlign: 'right',
        color: theme.palette.text.main
    },
    itemRight: {
        padding: theme.spacing(1),
    },
    icon: {
        fontSize: 35,
        [theme.breakpoints.down('804')]: {
            fontSize: 30,
        },
    },
    buttonSelected: {
        color: theme.palette.secondary.main,
        background: 'transparent',
        fontSize: 20,
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
            color: theme.palette.secondary.main,
        },
        [theme.breakpoints.down('804')]: {
            fontSize: 18,
        },
    },
    buttonUnselected: {
        color: theme.palette.text.primary,
        fontSize: 20,
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
            color: theme.palette.secondary.main,
        },
        [theme.breakpoints.down('804')]: {
            fontSize: 18,
        },
    },
    image: {
        width: 50,
        height: 50,
        [theme.breakpoints.down('804')]: {
            width: 40,
            height: 40,
        },
        [theme.breakpoints.down('733')]: {
            marginTop: 18,
        },
    },
    offset: {
        minHeight: 200,
        [theme.breakpoints.up('716')]: {
            minHeight: 165,
        },
        [theme.breakpoints.up('720')]: {
            minHeight: 159,
        },
        [theme.breakpoints.up('734')]: {
            minHeight: 137,
        },
        [theme.breakpoints.up('1283')]: {
            minHeight: 103,
        },
    }
}));



export default function Navbar({ item }) {
    const classes = useStyles();

    return (
        <>

            <AppBar className={classes.navbar} position="fixed" >

                <Grid item xs={12}>
                    <Info />
                </Grid>

                <Toolbar>
                    <Grid container spacing={3}>
                        <Grid item xs={2}>
                            <img
                                className={classes.image}
                                src={Logo}
                                alt="TecHome"
                            />
                        </Grid>

                        <Grid className={classes.containerCenter} item xs={8} >
                            <Button
                                className={'Home' === item ? classes.buttonSelected : classes.buttonUnselected}
                                component={Link}
                                to="/home"
                            >
                                INICIO
                            </Button>
                            <Button
                                className={'Products' === item ? classes.buttonSelected : classes.buttonUnselected}
                                component={Link}
                                to="/products"
                            >
                                PRODUCTOS
                            </Button  >
                            <Button
                                className={'PCs' === item ? classes.buttonSelected : classes.buttonUnselected}
                                component={Link}
                                to="/pcs"
                            >
                                PCs
                            </Button>
                            <Button
                                className={'Consoles' === item ? classes.buttonSelected : classes.buttonUnselected}
                                component={Link}
                                to="/consoles"
                            >
                                CONSOLAS
                            </Button  >
                            <Button
                                className={'Support' === item ? classes.buttonSelected : classes.buttonUnselected}
                                component={Link}
                                to="/support"
                            >
                                SOPORTE
                            </Button>
                        </Grid>


                        <Grid className={classes.containerRight} item xs={2}>
                            <IconButton className={classes.itemRight} >
                                <Person className={classes.icon} />
                            </IconButton>
                            <IconButton className={classes.itemRight} >
                                <ShoppingCart className={classes.icon} />
                            </IconButton>
                        </Grid>

                    </Grid>
                </Toolbar>
            </AppBar>
            <div className={classes.offset} ></div>
        </>
    );
}
