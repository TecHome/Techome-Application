import React from 'react';
import { Grid, Typography, Divider, makeStyles } from '@material-ui/core';
import Table from './Table';

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
    containerSpecs: {
        background: theme.palette.secondary.dark,
        height: 60,
        marginTop: 50
    },
    gallery:{
        marginTop:50,
    }
}));

export default function Spects({ console }) {
    const classes = useStyles();

    return (
        <>
            <Grid container className={classes.containerSpecs}>
                <Grid item xs={12} sm={12}>
                    <Typography className={classes.header} variante='h1'>
                        Especificaciones
                    </Typography>
                    <Divider className={classes.divider} />
                </Grid>
            </Grid>

            <Table console={console}></Table>
            <Grid className={classes.gallery}>
                <img
                    className="d-block w-100"
                    src={console.product.imageGallery}
                    alt='Consoles'
                />
            </Grid>
        </>
    );
}
