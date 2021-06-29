import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
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

export default function TableConsole({ console }) {
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

                            {console.product.brand ?
                                <TableRow className={classes.row} key='brand'>
                                    <TableCell align="left" component="th" scope="row"  className={classes.text} >Marca</TableCell>
                                    <TableCell align="left"  className={classes.text} >{console.product.brand}</TableCell>
                                </TableRow>
                                : null
                            }

                            {console.product.code ?
                                <TableRow className={classes.row} key='code'>
                                    <TableCell align="left" component="th" scope="row"  className={classes.text} >Codigo</TableCell>
                                    <TableCell align="left" className={classes.text} >{console.product.code}</TableCell>
                                </TableRow>
                                : null
                            }

                            {console.size ?
                                <TableRow className={classes.row} key='size'>
                                    <TableCell align="left" component="th" scope="row" className={classes.text} >Dimensiones</TableCell>
                                    <TableCell align="left" className={classes.text} >{console.size}</TableCell>
                                </TableRow>
                                : null
                            }

                            {console.weight ?
                                <TableRow className={classes.row} key='weight'>
                                    <TableCell align="left" className={classes.text} >Peso</TableCell>
                                    <TableCell align="left" className={classes.text} >{console.weight}</TableCell>
                                </TableRow>
                                : null
                            }

                            {console.colors ?
                                <TableRow className={classes.row} key='colors'>
                                    <TableCell align="left" component="th" scope="row" className={classes.text} >Colores</TableCell>
                                    <TableCell align="left" className={classes.text} >{console.colors}</TableCell>
                                </TableRow>
                                : null
                            }

                            {console.controls ?
                                <TableRow className={classes.row} key='controls'>
                                    <TableCell align="left" component="th" scope="row" className={classes.text} >Controles</TableCell>
                                    <TableCell align="left" className={classes.text} >{console.controls}</TableCell>
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