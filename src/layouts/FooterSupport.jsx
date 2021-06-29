import React, { Component } from 'react'
import { makeStyles, Grid, Typography, Divider } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';


const useStyles = makeStyles((theme) => ({
  container: {
    flexGrow: 1,
    textAlign: 'center',
    color: theme.palette.text.primary,
    background: theme.palette.primary.main,
  },
  textStyle: {
    color: theme.palette.text.secondary,
    fontSize: 18,
    padding: 0,
  },
  headerStyle: {
    color: theme.palette.text.primary,
    fontSize: 25,
    padding: 15,
  },
  divider: {
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 50,
    marginRight: 50,

  },
  gridStyle: {
    height: 50,
    backgroundColor: theme.palette.primary.main,
  },
  table: {
    marginTop: 50,
    width: '60vw'
  },
  text: {
    fontSize: 18
  },
  row: {
    backgroundColor: theme.palette.primary.main,
  },
}));

export default function FooterSupport() {
  const classes = useStyles();

  return (
    <>
      <Grid className={classes.container}>
        <Grid className={classes.gridStyle}>
          <Typography className={classes.headerStyle} variante='h6'>
            Asesores
          </Typography>
        </Grid>
        <Grid
          align="center"
          item xs={12} sm={12}
        >
          <TableContainer >
            <Table className={classes.table} aria-label="simple table">
              <TableBody>
                <TableRow className={classes.row} key='brand'>
                  <TableCell align="left" component="th" scope="row" className={classes.text} >Contacto</TableCell>
                  <TableCell align="left" className={classes.text} >Teléfono</TableCell>
                </TableRow>
                <TableRow className={classes.row} key='code'>
                  <TableCell align="left" component="th" scope="row" className={classes.text} >Adrian Mendoza M. </TableCell>
                  <TableCell align="left" className={classes.text} >+591 79338704</TableCell>
                </TableRow>
                <TableRow className={classes.row} key='weight'>
                  <TableCell align="left" component="th" scope="row" className={classes.text} >Giovanni Alcocer </TableCell>
                  <TableCell align="left" className={classes.text} >+591 76440489</TableCell>
                </TableRow>
                <TableRow className={classes.row} key='size'>
                  <TableCell align="left" className={classes.text} >Juan Jose Quiroga </TableCell>
                  <TableCell align="left" className={classes.text} >+591 76995009</TableCell>
                </TableRow>
                <TableRow className={classes.row} key='colors'>
                  <TableCell align="left" component="th" scope="row" className={classes.text} >Alejandra Cossio </TableCell>
                  <TableCell align="left" className={classes.text} >+591 77777777</TableCell>
                </TableRow>
                <TableRow className={classes.row} key='colors'>
                  <TableCell align="left" component="th" scope="row" className={classes.text} >Allen Vargas  </TableCell>
                  <TableCell align="left" className={classes.text} >+591 68342222</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Divider variant="fullWidth" />
      </Grid>
    </>
  )

}
