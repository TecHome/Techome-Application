import React from 'react';
import Header from '../../layouts/Header'
import { makeStyles } from '@material-ui/core';
import Box  from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    consoleBanner: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80')`,
        height: "500px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontSize: "4rem",
        [theme.breakpoints.down("sm")]: {
            height: 300,
            fontSize: "3em"
        }
    },
    consolesTitle: {
        fontWeight: 800,
        paddingBottom: theme.spacing(3)
    },
    consolesContainer: {
        paddingTop: theme.spacing(3)
    },
    card: {
        maxWidth: "100%",
    },
    media: {
        height: 240
    },
}));

export default function Consoles() {
    const classes = useStyles();
    return (
        <>
            <Header item={'Consoles'}/>
            <h1>CONSOLES</h1>
            <Box className={classes.consoleBanner}>
                <Box>SWITCH</Box>
            </Box>
            <Container maxWidth="lg" className={classes.consolesContainer}>
                <Typography variant="h4" className={classes.consolesTitle}>
                    Consolas
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        React useContext
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        React useContext
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        React useContext
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}