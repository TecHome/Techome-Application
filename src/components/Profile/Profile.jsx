import React, { useState, useEffect } from 'react';
import { Grid, Typography, Divider, CircularProgress, makeStyles } from '@material-ui/core';
import { getUsers, getUserById, createUser } from '../../services/user'
import Navbar from '../../layouts/Navbar';
import Header from './Header';
import Info from './Info';


const useStyles = makeStyles((theme) => ({
    container: {
        background: theme.palette.primary.main,
    },
    loader: {
        color: theme.palette.secondary.main,
        marginTop: '33vh',
        marginBottom: '34vh',
    },
    divider: {
        textAlign: 'center',
        marginRight: '5vw',
        marginLeft: '5vw',
        marginBottom: '4.4vw',
        marginTop: '4.5vw',
    },
    header: {
        marginTop:20,
        textAlign: 'center',
        fontSize: 30,
        color: theme.palette.text.primary,
    },
}));

export default function Profile() {
    const classes = useStyles();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getUsers();
        window.scrollTo(0, 0);
    }, []);

    function getUsers() {
        getUserById(2)
            .then((response) => {
                return response.data;
            })
            .then((response) => {
                setUser(response.response);
                setLoading(false);
            })
    }

    return (
        <>
            <Navbar item={'Profile'} />
            <Grid className={classes.container} container  >
                {!loading ?
                    <>
                        <Header item={'Profile'} />

                        <Grid
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

                        <Info user={user}></Info>
                    </>
                    :
                    <Grid
                        align="center"
                        item xs={12} sm={12}
                    >
                        <CircularProgress className={classes.loader} />
                    </Grid>
                }

                <Grid
                    align="center"
                    item xs={12} sm={12}
                    className={classes.divider}
                >
                    <Divider />
                </Grid>

                <div className={classes.offset}></div>
            </Grid>
        </>
    );
}
