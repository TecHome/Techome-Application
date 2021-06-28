import React from 'react';
import { Grid, Typography, Card, ButtonGroup, Button, CardMedia, CardContent, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        justify: "center",
        marginRight: '5vw',
        marginLeft: '5vw',
        width: '90vw',
        // [theme.breakpoints.down('1324')]: {
        //     marginRight: '3vw',
        //     marginLeft: '3vw',
        //     width: '93vw'
        // },
        // [theme.breakpoints.down('1024')]: {
        //     marginRight: '2.5vw',
        //     marginLeft: '2.5vw',
        //     width: '95vw',
        // },
        // [theme.breakpoints.down('850')]: {
        //     marginRight: '1vw',
        //     marginLeft: '1vw',
        //     width: '98vw',
        // },
    },
    card: {
        color: theme.palette.primary.main,
        width: '50%',
        marginTop: 50,
        // marginBottom: 20,
        // [theme.breakpoints.down('1324')]: {
        //     width: '75%',
        // },
        // [theme.breakpoints.down('1024')]: {
        //     width: '80%',
        // },
        // [theme.breakpoints.down('850')]: {
        //     width: '90%',
        // },
        // [theme.breakpoints.down('600')]: {
        //     width: '70%',
        //     // marginTop: 30,
        //     // marginBottom: 20,
        // },
    },
    media: {
        height:'25vw',
        width: '25vw' // 16:9
    },
    containerCard: {
        marginTop: 20,
    },
    description: {
        fontSize: 25,
    },
    price: {
        fontSize: 30,
        color: theme.palette.secondary.dark
    },
    disabledButton: {
        background: theme.palette.primary.dark,
    },
    button: {
        color: theme.palette.text.primary,
        background: theme.palette.secondary.main,
        '&:hover': {
            backgroundColor: theme.palette.secondary.dark,
            color: theme.palette.text.primary,
        },
    }
}));

export default function CardProduct({ product, quantity, setQuantity }) {
    const classes = useStyles();

    function handleIncrement() {
        setQuantity(quantity + 1);
    };

    function handleDecrement() {
        if (quantity > 1)
            setQuantity(quantity - 1);
    };


    return (
        <>
            <Grid
                className={classes.root}
                container
            >
                <Grid
                    align="center"
                    item xs={12} sm={12}
                >
                    <Card
                        className={classes.card}
                    >
                        <CardMedia
                            className={classes.media}
                            image={product.product.imageCard}
                            title="Paella dish"
                        />
                        <CardContent>
                            <Grid
                                xs={12} sm={12}>
                                <Typography
                                    className={classes.description}
                                    variant="h4"
                                    align="center"
                                >
                                    {product.product.description}
                                </Typography>
                            </Grid>
                            <Grid
                                className={classes.containerCard}
                                container
                            >
                                <Grid
                                    item
                                    xs={12} sm={2}>
                                    <Typography
                                        className={classes.price}
                                        variant="h3"
                                        align="center"
                                    >
                                        $ {product.product.price}
                                    </Typography>
                                </Grid>
                                <Grid
                                    align="center"
                                    item
                                    xs={12} sm={8} >
                                    <ButtonGroup aria-label="small outlined button group">
                                        <Button
                                            color="primary"
                                            onClick={() => {
                                                handleDecrement();
                                            }}
                                        >
                                            -
                                        </Button>
                                        <Button
                                            disabled
                                            className={classes.disabledButton}
                                        >
                                            {quantity}
                                        </Button>
                                        <Button
                                            color="primary"
                                            onClick={() => {
                                                handleIncrement();
                                            }}
                                        >
                                            +
                                        </Button>
                                    </ButtonGroup>
                                </Grid>
                                <Grid
                                    item
                                    xs={12} sm={2}>
                                    <Button
                                        className={classes.button}
                                        color="secondary"
                                        variant="contained"
                                    // component={Link}
                                    // to={`/products/${product.id}`}
                                    >
                                        Comprar
                                    </Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

        </>
    );
}
