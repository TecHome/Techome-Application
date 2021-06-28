import React, { useEffect, useState } from 'react';
import Header from '../../layouts/Header'
import { Grid, CircularProgress, makeStyles } from '@material-ui/core';
import { getPCById } from '../../services/pc';
import HeaderPC from './Common/Header';
import CardPC from './Common/Card';
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

export default function SinglePC(props) {

    const classes = useStyles();

    const [quantity, setQuantity] = useState(1);
    const [pc, setPC] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getDataPC(props.match.params.id);
        window.scrollTo(0, 0);
    }, [props.match.params.id]);

    function getDataPC(id) {
        getPCById(id)
            .then((response) => {
                return response.data;
            })
            .then((response) => {
                setPC(response.response);
                setLoading(false);
            });
    }

    return (
        <>
            <Header item={'PCs'} />

            <Grid className={classes.container} container  >
                {!loading ?
                    <>
                        <HeaderPC
                            pc={pc}
                        />

                        <CardPC
                            pc={pc}
                            quantity={quantity}
                            setQuantity={setQuantity}
                        />

                        <Specs
                            pc={pc}
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
