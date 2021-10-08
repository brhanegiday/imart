import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const defaultPalette = {
  primaryColorMain: "#ff9933",
  secondaryColorMain: "#8F8571",
  backgroundColorDefault: "#fff",
  backgroundColorPaper: "#f1f1f1",
  textPrimaryColor: "#5a5a5a",
  textSecondaryColor: "#655e50",
  textDisabledColor: "#808080",
};

let theme = createTheme({
  palette: {
    primary: {
      main: defaultPalette.primaryColorMain,
    },
    secondary: {
      main: defaultPalette.secondaryColorMain,
      light: "#e3e5e4",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: defaultPalette.backgroundColorDefault,
      paper: defaultPalette.backgroundColorPaper,
    },
    text: {
      primary: defaultPalette.textPrimaryColor,
      secondary: defaultPalette.textSecondaryColor,
      disabled: defaultPalette.textDisabledColor,
    },
  },
  typography: {
    // fontFamily: "PT sans, sans-serif",
    fontFamily: "Raleway, sans-serif",
  },
});

theme = responsiveFontSizes(theme);

export default theme;
