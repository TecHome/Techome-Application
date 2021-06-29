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
        fontSize: 18
    },
    row: {
        //background: theme.palette.primary.dark
    },
    space: {
        width: '7vw'
    }
}));

export default function BasicTable({ pc }) {
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

                            {pc.product.brand ?
                                <TableRow className={classes.row} key='brand'>
                                    <TableCell align="left" component="th" scope="row" className={classes.space} />
                                    <TableCell align="left" component="th" scope="row" className={classes.text} >Marca</TableCell>
                                    <TableCell align="left" className={classes.text} >{pc.product.brand}</TableCell>
                                </TableRow>
                                : null
                            }

                            {pc.product.code ?
                                <TableRow className={classes.row} key='code'>
                                    <TableCell align="left" component="th" scope="row" className={classes.space} />
                                    <TableCell align="left" component="th" scope="row" className={classes.text} >Codigo</TableCell>
                                    <TableCell align="left" className={classes.text} >{pc.product.code}</TableCell>
                                </TableRow>
                                : null
                            }

                            {pc.processor ?
                                <TableRow className={classes.row} key='processor'>
                                    <TableCell align="left" component="th" scope="row" className={classes.space} />
                                    <TableCell align="left" component="th" scope="row" className={classes.text} >Procesador</TableCell>
                                    <TableCell align="left" className={classes.text} >{pc.processor}</TableCell>
                                </TableRow>
                                : null
                            }

                            {pc.motherBoard ?
                                <TableRow className={classes.row} key='motherBoard'>
                                    <TableCell align="left" component="th" scope="row" className={classes.space} />
                                    <TableCell align="left" className={classes.text} >Tarjeta Madre</TableCell>
                                    <TableCell align="left" className={classes.text} >{pc.motherBoard}</TableCell>
                                </TableRow>
                                : null
                            }

                            {pc.sd ?
                                <TableRow className={classes.row} key='sd'>
                                    <TableCell align="left" component="th" scope="row" className={classes.space} />
                                    <TableCell align="left" component="th" scope="row" className={classes.text} >Memoria</TableCell>
                                    <TableCell align="left" className={classes.text} >{pc.sd}</TableCell>
                                </TableRow>
                                : null
                            }

                            {pc.ram ?
                                <TableRow className={classes.row} key='ram'>
                                    <TableCell align="left" component="th" scope="row" className={classes.space} />
                                    <TableCell align="left" component="th" scope="row" className={classes.text} >Ram</TableCell>
                                    <TableCell align="left" className={classes.text} >{pc.ram}</TableCell>
                                </TableRow>
                                : null
                            }

                            {pc.videoCard ?
                                <TableRow className={classes.row} key='videoCard'>
                                    <TableCell align="left" component="th" scope="row" className={classes.space} />
                                    <TableCell align="left" component="th" scope="row" className={classes.text} >Grafica</TableCell>
                                    <TableCell align="left" className={classes.text} >{pc.videoCard}</TableCell>
                                </TableRow>
                                : null
                            }

                            {pc.keyboard ?
                                <TableRow className={classes.row} key='keyboard'>
                                    <TableCell align="left" component="th" scope="row" className={classes.space} />
                                    <TableCell align="left" component="th" scope="row" className={classes.text} >Teclado</TableCell>
                                    <TableCell align="left" className={classes.text} >{pc.keyboard}</TableCell>
                                </TableRow>
                                : null
                            }

                            {pc.cooling ?
                                <TableRow className={classes.row} key='cooling'>
                                    <TableCell align="left" component="th" scope="row" className={classes.space} />
                                    <TableCell align="left" component="th" scope="row" className={classes.text} >Refrigeracion</TableCell>
                                    <TableCell align="left" className={classes.text} >{pc.cooling}</TableCell>
                                </TableRow>
                                : null
                            }

                            {pc.screen ?
                                <TableRow className={classes.row} key='screen'>
                                    <TableCell align="left" component="th" scope="row" className={classes.space} />
                                    <TableCell align="left" component="th" scope="row" className={classes.text} >Pantalla</TableCell>
                                    <TableCell align="left" className={classes.text} >{pc.screen}</TableCell>
                                </TableRow>
                                : null
                            }

                            {pc.mouse ?
                                <TableRow className={classes.row} key='mouse'>
                                    <TableCell align="left" component="th" scope="row" className={classes.space} />
                                    <TableCell align="left" component="th" scope="row" className={classes.text} >Mouse</TableCell>
                                    <TableCell align="left" className={classes.text} >{pc.mouse}</TableCell>
                                </TableRow>
                                : null
                            }

                            {pc.speakers ?
                                <TableRow className={classes.row} key='speakers'>
                                    <TableCell align="left" component="th" scope="row" className={classes.space} />
                                    <TableCell align="left" component="th" scope="row" className={classes.text} >Sonido</TableCell>
                                    <TableCell align="left" className={classes.text} >{pc.speakers}</TableCell>
                                </TableRow>
                                : null
                            }

                            {pc.powerUsage ?
                                <TableRow className={classes.row} key='powerUsage'>
                                    <TableCell align="left" component="th" scope="row" className={classes.space} />
                                    <TableCell align="left" component="th" scope="row" className={classes.text} >Bateria</TableCell>
                                    <TableCell align="left" className={classes.text} >{pc.powerUsage}</TableCell>
                                </TableRow>
                                : null
                            }

                            {pc.case ?
                                <TableRow className={classes.row} key='case'>
                                    <TableCell align="left" component="th" scope="row" className={classes.space} />
                                    <TableCell align="left" component="th" scope="row" className={classes.text} >Case</TableCell>
                                    <TableCell align="left" className={classes.text} >{pc.case}</TableCell>
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