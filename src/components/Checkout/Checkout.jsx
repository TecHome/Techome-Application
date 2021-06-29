import React, { useState, useEffect } from 'react';
import { makeStyles, TextField, Grid, Button, Card, CardActionArea, CardContent, Typography, CardHeader, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress } from '@material-ui/core';
import { getItemById } from '../../services/item';
import { getUserById } from '../../services/user';
import { createOrder } from '../../services/order';
import Confirm from './Modal';

import Header from '../../layouts/Header';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    background: theme.palette.primary.main,
    //background:'red',
    borderRadius: 7,
    "&:hover": {
      transform: "translateY(-5px)"
    }
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '26ch',
  },
  rootGrid: {
    flexGrow: 1,
  },
  container: {
    padding: '45px 250px 45px 150px',
  },
  table: {
    minWidth: 500,
  },
  backgroundColorTextNavBar: {
    color: theme.palette.text.primary,
    background: theme.palette.primary.main,
    marginTop: -5,
    fontSize: '40px'
  },
  headerCard: {
    backgroundColor: "#EBEBEB",
    height: 50,
    fontSize: 40,
    marginTop: -10,
    marginLeft: -10,
    marginRight: -10,
    color: '#C7522D'
  },
  focus: {
    "&&&": {
      opacity: 0
    }
  },
  ripple: {
    color: "#C7522D"
  },
  checoutStyle: {
    height: '600px',
    marginTop: 20,
    marginLeft: -15,
    [theme.breakpoints.down('1630')]: {
      height: '670px'
    },
    [theme.breakpoints.down('1602')]: {
      height: '790px',
    },
    [theme.breakpoints.down('1293')]: {
      height: '850px'
    },
  },
  loader: {
    color: theme.palette.secondary.main,
    marginTop: '9.4vh',
    marginBottom: '34vh',
  },
  visible: {
    background: theme.palette.primary.main,
  },
  invisible: {
    background: 'none',
  },
  mensaje: {
    marginTop: '20vh',
    color: theme.palette.secondary.main
  }
}));

