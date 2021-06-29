import React, { useEffect, useState } from 'react';
import Header from '../../layouts/Header';
import { Grid, CircularProgress, makeStyles } from '@material-ui/core';
import HeaderConsole from './Common/Header';
import CardConsole from './Common/Card';
import Specs from './Common/Specs';
import { getConsolesById } from '../../services/console';

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

export default function SingleConsole(props) {
    const classes = useStyles();

    const [quantity, setQuantity] = useState(1);
    const [console, setConsole] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getDataConsole(props.match.params.id);
        window.scrollTo(0, 0);
    }, [props.match.params.id]);

    function getDataConsole(id) {
        getConsolesById(id)
            .then((response) => {
                return response.data;
            })
            .then((response) => {
                setConsole(response.response);
                setLoading(false);
            });
    }

    return (
        <>
        <Header item={'Consoles'} />
        <Grid className={classes.container} container>
        {!loading ?
            <>
                <HeaderConsole console={console}/>
                <CardConsole
                    console={console}
                    quantity={quantity}
                    setQuantity={setQuantity}
                />
                <Specs console={console}/>
            </>
            :
            <Grid align="center" item xs={12} sm={12}>
                <CircularProgress className={classes.loader} />
            </Grid>
        }
        </Grid>
    </>
    );
}