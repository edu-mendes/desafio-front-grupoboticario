import React from "react";
import 'fontsource-roboto';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import PurchaseListing from "./components/PurchaseListing";
import PurchaseRegister from "./components/PurchaseRegister";
import { createMuiTheme } from '@material-ui/core/styles';
import { MuiThemeProvider } from "@material-ui/core";


const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#007E78",
    }
  },
});


function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route exact path="/account">
            <RegisterPage />
          </Route>
          <Route exact path="/register">
            <PurchaseListing />
          </Route>
          <Route exact path="/purchase">
            <PurchaseRegister />
          </Route>
          <Route path="/">
            <div>
              <h4>Opa! 404!</h4>
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>

  );
}

export default App;
