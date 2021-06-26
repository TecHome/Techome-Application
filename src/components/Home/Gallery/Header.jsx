import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import Keyboard from '../../../assets/images/icons/teclado.svg';
import Microphone from '../../../assets/images/icons/microphone.svg';
import Mouse from '../../../assets/images/icons/mouse.svg';
import Mousepad from '../../../assets/images/icons/mousepad.svg';
import Memory from '../../../assets/images/icons/memory.svg';
import Headphone from '../../../assets/images/icons/headphone.svg';
//import Screen from '../../../assets/images/icons/screen.png';


const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
    },
    container: {
        background: theme.palette.secondary.dark,
        height: 165,
        [theme.breakpoints.down('815')]: {
            height: 150,
        },
        [theme.breakpoints.down('700')]: {
            height: 125,
        },
        [theme.breakpoints.down('600')]: {
            height: 0,
        },
    },
    imageWidth: {
        height: 70,
        width: 100,
        [theme.breakpoints.down('815')]: {
            height: 60,
            width: 90,
        },
        [theme.breakpoints.down('700')]: {
            height: 50,
            width: 80,
        }
    },
    imageHeight: {
        height: 70,
        width: 70,
        [theme.breakpoints.down('815')]: {
            height: 60,
            width: 60,
        },
        [theme.breakpoints.down('700')]: {
            height: 50,
            width: 50,
        }
    },
    grid: {
        textAlign: 'center',
        marginTop: 30,
        [theme.breakpoints.down('815')]: {
            marginTop: 25,
        },
        [theme.breakpoints.down('700')]: {
            marginTop: 20,
        },
        [theme.breakpoints.down('600')]: {
            height: 0,
        },
    },
    text: {
        marginTop: -20,
        textAlign: 'center',
        color: theme.palette.text.primary,
        '&:hover': {
            color: theme.palette.text.primary,
            textDecoration: 'none'
        },
    }

}));

export default function HeaderProducts() {

    const classes = useStyles();

    return (
        <>
            <Grid
                container
                className={classes.container}  >

                <Grid
                    className={classes.grid}
                    component={Link}
                    to='/peripherals/headphones'
                    item xs={12} sm={2}
                >
                    <img
                        className={classes.imageHeight}
                        src={Headphone}
                        alt='Alt'
                    />
                </Grid>

                <Grid
                    className={classes.grid}
                    component={Link}
                    to='/peripherals/microphones'
                    item xs={12} sm={2}
                >
                    <img
                        className={classes.imageHeight}
                        src={Microphone}
                        alt='Alt'
                    />
                </Grid>

                <Grid
                    className={classes.grid}
                    component={Link}
                    to='/peripherals/keyboards'
                    item xs={12} sm={2}
                >
                    <img
                        className={classes.imageWidth}
                        src={Keyboard}
                        alt='Alt'
                    />
                </Grid>

                <Grid
                    className={classes.grid}
                    component={Link}
                    to='/peripherals/mouses'
                    item xs={12} sm={2}
                >
                    <img
                        className={classes.imageHeight}
                        src={Mouse}
                        alt='Alt'
                    />
                </Grid>

                <Grid
                    className={classes.grid}
                    component={Link}
                    to='/peripherals/mousepads'
                    item xs={12} sm={2}
                >
                    <img
                        className={classes.imageWidth}
                        src={Mousepad}
                        alt='Alt'
                    />
                </Grid>

                <Grid
                    className={classes.grid}
                    component={Link}
                    to='/peripherals/memories'
                    item xs={12} sm={2}
                >
                    <img
                        className={classes.imageWidth}
                        src={Memory}
                        alt='Alt'
                    />
                </Grid>

                <Grid
                    className={classes.text}
                    component={Link}
                    to='/peripherals/headphones'
                    item xs={12} sm={2}
                >
                    <Typography variante='h5' >
                        Audifono
                    </Typography>
                </Grid>

                <Grid
                    className={classes.text}
                    component={Link}
                    to='/peripherals/microphones'
                    item xs={12} sm={2}
                >
                    <Typography variante='h5' >
                        Microfono
                    </Typography>
                </Grid>

                <Grid
                    className={classes.text}
                    component={Link}
                    to='/peripherals/keyboards'
                    item xs={12} sm={2}
                >
                    <Typography variante='h5' >
                        Teclado
                    </Typography>
                </Grid>

                <Grid
                    className={classes.text}
                    component={Link}
                    to='/peripherals/mouses'
                    item xs={12} sm={2}
                >
                    <Typography variante='h5' >
                        Mouse
                    </Typography>
                </Grid>

                <Grid
                    className={classes.text}
                    component={Link}
                    to='/peripherals/mousepads'
                    item xs={12} sm={2}
                >
                    <Typography variante='h5' >
                        Mouse Pad
                    </Typography>
                </Grid>

                <Grid
                    className={classes.text}
                    component={Link}
                    to='/peripherals/memories'
                    item xs={12} sm={2}
                >
                    <Typography variante='h5' >
                        Memoria
                    </Typography>
                </Grid>

            </Grid>


        </>
    );
}
