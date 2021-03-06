import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    navbar: {
        boxShadow: 'none',
        marginTop: 95,
        
        [theme.breakpoints.down('1300')]: {
            marginTop:135,
        },
        [theme.breakpoints.down('751')]: {
            marginTop:155,
        },
        [theme.breakpoints.down('734')]: {
            marginTop:165,
        },
        [theme.breakpoints.down('733')]: {
            marginTop:190,
        },
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
    },
    buttonSelected: {
        color: theme.palette.secondary.main,
        background: 'transparent',
        fontSize: 20,
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
            color: theme.palette.secondary.main,
        }
    },
    buttonUnselected: {
        color: theme.palette.text.primary,
        fontSize: 20,
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
            color: theme.palette.secondary.main,
        }
    },
    image: {
        width: 50,
        height: 50
    }
}));



export default function Navbar({ item }) {
    const classes = useStyles();

    return (
        <>
            <AppBar className={classes.navbar} position="fixed" >
                <Toolbar>
                    <Grid container spacing={3}>
                        <Grid className={classes.containerCenter} item xs={12} >
                            <Button
                                className={'Support' === item ? classes.buttonSelected : classes.buttonUnselected}
                                component={Link}
                                to="/support"
                            >
                                Soporte
                        </Button>
                            <Button
                                className={'FrequentQuestions' === item ? classes.buttonSelected : classes.buttonUnselected}
                                component={Link}
                                to="/support/frequentquestions"
                            >
                                Preguntas Frecuentes
                        </Button  >
                            <Button
                                className={'Ubication' === item ? classes.buttonSelected : classes.buttonUnselected}
                                component={Link}
                                to="/support/ubication"
                            >
                                Ubicaci??n
                            </Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <div className={classes.offset} ></div>
        </>
    );
}
