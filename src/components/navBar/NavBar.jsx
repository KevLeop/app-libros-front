import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { Box, ThemeProvider } from "@material-ui/core";
import { Link, NavLink } from "react-router-dom";
import BookIcon from "@material-ui/icons/Book";
// import { Link } from "react-router-dom";
import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
  IconButton,
} from "@material-ui/core";
import ElevationScroll from "./ElevationScroll";
import Tema from "../../theme/Tema";

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  button: {
    backgroundColor: "transparent",
    color: "#fff",
    "&:hover": {
      backgroundColor: "transparent",
      color: "#439999",
    },
  },
  buttonLogo: {
    backgroundColor: "transparent",
    color: "#000",
    "&:hover": {
      backgroundColor: "transparent",
      color: "#fff",
    },
  },
  buttonLogin: {
    backgroundColor: "transparent",
    color: "#fff",

    "&:hover": {
      backgroundColor: "#fff",
      color: theme.palette.primary.main,
      fontWeight: "bolder",
    },
    borderWidth: "2.5px",
    borderRadius: 25,
    borderColor: "#fff",
  },

  navbarBehind: {
    backgroundColor: theme.palette.primary.main,
  },
}));

const NavBar = () => {
  // const [click, setClick] = useState(false);

  // const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);
  const classes = useStyles();
  return (
    <>
      <ThemeProvider theme={Tema}>
        <ElevationScroll>
          <AppBar position="fixed" color="primary">
            <Toolbar display="flex" alignItems="center">
              <Box display="flex">
                <NavLink to="/" style={{ textDecoration: "none" }}>
                  <Typography variant="h6" display="flex" alignItems="center">
                    <Button
                      startIcon={<BookIcon />}
                      className={classes.buttonLogo}
                      variant="text"
                      color="inherit"
                      disableRipple
                    >
                      AppLibros
                    </Button>
                  </Typography>
                </NavLink>
                <NavLink to="/" style={{ textDecoration: "none" }}>
                  <Button
                    className={classes.button}
                    variant="text"
                    color="inherit"
                    disableRipple
                  >
                    Inicio
                  </Button>
                </NavLink>
                <NavLink to="/" style={{ textDecoration: "none" }}>
                  <Button
                    className={classes.button}
                    variant="text"
                    color="inherit"
                    disableRipple
                  >
                    Nosotros
                  </Button>
                </NavLink>
              </Box>
              <Box display="flex" flexGrow={1} justifyContent="flex-end">
                <Button
                  className={classes.buttonLogin}
                  variant="outlined"
                  color="inherit"
                >
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    Login
                  </Link>
                </Button>
                <IconButton aria-label="" color="inherit">
                  <MenuIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
      </ThemeProvider>
      <div className={`${classes.offset} ${classes.navbarBehind}`}></div>
    </>
  );
};

export default NavBar;
