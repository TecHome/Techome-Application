import React from 'react';
import { Grid, Typography, Divider, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
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
}));

export default function Header({ console }) {
    const classes = useStyles();

    return (
        <>
        <Grid item xs={12} sm={12}>
            <Typography className={classes.header} variante='h1'>
                {console.product.brand}
            </Typography>
            <Divider className={classes.divider}/>
            <img
                className="d-block w-100"
                src={console.product.imageBg}
                alt='Consoles'
            />
        </Grid>
        </>
    );
}