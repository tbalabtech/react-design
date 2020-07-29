import React from 'react';
import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, MuiThemeProvider, Grid, Typography } from '@material-ui/core';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Products from './components/products/Products';
import ProductDetail from './components/products/ProductDetail';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';


const theme = createMuiTheme({
  typography: {
      fontFamily: [
          'Montserrat',
      ].join(','),
      color: '#393939',
  }
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    overflow: 'auto',
    backgroundColor: '#FBFDFF',
  },
  appBarSpacer: theme.mixins.toolbar,
  container: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(4),
    marginRight: 50,
    marginLeft: 50
  }
}));

function App() {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <div className={classes.root}>
          <Route path="/" component={Header}/>
          <main className={classes.content}>
            <div className={classes.appBarSpacer}/>
              <div className={classes.container}>
                <Route exact path="/" component={Products}/>
                <Route path="/product/:id" component={ProductDetail}/>
              </div>
          </main>
        </div>
        <Route path="/" component={Footer}/>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
