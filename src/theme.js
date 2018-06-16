const theme = {
  palette: {
    primary: {
      light: "#e35183",
      main: "#ad1457",
      dark: "#78002e"
      // contrastText: will be calculated to contast with palette.primary.main
    },

    secondary: {
      light: "#bc477b",
      main: "#880e4f",
      dark: "#560027",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#ffcc00"
    },

    typography: {
      fontSize: 12,
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ].join(",")
      // error: will use the default color
    }
  }
};

export default theme;
