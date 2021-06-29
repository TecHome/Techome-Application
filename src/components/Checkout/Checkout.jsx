import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Header from '../../layouts/Header'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import imageAudifono from '../../assets/images/audifono.jpg';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    background: theme.palette.primary.main
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
  rootGrid: {
    flexGrow: 1,
  },
  container: {
    padding: '45px 250px 45px 150px',
  },
  table: {
    minWidth: 650,
  },
  backgroundColorTextNavBar: {
    color: theme.palette.text.primary,
    background: theme.palette.primary.main,
    marginTop: -5,
    fontSize: '40px'
  },
}));

export default function LayoutTextFields() {
  const classes = useStyles();

  const [counter, setCounter] = useState(1);
  const increaseCounter = () => setCounter(counter + 1);
  const decreaseCounter = () => setCounter(counter - 1);
  return (
    <>
      <Header item={'Checkout'} />
      <div className={classes.backgroundColorTextNavBar}>
        <p align="center">Pago Seguro - Checkout</p>
      </div>
      <CardHeader></CardHeader>
      <div className={classes.rootGrid}>
        <Grid container >
          <Grid align="center" item xs={6} >
            <div style={{ marginLeft: '5vw', marginRight: '5vw', marginBottom: '5vw' }}>
              <div className={classes.root} >
                <div>
                  <div style={{ marginLeft: '1vw', marginRight: '1vw' }}>
                    <TextField
                      id="standard-full-width"
                      label="1. Información del Contacto"
                      style={{ margin: 8 }}
                      placeholder="Correo electrónico"
                      fullWidth
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </div>

                  <div style={{ marginLeft: '1vw', marginRight: '1vw' }}>
                    <TextField
                      id="standard-full-width"
                      label="2. Información del Envío"
                      style={{ margin: 8 }}
                      placeholder="Nombre"
                      fullWidth
                      margin="normal"
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <TextField
                      id="standard-full-width"
                      label=" "
                      style={{ margin: 8 }}
                      placeholder="Apellido"
                      fullWidth
                      margin="normal"
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <TextField
                      id="standard-full-width"
                      style={{ margin: 8 }}
                      placeholder="Dirección"
                      fullWidth
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </div>

                  <div style={{ marginLeft: '1vw', marginRight: '1vw' }}>
                    <TextField
                      id="standard-full-width"
                      label=" "
                      style={{ margin: 8 }}
                      placeholder="Teléfono"
                      fullWidth
                      margin="normal"
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <TextField
                      id="standard-full-width"
                      label=" "
                      style={{ margin: 8 }}
                      placeholder="Celular"
                      fullWidth
                      margin="normal"
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </div>
                  <div>
                    <TextField
                      id="standard-full-width"
                      label=" "
                      style={{ margin: 8 }}
                      placeholder="Cuidad"
                      fullWidth
                      margin="normal"
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <TextField
                      id="standard-full-width"
                      label=" "
                      style={{ margin: 8 }}
                      placeholder="Zona"
                      fullWidth
                      margin="normal"
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </div>


                  <div style={{ marginLeft: '1vw', marginRight: '1vw' }}>
                    <TextField
                      id="standard-full-width"
                      label="3. Tiempo de Entrega Estimado"
                      style={{ margin: 8 }}
                      placeholder="Llegará en 3 Días, en la Mañana"
                      fullWidth
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </div>

                  <div style={{ marginLeft: '1vw', marginRight: '1vw' }}>
                    <TextField
                      id="standard-full-width"
                      label="4. Pago Seguro"
                      style={{ margin: 8 }}
                      placeholder="Número de Tarjeta"
                      fullWidth
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </div>

                  <TextField
                    id="standard-full-width"
                    label=" "
                    style={{ margin: 8 }}
                    placeholder="Expiración"
                    fullWidth
                    margin="normal"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <TextField
                    id="standard-full-width"
                    label=" "
                    style={{ margin: 8 }}
                    placeholder="CVC"
                    fullWidth
                    margin="normal"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <div style={{ marginLeft: '30vw', marginTop: '1vw', marginBottom: '1vw' }}>
                    <Button size="small" variant="contained" color="secondary">
                      Confirmar
                    </Button>
                  </div>
                </div>
              </div>
            </div>

          </Grid>
          <Grid align="center" item xs={6}>
            <div style={{ marginTop: '1vw', marginLeft: '5vw', marginRight: '5vw', marginBottom: '5vw' }}>
              <Card className={classes.root} style={{ backgroundColor: "#EBEBEB" }}>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="p" color="secondary" style={{ backgroundColor: "#C4C4C4" }}>
                      <b>Orden</b>
                    </Typography>

                    <Typography variant="body2" color="primary" component="p">
                      <div class="MuiCardHeader-root">
                        <div class="MuiCardHeader-avatar" >
                          <img src={imageAudifono} alt="SuperMall" width="220" height="210"></img>
                        </div>
                        <div class="MuiCardHeader-content">

                          <span class="MuiTypography-root MuiCardHeader-title MuiTypography-body2 MuiTypography-displayBlock">Audifonos - HyperX CloudX Stinger</span>
                          <span class="MuiTypography-root MuiCardHeader-subheader MuiTypography-body2 MuiTypography-colorPrimary MuiTypography-displayBlock">$99.99</span>
                          <Button size="small" variant="contained" onClick={decreaseCounter}>
                            -
                          </Button>
                          <Button size="small" variant="contained" >
                            {counter}
                          </Button>
                          <Button size="small" variant="contained" onClick={increaseCounter}>
                            +
                          </Button>



                        </div>
                      </div>
                      <div class="MuiCardHeader-root">
                        <TableContainer component={Paper} style={{ backgroundColor: "#C4C4C4", marginTop: 5, width: '70vw' }}>
                          <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                              <TableRow >
                                <TableCell style={{ color: "red", borderBottom: "none" }} >Edit Cart</TableCell>
                                <TableCell align="right" style={{ color: "black", borderBottom: "none" }} >SubTotal</TableCell>
                                <TableCell align="right" style={{ color: "black", borderBottom: "none" }} >$99.99</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>

                              <TableRow>
                                <TableCell component="th" scope="row" style={{ borderBottom: "none" }}></TableCell>
                                <TableCell align="right" style={{ color: "black", borderBottom: "none" }} >Envio</TableCell>
                                <TableCell align="right" style={{ color: "black", borderBottom: "none" }} >$10.00</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell component="th" scope="row" style={{ color: "black", borderBottom: "none" }}>1 Producto</TableCell>
                                <TableCell align="right" style={{ color: "black", borderBottom: "none" }} >Total</TableCell>
                                <TableCell align="right" style={{ color: "black", borderBottom: "none" }} >$109.99</TableCell>
                              </TableRow>

                            </TableBody>
                          </Table>
                        </TableContainer>
                      </div>
                      <TextField
                        id="standard-full-width"
                        style={{ margin: 8 }}
                        placeholder="Código de Descuento"
                        fullWidth
                        margin="normal"
                        style={{ backgroundColor: "black", color: "blue" }}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          </Grid>
        </Grid>
      </div>


    </>
  );
}