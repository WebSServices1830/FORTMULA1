import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';
import { darken } from '@material-ui/core/styles/colorManipulator';

import { Switch, BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import 'typeface-roboto';

import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import LogoutPage from './pages/LogoutPage';
import PremioPage from './pages/PremioPage';
import PremiosPage from './pages/PremiosPage';
import EscuderiaPage from './pages/EscuderiaPage';
import EscuderiasPage from './pages/EscuderiasPage';

function getTheme(uiTheme) {
  const theme = createMuiTheme({
    direction: uiTheme.direction,
    nprogress: {
      color: uiTheme.paletteType === 'light' ? '#000' : '#fff',
    },
    palette: { ...uiTheme.paletteColors, type: uiTheme.paletteType },
  });

  // Expose the theme as a global variable so people can play with it.
  if (process.browser) {
    window.theme = theme;
  }

  return theme;
}

const theme = getTheme({
  direction: 'ltr',
  paletteType: 'light',
  paletteColors: {
    primary: blue,
    secondary: {
      // Darken so we reach the AA contrast ratio level.
      main: darken(pink.A400, 0.08),
    },
  },
});

function DefaultRedirect(props) {
  return <Redirect to="/premios" />;
}

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <Route path="/premios/:id" component={PremioPage} />
            <Route exact path="/premios" component={PremiosPage} />
            <Route path="/escuderias/:id" component={EscuderiaPage} />
            <Route exact path="/escuderias" component={EscuderiasPage} />
            <Route exact path="/logout" component={LogoutPage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/" component={DefaultRedirect} />
          </Switch>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default (App);