export default function LayoutTextFields(props) {
  const classes = useStyles();
  const shipping = useState(3)
  const [quantity, setQuantity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [product, setProduct] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setQuantity(parseInt(props.match.params.quantity))
    getProduct(props.match.params.id);
    getUsers();
    window.scrollTo(0, 0);
  }, [props.match.params.id]);

  function getUsers() {
    getUserById(2)
      .then((response) => {
        return response.data;
      })
      .then((response) => {
        setUser(response.response)

      })
  }

  function getProduct(id) {
    getItemById(id)
      .then((response) => {
        return response.data;
      })
      .then((response) => {
        setProduct(response.response)
        setLoading(false);
      })
      .then(() => {

      })
  }

  function postOrder() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var hour = String(today.getHours()) + ':' + String(today.getMinutes())
    today = dd + '/' + mm + '/' + yyyy + ' ' + hour;
    var tomorrow = 30 + '/' + mm + '/' + yyyy;
    var total = product.price * quantity + 3;

    createOrder({
      address: user.address,
      city: user.city,
      date: today,
      deliveryDate: tomorrow,
      price: total,
      shipping: 3,
      ProductId: product.id,
      UserId: user.id
    })
      .then(() => {
        setOpen(true);
      })

  }

  return (
    <>
      <Header item={'Chart'} />
      <div className={quantity === 0 ? classes.visible : classes.invisible}>
        <Grid container className={quantity === 0 ? classes.visible : classes.invisible}>
          <Grid xs={12} sm={12}
            className={quantity === 0 ? null : classes.invisible}>
            <Typography
              className={quantity === 0 ? classes.mensaje : classes.invisible}
              variant="h4"
              align="center"
            >
              {quantity === 0 ? 'Por favor seleccione un producto' : null}
            </Typography>
          </Grid>

        </Grid>
        {!loading && quantity !== 0 ?
          <>
            <div className={classes.backgroundColorTextNavBar}>
              <p align="center" style={{ fontSize: 30, height: 60 }}>Pago Seguro - Checkout</p>
            </div>
            <CardHeader></CardHeader>
            <div className={classes.rootGrid}>
              <Grid container >
                <Grid align="center" item xs={6} >
                  <div style={{ marginLeft: '5vw', marginRight: '8.5vw', marginBottom: '5vw' }}>
                    <div className={classes.root}  >
                      <div className={classes.checoutStyle}>
                        <div style={{ width: '30vw' }}>
                          {user ?
                            <TextField
                              id="standard-full-width"
                              value={user.email}
                              label="1. Información del Contacto"
                              style={{ margin: 10 }}
                              placeholder="Correo electrónico"
                              fullWidth
                              margin="normal"
                              color="secondary"
                              InputLabelProps={{
                                shrink: true,
                              }}
                            />
                            : null}
                        </div>

                        <div style={{ width: '30vw', marginTop: 5, marginLeft: -15 }}>
                          {user ?
                            <TextField
                              id="standard-full-width"
                              value={user.name}
                              label="2. Información del Envío"
                              style={{ margin: 10 }}
                              placeholder="Nombre"
                              fullWidth
                              margin="normal"
                              color="secondary"
                              className={classes.textField}
                              InputLabelProps={{
                                shrink: true,
                              }}
                            />
                            : null}
                          {user ?
                            <TextField
                              id="standard-full-width"
                              value={user.lastname}
                              label=" "
                              style={{ margin: 10 }}
                              placeholder="Apellido"
                              fullWidth
                              margin="normal"
                              color="secondary"
                              className={classes.textField}

                              InputLabelProps={{
                                shrink: true,
                              }}
                            />
                            : null}
                        </div>
                        <div style={{ width: '30vw', marginTop: 5, marginLeft: -5 }}>

                          {user ?
                            <TextField
                              id="standard-full-width"
                              value={user.address}
                              style={{ margin: 8 }}
                              placeholder="Dirección"
                              fullWidth
                              margin="normal"
                              color="secondary"
                              InputLabelProps={{
                                shrink: true,
                              }}
                            />
                            : null}
                        </div>

                        <div style={{ width: '30vw', marginTop: 5, marginLeft: -15 }}>
                          {user ?
                            <TextField
                              id="standard-full-width"
                              label=" "
                              style={{ margin: 8 }}
                              placeholder="Teléfono"
                              fullWidth
                              margin="normal"
                              color="secondary"
                              className={classes.textField}
                              InputLabelProps={{
                                shrink: true,
                              }}
                            />
                            : null}
                          {user ?
                            <TextField
                              id="standard-full-width"
                              value={user.phone}
                              label=" "
                              style={{ margin: 8 }}
                              placeholder="Celular"
                              fullWidth
                              margin="normal"
                              color="secondary"
                              className={classes.textField}
                              InputLabelProps={{
                                shrink: true,
                              }}
                            />
                            : null}
                        </div>
                        <div>
                          {user ?
                            <TextField
                              id="standard-full-width"
                              value={user.city}
                              label=" "
                              style={{ margin: 8 }}
                              placeholder="Cuidad"
                              fullWidth
                              margin="normal"
                              color="secondary"
                              className={classes.textField}
                              InputLabelProps={{
                                shrink: true,
                              }}
                            />
                            : null}
                          {user ?
                            <TextField
                              id="standard-full-width"
                              label=" "
                              style={{ margin: 8 }}
                              placeholder="Zona"
                              fullWidth
                              margin="normal"
                              color="secondary"
                              className={classes.textField}
                              InputLabelProps={{
                                shrink: true,
                              }}
                            />
                            : null}
                        </div>


                        <div style={{ width: '30vw', marginTop: 5, marginLeft: -5 }}>
                          <TextField
                            id="standard-full-width"
                            label="3. Tiempo de Entrega Estimado"
                            style={{ margin: 8 }}
                            value="Llegará en 1 Día"
                            disabled
                            placeholder="Tiempo estimado de Entrega"
                            fullWidth
                            margin="normal"
                            color="secondary"
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                        </div>

                        <div style={{ width: '30vw', marginTop: 5, marginLeft: -5 }}>
                          <TextField
                            id="standard-full-width"
                            label="4. Pago Seguro"
                            style={{ margin: 8 }}
                            placeholder="Número de Tarjeta"
                            fullWidth
                            margin="normal"
                            color="secondary"
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                        </div>
                        <div style={{ width: '30vw', marginLeft: -15 }}>
                          <TextField
                            id="standard-full-width"
                            label=" "
                            style={{ margin: 8 }}
                            placeholder="Expiración"
                            fullWidth
                            margin="normal"
                            color="secondary"
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
                            color="secondary"
                            className={classes.textField}
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                        </div>
                        <div style={{ marginLeft: '30vw', marginTop: '1vw', marginBottom: '1vw' }}>
                          <Button size="small" variant="contained" color="secondary" onClick={() => { postOrder() }}>
                            Confirmar
                          </Button>
                          <Confirm open={open} setOpen={setOpen} />
                        </div>
                      </div>
                    </div>
                  </div>

                </Grid>
                {product ?
                  <Grid align="center" item xs={6}>
                    <div style={{ marginTop: '1vw', marginLeft: '5vw', marginRight: '5vw', marginBottom: '5vw' }}>
                      <Card className={classes.root} style={{ backgroundColor: "#151515" }}>
                        <CardActionArea
                          classes={{ focusHighlight: classes.focus }}
                          TouchRippleProps={{ className: classes.ripple }}
                        >
                          <CardContent>
                            <Typography gutterBottom variant="h3" className={classes.headerCard}>
                              Orden
                            </Typography>

                            <Typography variant="body2" color="primary" component="p">
                              <div class="MuiCardHeader-root">
                                <div class="MuiCardHeader-avatar" >
                                  <img src={product.imageCard} alt="SuperMall" width="220" height="210"></img>
                                </div>
                                <div class="MuiCardHeader-content">

                                  <span class="MuiTypography-root MuiCardHeader-title MuiTypography-body2 MuiTypography-displayBlock"
                                    style={{ fontSize: 20, color: "#EBEBEB", marginTop: -10 }}>{product.name}</span>
                                  <span class="MuiTypography-root MuiCardHeader-subheader MuiTypography-body2 MuiTypography-colorPrimary MuiTypography-displayBlock"
                                    style={{ fontSize: 18, color: "#EBEBEB", marginTop: 10, textAlign: 'left' }}>Marca: {product.brand}</span>
                                  <span class="MuiTypography-root MuiCardHeader-subheader MuiTypography-body2 MuiTypography-colorPrimary MuiTypography-displayBlock"
                                    style={{ fontSize: 18, color: "#EBEBEB", marginTop: 10, textAlign: 'left' }}>Codigo: {product.code}</span>
                                  {/* <span class="MuiTypography-root MuiCardHeader-subheader MuiTypography-body2 MuiTypography-colorPrimary MuiTypography-displayBlock"
                                  style={{ fontSize: 18, color: "#EBEBEB", marginTop: 10 }}>{quantity}</span> */}
                                  {/* <span class="MuiTypography-root MuiCardHeader-subheader MuiTypography-body2 MuiTypography-colorPrimary MuiTypography-displayBlock"
                            style={{ fontSize: 18, color: "#EBEBEB", marginTop: 10 }} >Descripcion</span> */}
                                  {/* <span class="MuiTypography-root MuiCardHeader-subheader MuiTypography-body2 MuiTypography-colorPrimary MuiTypography-displayBlock"
                                  style={{ fontSize: 18, color: "#EBEBEB", marginTop: 10, textAlign:'left' }}>Precio: {product.price}$</span> */}
                                  {/* <Button size="small" variant="contained" onClick={decreaseCounter}>
                            -
                          </Button>
                          <Button size="small" variant="contained" >
                            {counter}
                          </Button>
                          <Button size="small" variant="contained" onClick={increaseCounter}>
                            +
                          </Button> */}
                                </div>
                              </div>
                              <div class="MuiCardHeader-root">
                                <TableContainer component={Paper} style={{ backgroundColor: "transparent", marginTop: 5, width: '70vw' }}>
                                  <Table className={classes.table} aria-label="simple table">
                                    <TableHead>
                                      <TableRow >
                                        <TableCell style={{ color: "#C7522D", borderBottom: "none", textAlign: 'left' }} ></TableCell>
                                        <TableCell align="right" style={{ color: "#C7522D", borderBottom: "none", textAlign: 'left' }} >SubTotal</TableCell>
                                        <TableCell align="right" style={{ color: "#EBEBEB", borderBottom: "none", textAlign: 'center' }} >$ {product.price}</TableCell>
                                      </TableRow>
                                    </TableHead>
                                    <TableBody>

                                      <TableRow>
                                        <TableCell component="th" scope="row" style={{ borderBottom: "none" }}></TableCell>
                                        <TableCell align="right" style={{ color: "#C7522D", borderBottom: "none", textAlign: 'left' }} >Envio</TableCell>
                                        <TableCell align="right" style={{ color: "#EBEBEB", borderBottom: "none", textAlign: 'center' }} >$ {shipping}</TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell component="th" scope="row" style={{ color: "#EBEBEB", borderBottom: "none" }}>1 Producto</TableCell>
                                        <TableCell align="right" style={{ color: "#C7522D", borderBottom: "none", textAlign: 'left' }} >Total</TableCell>
                                        <TableCell align="right" style={{ color: "#EBEBEB", borderBottom: "none", textAlign: 'center' }} >$ {product.price * quantity + 3}</TableCell>
                                      </TableRow>

                                    </TableBody>
                                  </Table>
                                </TableContainer>
                              </div>
                              <TextField
                                id="standard-full-width"
                                style={{ margin: 10 }}
                                placeholder="Código de Descuento"
                                fullWidth
                                margin="normal"
                                color="secondary"
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
                  : null}
              </Grid>

            </div>
          </>
          :
          <Grid align="center" item xs={12} sm={12}>
            <CircularProgress className={classes.loader} />
          </Grid>
        }
      </div>
    </>
  );
}
