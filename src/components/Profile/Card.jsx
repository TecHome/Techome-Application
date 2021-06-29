import React from 'react';
import { Grid, Typography, Card, CardHeader, CardMedia, CardContent, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        justify: "center",
        marginRight: '5vw',
        marginLeft: '5vw',
        width: '90vw',
    },
    card: {
        color: theme.palette.primary.main,
        width: '40%',
        marginTop: 50,
    },
    media: {
        height: '20vw',
        width: '20vw' // 16:9
    },
    containerCard: {
        marginTop: 20,
    },
    description: {
        fontSize: 23,
    },
    price: {
        fontSize: 25,
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
    },
    subColor: {
        color:theme.palette.secondary.dark,
        fontSize:20
    }
}));

export default function MediaControlCard({order}) {
    const classes = useStyles();
   


    return (
        <>
            <Grid className={classes.root} container>
                <Grid align="center" item xs={12} sm={12}>
                    <Card className={classes.card}>
                        <CardHeader
                            titleTypographyProps={{ variant: 'h4' }}
                            className={classes.cardHeader}
                            title={ order.product.name}
                            subheaderTypographyProps={{ variant: 'h5' }}
                            subheader={<Typography className={classes.subColor}>{order.date}</Typography>}
                        />
                        <CardMedia
                            className={classes.media}
                            image={order.product.imageCard}
                            title="Paella dish"
                        />
                        <CardContent>
                            <Grid xs={12} sm={12}>
                                <Typography
                                    className={classes.description}
                                    variant="h4"
                                    align="center"
                                >
                                    El Pedido llegara {order.deliveryDate} a la ubicacion {order.user.city} - {order.user.address} 
                                </Typography>
                            </Grid>
                            <Grid className={classes.containerCard} container>
                                <Grid item xs={12} sm={6}>
                                    <Typography
                                        className={classes.price}
                                        variant="h3"
                                        align="center"
                                    >
                                        Code: {order.product.code}
                                    </Typography>
                                </Grid>
                                {/* <Grid
                                    align="center"
                                    item
                                    xs={12} sm={4} >
                                    <Typography
                                        className={classes.price}
                                        variant="h3"
                                        align="center"
                                    >
                                       Delivery: 3 $
                                    </Typography>
                                </Grid> */}
                                <Grid
                                    item
                                    xs={12} sm={6}>
                                    <Typography
                                        className={classes.price}
                                        variant="h3"
                                        align="center"
                                    >
                                        Total: {order.price} $
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
}
