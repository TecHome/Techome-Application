import React, { useState, useEffect } from 'react';
import { Grid, Typography, Divider, CircularProgress, makeStyles } from '@material-ui/core';
import Navbar from '../../layouts/Navbar';
import Header from './Header';
import { } from '../../services/user'

const useStyles = makeStyles((theme) => ({
    container: {
        background: theme.palette.primary.main,
    },
    loader: {
        color: theme.palette.secondary.main,
        marginTop: '33vh',
        marginBottom: '34.6vh',
    },
    divider: {
        textAlign: 'center',
        marginRight: '5vw',
        marginLeft: '5vw',
        marginBottom: '4.4vw',
        marginTop: '4.5vw',
    },
    header: {
        marginTop: 20,
        textAlign: 'center',
        fontSize: 30,
        color: theme.palette.text.primary,
    },
}));

export default function Orders() {
    const classes = useStyles();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false)
        //getUsers();
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Navbar item={'Profile'} />
            <Grid className={classes.container} container  >
                {!loading ?
                    <>
                        <Header item={'Orders'} />

                        {/* <Grid
                            align="center"
                            item xs={12} sm={12}
                        >
                            <Typography
                                className={classes.header}
                                variante='h1'
                            >
                                Mi Informacion
                            </Typography>
                        </Grid>

                        <Info user={user}></Info> */}
                        {/* <Grid
                            align="center"
                            item xs={12} sm={12}
                            className={classes.divider}
                        >
                            <Divider />
                        </Grid>

                        <div className={classes.offset}></div> */}
                    </>
                    :
                    <Grid
                        align="center"
                        item xs={12} sm={12}
                    >
                        <CircularProgress className={classes.loader} />
                    </Grid>
                }

            </Grid>
        </>
    );
}
