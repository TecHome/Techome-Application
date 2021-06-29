import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Divider, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    header: {
        textAlign: 'center',
        fontSize: 30,
        color: theme.palette.text.primary,
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.text.primary,
            opacity: 0.9,
            textDecoration: 'none'
        },
        [theme.breakpoints.down('600')]: {
            marginLeft:'37vw'
        },
    },
    headerSelected: {
        textAlign: 'center',
        fontSize: 30,
        color: theme.palette.secondary.main,
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.secondary.main,
            opacity: 0.9,
            textDecoration: 'none'
        },
        [theme.breakpoints.down('600')]: {
            marginLeft:'40vw'
        },
    },
    divider: {
        textAlign: 'center',
        marginRight: '5vw',
        marginLeft: '5vw',
        marginBottom: '1vw',
    },
}));


export default function Header({ item }) {
    const classes = useStyles();

    return (
        <>
            <Grid
                container
            >
                <Grid item xs={12} sm={5} ></Grid>
                <Grid item xs={12} sm={1} >
                    <Typography
                        className={item === 'Profile' ? classes.headerSelected : classes.header}
                        variante='h1'
                        component={Link}
                        to={`/profile`}
                    >
                        Perfil
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={1}>
                    <Typography
                        className={item === 'Orders' ? classes.headerSelected : classes.header}
                        variante='h1'
                        component={Link}
                        to={`/orders`}
                    >
                        Ordenes
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={5} ></Grid>
                <Grid item xs={12} sm={12}>
                    <Divider className={classes.divider} />
                </Grid>

            </Grid>
        </>
    );
}
