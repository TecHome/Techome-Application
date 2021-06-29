import React, { useState, useEffect } from 'react';
import { Grid, Typography, Divider, CircularProgress, makeStyles } from '@material-ui/core';
import Navbar from '../../layouts/Navbar';
import Header from './Header';
import Card from './Card';
import { getOrders } from '../../services/order'

const useStyles = makeStyles((theme) => ({
    container: {
        background: theme.palette.primary.main,
    },
    loader: {
        color: theme.palette.secondary.main,
        marginTop: '33vh',
        marginBottom: '34.6vh',
    },
    divider: {
        textAlign: 'center',
        marginRight: '5vw',
        marginLeft: '5vw',
        marginBottom: '4.4vw',
        marginTop: '4.5vw',
    },
    header: {
        marginTop: 20,
        textAlign: 'center',
        fontSize: 30,
        color: theme.palette.text.primary,
    },
    cardStyle: {

    }
}));

export default function Orders() {
    const classes = useStyles();
    const [loading, setLoading] = useState(true);
    const [orders, setOrders] = useState([])

    useEffect(() => {
        
        getOrdersData();
        window.scrollTo(0, 0);
    }, []);

    function getOrdersData() {
        getOrders()
            .then((response) => {
                return response.data;
            })
            .then((response) => {
                setOrders(response.response);
            })
            .then(()=>{
                setLoading(false);
            })
    }


    return (
        <>
            <Navbar item={'Profile'} />
            <Grid className={classes.container} container  >
                {!loading ?
                    <>
                        <Header item={'Orders'} />

                        {orders.map(order => (
                            <Grid
                                container
                            >
                                <Grid className={classes.cardStyle}
                                    align="center"
                                    item xs={12} sm={12}
                                >
                                    <Card order={order}></Card>
                                </Grid>


                            </Grid>
                        ))}

                    </>
                    :
                    <Grid
                        align="center"
                        item xs={12} sm={12}
                    >
                        <CircularProgress className={classes.loader} />
                    </Grid>
                }

            </Grid>
        </>
    );
}
