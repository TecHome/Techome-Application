import React from 'react';
import { Divider, Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    info:{
        flexGrow: 1,
        textAlign:'center',
        background:theme.palette.primary.main
    },
    textStyle: {
        color: theme.palette.text.secondary,
        fontSize: 14,
        padding: 8
    },
    numberStyle: {
        color: theme.palette.text.secondary,
        fontSize: 13,
        marginTop: 3,
        padding: 7
    },
    infoStyle: {
        color: theme.palette.secondary.light,
        fontSize: 15,
        padding: 8
    },
    containerCenter: {
        flexGrow: 1,
        textAlign: 'center',
    },
    containerRight: {
        textAlign: 'right',
        color: theme.palette.text.main
    },
    divider:{
        marginLeft: 50,
        marginRight: 50
    }
}));

export default function Info() {
    const classes = useStyles();

    return (
        <>
            <div className={classes.info}  >
             
                    <Grid container >
                        <Grid item xs={3}>
                            <Grid container >
                            <Typography className={classes.infoStyle} variante='h6' >
                                Contactanos
                            </Typography>
                            <Typography className={classes.numberStyle} variante='h6' >
                                +591 77777777
                            </Typography>
                            <Typography className={classes.textStyle} variante='h6' >
                                techome@gmail.com
                            </Typography>
                            </Grid>
                        </Grid>

                        <Grid className={classes.containerCenter} item xs={6} >
                    
                            <Typography className={classes.textStyle} variante='h6' >
                                SuperMall # 7 Horario de Atencion: Lun - Sab de 10:00 - 20:00
                            </Typography>
                            
                        </Grid>


                            {/* <Grid  className={classes.containerRight} item xs={3}>
                            <Grid container  >
                            <Typography className={classes.infoStyle} variante='h6' >
                                    Contactanos
                                </Typography>
                            
                                <Typography className={classes.textStyle} variante='h6' >
                                    techome@gmail.com
                                </Typography>
                                </Grid>
                            </Grid> */}
                    </Grid>
                   

            </div>
            <Divider className={classes.divider}/>
        </>
    );
}
