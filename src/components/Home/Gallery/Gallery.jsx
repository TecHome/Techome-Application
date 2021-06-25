import React from "react";
import { Grid, Button, makeStyles } from "@material-ui/core";
import Keyboard from '../../../assets/images/gallery/keyboard.jpg'
import Microphone from '../../../assets/images/gallery/microphone.jpg'
import Mouse from '../../../assets/images/gallery/mouse.jpg'
import Mousepad from '../../../assets/images/gallery/mousepad.jpg'
import Ram from '../../../assets/images/gallery/ram.jpg'
import Keyboard2 from '../../../assets/images/gallery/keyboard2.jpg'
// 1900 x 600

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 0
    },
    button:{
        marginTop: "-40vw",
        marginRight: "-50vw"
    }
}));

export default function Gallery() {

    const classes = useStyles();

    const gallery = [
        {
            id: 1,
            src: Keyboard,
            content: 'content',
            alt: 'Gallery 2'
        },
        {
            id: 2,
            src: Microphone,
            content: 'content',
            alt: 'Gallery 2'
        },
        {
            id: 3,
            src: Mouse,
            content: 'content',
            alt: 'Gallery 3'
        },
        {
            id: 4,
            src: Mousepad,
            content: 'content',
            alt: 'Gallery 4'
        },
        {
            id: 5,
            src: Ram,
            content: 'content',
            alt: 'Gallery 5'
        },
        {
            id: 6,
            src: Keyboard2,
            content: 'content',
            alt: 'Gallery 6'
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
                    <Grid className={classes.root}>
                        <Button className={classes.button} variant="contained" color="secondary">Default</Button>
                    </Grid>
                </>
            ))}
        </>
    );
}
