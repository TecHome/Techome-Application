import React from 'react';
import { Grid, Table, TableBody, TableCell, TableContainer, TableRow, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: 50,
        textAlign: 'center'
    },
    table: {
        marginTop: 50,
        width: '40vw'
    },
    text: {
        fontSize: 18
    },
    row: {
        //marginLeft: 500
    },
    space: {
        width: '10vw'
    },
    main:{
        marginBottom:1
    }
}));



export default function Info({ user }) {
    const classes = useStyles();

    return (
        <>
            <Grid
                align="center"
                item xs={12} sm={12}
                className={classes.main}
            >
                <TableContainer >
                    <Table className={classes.table} aria-label="simple table">
                        <TableBody className={classes.body}>

                            {user.name ?
                                <TableRow className={classes.row} key='name'>
                                    <TableCell align="left" component="th" scope="row" className={classes.space} />
                                    <TableCell align="left" component="th" scope="row" className={classes.text} >Nombres</TableCell>
                                    <TableCell align="left" className={classes.text} >{user.name}</TableCell>
                                </TableRow>
                                : null
                            }

                            {user.lastname ?
                                <TableRow className={classes.row} key='lastname'>
                                    <TableCell align="left" component="th" scope="row" className={classes.space} />
                                    <TableCell align="left" component="th" scope="row" className={classes.text} >Apellidos</TableCell>
                                    <TableCell align="left" className={classes.text} >{user.lastname}</TableCell>
                                </TableRow>
                                : null
                            }

                            {user.email ?
                                <TableRow className={classes.row} key='email'>
                                    <TableCell align="left" component="th" scope="row" className={classes.space} />
                                    <TableCell align="left" component="th" scope="row" className={classes.text} >Correo</TableCell>
                                    <TableCell align="left" className={classes.text} >{user.email}</TableCell>
                                </TableRow>
                                : null
                            }

                            {user.phone ?
                                <TableRow className={classes.row} key='phone'>
                                    <TableCell align="left" component="th" scope="row" className={classes.space} />
                                    <TableCell align="left" className={classes.text} >Telefono</TableCell>
                                    <TableCell align="left" className={classes.text} >{user.phone}</TableCell>
                                </TableRow>
                                : null
                            }

                            {user.address ?
                                <TableRow className={classes.row} key='address'>
                                    <TableCell align="left" component="th" scope="row" className={classes.space} />
                                    <TableCell align="left" component="th" scope="row" className={classes.text} >Direccion</TableCell>
                                    <TableCell align="left" className={classes.text} >{user.address}</TableCell>
                                </TableRow>
                                : null
                            }

                            {user.city ?
                                <TableRow className={classes.row} key='city'>
                                    <TableCell align="left" component="th" scope="row" className={classes.space} />
                                    <TableCell align="left" component="th" scope="row" className={classes.text} >Ciudad</TableCell>
                                    <TableCell align="left" className={classes.text} >{user.city}</TableCell>
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
