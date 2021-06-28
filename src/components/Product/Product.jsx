import React, { useEffect, useState } from 'react';
import Header from '../../layouts/Header'
import { Grid, CircularProgress, makeStyles } from '@material-ui/core';
import { getProductById } from '../../services/product';
import HeaderProduct from './Common/Header';
import CardProduct from './Common/Card';
import Specs from './Common/Specs';

const useStyles = makeStyles((theme) => ({
    container: {
        background: theme.palette.primary.main,
    },
    loader: {
        color: theme.palette.secondary.main,
        marginTop: '33vh',
        marginBottom: '34vh',
    }
}));

export default function SingleProduct(props) {

    const classes = useStyles();

    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getDataProduct(props.match.params.id);
        window.scrollTo(0, 0);
    }, [props.match.params.id]);

    function getDataProduct(id) {
        getProductById(id)
            .then((response) => {
                return response.data;
            })
            .then((response) => {
                setProduct(response.response);
                setLoading(false);
            });
    }

    return (
        <>
            <Header item={'Products'} />

            <Grid className={classes.container} container  >
                {!loading ?
                    <>
                        <HeaderProduct
                            product={product}
                        />

                        <CardProduct
                            product={product}
                            quantity={quantity}
                            setQuantity={setQuantity}
                        />

                        <Specs
                            product={product}
                        />

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
