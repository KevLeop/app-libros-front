import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";
import { cyan } from "@material-ui/core/colors";

const Tema = createMuiTheme({
  palette: {
    primary: {
      main: cyan[300],
      light: cyan[50],
    },
    secondary: {
      main: green[500],
    },
  },
});

export default Tema;
