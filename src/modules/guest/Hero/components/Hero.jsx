import {
  Box,
  Grid,
  makeStyles,
  TextField,
  Typography,
  Button,
  CssBaseline,
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    height: "100vh",
  },
  image: {
    // flex: 5,
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  mainContainer: {
    backgroundColor: theme.palette.primary.light,
    padding: "30px",
    height: "100vh",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "90vh",
  },

  validateButton: {
    height: "54px",
    flexGrow: 2,
  },
}));

const Hero = () => {
  const classes = useStyles();
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography variant="h2" color="initial" align="center" gutterBottom>
            Bienvenido a LibroApp
          </Typography>
          <Typography
            variant="subtitle1"
            color="initial"
            align="justify"
            paragraph
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Typography>
          <Grid container justify="space-around">
            <Grid xs={12} sm={12} md={8}>
              <TextField
                label="Ingrese su código de compra:"
                id="outlined-size-normal"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid xs={12} sm={12} md={4}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                endIcon={<DoubleArrowIcon />}
                className={classes.validateButton}
              >
                Validar
              </Button>
            </Grid>
          </Grid>
        </div>
      </Grid>
      <Grid item lg={6} md={6} sm={12} className={classes.gridHero}></Grid>
      <Grid
        container
        spacing={2}
        item
        lg={6}
        md={6}
        sm={12}
        alignItems="center"
        className={classes.gridHero}
      ></Grid>
    </Grid>
  );
};

export default Hero;
