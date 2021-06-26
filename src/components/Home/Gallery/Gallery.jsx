import React from "react";
import { Link } from 'react-router-dom';
import { Grid, Button, makeStyles } from "@material-ui/core";
import Keyboard from '../../../assets/images/gallery/keyboard.jpg';
import Microphone from '../../../assets/images/gallery/microphone.jpg';
import Mouse from '../../../assets/images/gallery/mouse.jpg';
import Mousepad from '../../../assets/images/gallery/mousepad.jpg';
import Ram from '../../../assets/images/gallery/ram.jpg';
import Keyboard2 from '../../../assets/images/gallery/keyboard2.jpg';
// 1900 x 600

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 0
    },
    buttonRight: {
        marginTop: "-25vw",
        marginRight: "-50vw",
        '&:hover': {
            backgroundColor: theme.palette.secondary.dark,
            color: theme.palette.text.primary,
        },
    },
    buttonLeft: {
        marginTop: "-25vw",
        marginLeft: "-50vw",
        '&:hover': {
            backgroundColor: theme.palette.secondary.dark,
            color: theme.palette.text.primary,
        },
    },
    textRight: {
        marginTop: "-32vw",
        marginRight: "-54vw",
        fontSize: 40,
        [theme.breakpoints.down('1020')]: {
            marginTop: "-40vw",
            marginRight: "-54vw",
            fontSize: 30,
        },
    },
    textLeft: {
        marginTop: "-32vw",
        marginLeft: "-47vw",
        fontSize: 40,
        [theme.breakpoints.down('1020')]: {
            marginTop: "-40vw",
            marginLeft: "-47vw",
            fontSize: 30,
        },
    }
}));

export default function Gallery() {

    const classes = useStyles();

    const gallery = [
        {
            id: 1,
            src: Keyboard,
            content: 'Teclados',
            alt: 'Gallery',
            route: '/peripherals/keyboards',
            position: true,
        },
        {
            id: 2,
            src: Mouse,
            content: 'Mouses',
            alt: 'Gallery',
            route: '/peripherals/mouses',
            position: false
        },
        {
            id: 3,
            src: Ram,
            content: 'Memoria Ram',
            alt: 'Gallery',
            route: '/peripherals/memories',
            position: true
        },
        {
            id: 4,
            src: Microphone,
            content: 'Microfonos',
            alt: 'Gallery',
            route: '/peripherals/microphones',
            position: false
        },
        {
            id: 5,
            src: Mousepad,
            content: 'MousePads',
            alt: 'Gallery',
            route: '/peripherals/mousepads',
            position: true
        },
        {
            id: 6,
            src: Keyboard2,
            content: 'Teclados',
            alt: 'Gallery 6',
            route: '/peripherals/keyboards',
            position: false
        },
    ];

    return (
        <>
            {gallery.map(item => (
                <>
                    <img
                        className="d-block w-100"
                        src={item.src}
                        alt={item.alt}
                    />
                    <Grid
                        className={classes.root}
                    >
                        <Button className={item.position ? classes.textRight : classes.textLeft} disabled>
                            {item.content}
                        </Button>
                    </Grid>
                    <Grid
                        className={classes.root}
                    >
                        <Button
                            className={item.position ? classes.buttonRight : classes.buttonLeft}
                            variant="contained"
                            color="secondary"
                            component={Link}
                            to={item.route}
                        >
                            Leer Mas
                        </Button>
                    </Grid>
                </>
            ))}
        </>
    );
}
