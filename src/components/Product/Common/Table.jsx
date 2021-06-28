import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: 50,
        textAlign: 'center'
    },
    table: {
        marginTop: 50,
        width: '60vw'
    },
    text: {
        fontSize:18
    },
    row: {
        //background: theme.palette.primary.dark
    },
}));

export default function BasicTable({ product }) {
    const classes = useStyles();

    return (
        <>
            <Grid
                align="center"
                item xs={12} sm={12}
            >
                <TableContainer >
                    <Table className={classes.table} aria-label="simple table">
                        <TableBody>

                            {product.product.brand ?
                                <TableRow className={classes.row} key='brand'>
                                    <TableCell align="left" component="th" scope="row"  className={classes.text} >Marca</TableCell>
                                    <TableCell align="left"  className={classes.text} >{product.product.brand}</TableCell>
                                </TableRow>
                                : null
                            }

                            {product.product.code ?
                                <TableRow className={classes.row} key='code'>
                                    <TableCell align="left" component="th" scope="row"  className={classes.text} >Codigo</TableCell>
                                    <TableCell align="left" className={classes.text} >{product.product.code}</TableCell>
                                </TableRow>
                                : null
                            }

                            {product.weight ?
                                <TableRow className={classes.row} key='weight'>
                                    <TableCell align="left" component="th" scope="row" className={classes.text} >Peso</TableCell>
                                    <TableCell align="left" className={classes.text} >{product.weight}</TableCell>
                                </TableRow>
                                : null
                            }

                            {product.size ?
                                <TableRow className={classes.row} key='size'>
                                    <TableCell align="left" className={classes.text} >Dimensiones</TableCell>
                                    <TableCell align="left" className={classes.text} >{product.size}</TableCell>
                                </TableRow>
                                : null
                            }

                            {product.colors ?
                                <TableRow className={classes.row} key='colors'>
                                    <TableCell align="left" component="th" scope="row" className={classes.text} >Colores</TableCell>
                                    <TableCell align="left" className={classes.text} >{product.colors}</TableCell>
                                </TableRow>
                                : null
                            }

                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </>
    );
}