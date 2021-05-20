import {
  Box,
  Grid,
  makeStyles,
  TextField,
  Typography,
  Button,
} from "@material-ui/core";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  mainContainer: {
    backgroundColor: theme.palette.primary.light,
    padding: "30px",
    height: "100vh",
  },

  gridHero: {
    height: "50%",
  },

  inputCode: {
    backgroundColor: "#fff",
    flexGrow: 1,
  },

  validateButton: {
    height: "55px",
  },
}));

const Hero = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.mainContainer}>
        <Grid item lg={6} md={6} sm={12} className={classes.gridHero}>
          <Typography align="center" variant="h1" color="initial">
            <h3>Imagen</h3>
          </Typography>
        </Grid>
        <Grid
          container
          spacing={2}
          item
          lg={6}
          md={6}
          sm={12}
          alignItems="center"
          className={classes.gridHero}
        >
          <Typography variant="h2" color="initial" align="center">
            Bienvenido a LibroApp
          </Typography>
          <Typography variant="subtitle1" color="initial" align="justify">
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
          <Grid container>
            <TextField
              className={classes.inputCode}
              label="Ingrese su código de compra:"
              id="outlined-size-normal"
              variant="outlined"
            />

            <Button
              variant="contained"
              color="primary"
              // fullWidth
              endIcon={<DoubleArrowIcon />}
              className={classes.validateButton}
            >
              Validar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Hero;
