import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        background: theme.palette.primary.main,
        textAlign: 'center'
    },
    button: {
        color: theme.palette.text.primary,
        background: theme.palette.secondary.main,
        '&:hover': {
            backgroundColor: theme.palette.secondary.dark,
            color: theme.palette.text.primary,
        },
    },
    action: {
        background: theme.palette.primary.main,
        display: 'flex',
        flexDirection: 'column',
    },
    check: {
        width: '20vw',
        marginBottom: 10,
        '&:hover': {
            backgroundColor: theme.palette.secondary.dark,
            color: theme.palette.text.primary,
        },
    },
    content: {
        background: theme.palette.primary.main,
        textAlign: 'center',
    },
    imageStyle: {
        width: '25vw',
        height: '25vw',
    },
    quantityStyle: {
        //background: 'green', 
        textAlign: 'left'
    },
    priceStyle: {
        //background: 'red', 
        textAlign: 'right'
    }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

export default function Card({ item, quantity }) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button
                className={classes.button}
                color="secondary"
                variant="contained"
                onClick={handleClickOpen}
            >
                Comprar
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle className={classes.container} id="alert-dialog-slide-title">{item.product.name}</DialogTitle>
                <DialogContent className={classes.content}>
                    <img
                        className={classes.imageStyle}
                        src={item.product.imageCard}
                        alt='item'
                    />
                    <DialogContentText id="alert-dialog-slide-description">
                        <Grid container>
                            <Grid item alling='left' xs={12} sm={6} className={classes.quantityStyle}>
                                {quantity} {quantity > 1 ? 'Productos':'Producto'}
                            </Grid>
                            <Grid item alling='left' xs={12} sm={6} className={classes.priceStyle}>
                                Total: {quantity * item.product.price} $
                            </Grid>
                        </Grid>
                    </DialogContentText>
                </DialogContent>
                <DialogActions className={classes.action}>
                    <Button className={classes.check}
                        onClick={handleClose}
                        size='small'
                        variant="contained"
                        color="secondary"
                        component={Link}
                        to={`/checkout/${item.product.id}/${quantity}`}
                    >
                        Checkout
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
