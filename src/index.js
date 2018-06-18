import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import theme from "./theme";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter } from "react-router-dom";

// create le theme a partir de theme existant (objet)
const myTheme = createMuiTheme(theme);

ReactDOM.render(
  <BrowserRouter>
    <MuiThemeProvider theme={myTheme}>
      <App />
    </MuiThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
