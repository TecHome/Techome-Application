import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Divider, Card, CardHeader, Button, CardMedia, CardContent, CardActions, makeStyles } from '@material-ui/core';
import { getProducts } from '../../services/product';
import Header from '../../layouts/Header'
import Keyboard from '../../assets/images/gallery/keyboard.jpg';
import Microphone from '../../assets/images/gallery/microphone.jpg';
import Mouse from '../../assets/images/gallery/mouse.jpg';
import Mousepad from '../../assets/images/gallery/mousepad.jpg';
import Ram from '../../assets/images/gallery/ram.jpg';
import Headphone from '../../assets/images/gallery/headphone2.jpg';

const useStyles = makeStyles((theme) => ({
    container: {
        background: theme.palette.primary.main,
    },
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
    card: {
        color: theme.palette.primary.main,
        width: '70%',
        marginTop: 50,
        // marginBottom: 20,
        [theme.breakpoints.down('1324')]: {
            width: '75%',
        },
        [theme.breakpoints.down('1024')]: {
            width: '80%',
        },
        [theme.breakpoints.down('850')]: {
            width: '90%',
        },
        [theme.breakpoints.down('600')]: {
            width: '70%',
            // marginTop: 30,
            // marginBottom: 20,
        },
    },

    root: {
        justify: "center",
        marginRight: '5vw',
        marginLeft: '5vw',
        width: '90vw',
        [theme.breakpoints.down('1324')]: {
            marginRight: '3vw',
            marginLeft: '3vw',
            width: '93vw'
        },
        [theme.breakpoints.down('1024')]: {
            marginRight: '2.5vw',
            marginLeft: '2.5vw',
            width: '95vw',
        },
        [theme.breakpoints.down('850')]: {
            marginRight: '1vw',
            marginLeft: '1vw',
            width: '98vw',
        },
    },
    media: {
        height: '10vw',
        width: '10vw' // 16:9
    },
    cardHeader: {
        marginTop: -10,
        textAlign: 'left',
    },
    button: {

        color: theme.palette.text.primary,
        background: theme.palette.primary.dark,
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.secondary.main,
        },
    },
    action: {
        justifyContent: 'center',
    },
    content: {
        marginBottom: -20,
    },
    text: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        height: '5rem',
        [theme.breakpoints.down('1174')]: {
            height: '4.4rem',
        },
        [theme.breakpoints.down('160074')]: {
            height: '3rem',
        },
    },
    dividerCard: {
        marginTop: 50,
        [theme.breakpoints.down('600')]: {
            marginRight: 50,
            marginLeft: 50,
        },
    }

}));

export default function Items(props) {
    const classes = useStyles();
   // const [page, setPage] = useState(props.match.params.id)
    const [title, setTitle] = useState('')
    const [bg, setBg] = useState(null)
    const [products, setProducts] = useState([]);

    useEffect(() => {
        //setPage(props.match.params.id);
        setPageName(props.match.params.id);
        getDataProducts(props.match.params.id);
        window.scrollTo(0, 0);
    }, [props.match.params.id]);

    function setPageName(page) {
        switch (page) {
            case "headphones":
                setTitle('Audifonos');
                setBg(Headphone);
                break;
            case "microphones":
                setTitle('Microfonos');
                setBg(Microphone);
                break;
            case "mouses":
                setTitle('Mouses');
                setBg(Mouse);
                break;
            case "mousepads":
                setTitle('Mouse Pads');
                setBg(Mousepad);
                break;
            case "keyboards":
                setTitle('Teclados');
                setBg(Keyboard);
                break;
            case "memories":
                setTitle('Memorias');
                setBg(Ram);
                break;
            default:
                setTitle('Error');
                setBg(Headphone);
                break;
        }
    }

    function getDataProducts(type) {
        getProducts()
            .then((response) => {
                return response.data;
            })
            .then((response) => {
                setProducts(response.response.filter(item => item.type === type));
            })
    }

    return (
        <>
            <Header item={'Products'} />
            <Grid className={classes.container} container  >
                <Grid
                    item xs={12} sm={12}
                >
                    <Typography
                        className={classes.header}
                        variante='h1'
                    >
                        {title}
                    </Typography>
                    <Divider className={classes.divider} />

                    <img
                        className="d-block w-100"
                        src={bg}
                        alt='Products'
                    />
                </Grid>



                <Grid
                    className={classes.root}
                    container
                >
                    {products.map(product => (
                        <>
                            <Grid
                                align="center"
                                className={classes.root2}
                                item xs={12} sm={3}
                            >
                                <Card
                                    className={classes.card}>
                                    <CardHeader
                                        titleTypographyProps={{ variant: 'h4' }}
                                        className={classes.cardHeader}
                                        title={product.product.brand}
                                    // subheader="September 14, 2016"
                                    />
                                    <CardMedia
                                        className={classes.media}
                                        image={product.product.imageCard}
                                        title="Paella dish"
                                    />

                                    <CardContent
                                        className={classes.content}
                                    >
                                        <div
                                            className={classes.text}
                                        >
                                            <Typography
                                                variant="p"
                                                align="center"
                                            >
                                                {product.product.name}
                                            </Typography>
                                        </div>
                                    </CardContent>
                                    <CardActions
                                        className={classes.action}
                                        disableSpacing
                                    >
                                        <Button
                                            className={classes.button}
                                            variant="contained"
                                            exact
                                            component={Link}
                                            to={`/products/${product.id}`}
                                        >
                                            Leer Mas
                                        </Button>

                                    </CardActions>
                                </Card>
                                <Divider className={classes.dividerCard} />
                            </Grid>
                        </>
                    ))}
                </Grid>
            </Grid>
        </>
    );
}
