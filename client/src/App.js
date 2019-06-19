import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Routes from './components/routing/Routes';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/auth';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const middleware = applyMiddleware(thunkMiddleware);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(middleware));

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  const classes = useStyles();
  return (
    <Provider store={store}>
      <Grid
        container
        direction='column'
        justify='space-between'
        className={classes.root}>
        <Router>
          <Grid container direction='column'>
            <CssBaseline />
            <Navbar />
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route component={Routes} />
            </Switch>
          </Grid>
          <Grid container direction='column' justify='flex-end'>
            <Footer />
          </Grid>
        </Router>
      </Grid>
    </Provider>
  );
};

const currentHeight = window.innerHeight;

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: currentHeight
  }
}));

export default App;
