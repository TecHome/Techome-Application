import React from 'react';
import { Grid, Typography, Card, ButtonGroup, Button, CardMedia, CardContent, makeStyles } from '@material-ui/core';
import Chart from '../../Common/Chart';

const useStyles = makeStyles((theme) => ({
    root: {
        justify: "center",
        marginRight: '5vw',
        marginLeft: '5vw',
        width: '90vw',
    },
    card: {
        color: theme.palette.primary.main,
        width: '50%',
        marginTop: 50,
    },
    media: {
        height: '25vw',
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
        }
    }
}));

export default function CardConsole({ console, quantity, setQuantity }) {
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
            <Grid className={classes.root} container>
                <Grid align="center" item xs={12} sm={12}>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.media}
                            image={console.product.imageCard}
                            title="Paella dish"
                        />
                        <CardContent>
                            <Grid xs={12} sm={12}>
                                <Typography
                                    className={classes.description}
                                    variant="h4"
                                    align="center"
                                >
                                    {console.product.description}
                                </Typography>
                            </Grid>
                            <Grid className={classes.containerCard} container>
                                <Grid item xs={12} sm={2}>
                                    <Typography
                                        className={classes.price}
                                        variant="h3"
                                        align="center"
                                    >
                                        $ {console.product.price}
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
                                    <Chart
                                        item={console}
                                        quantity={quantity}
                                    />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
}