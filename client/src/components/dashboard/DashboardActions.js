import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const DashboardActions = ({ lang }) => {
  const classes = useStyles();

  return (
    <Box>
      <Grid
        container
        justify='center'
        alignContent='center'
        alignItems='center'>
        <Grid item xs={12} sm={12} md={4} className={classes.grid}>
          <Button
            variant='outlined'
            size='medium'
            to='/edit-profile'
            component={Link}
            className={classes.button}>
            {lang.dashboard.button1}
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={4} className={classes.grid}>
          <Button
            variant='outlined'
            size='medium'
            to='/add-experience'
            component={Link}
            className={classes.button}>
            {lang.dashboard.button2}
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={4} className={classes.grid}>
          <Button
            variant='outlined'
            size='medium'
            to='/add-education'
            component={Link}
            className={classes.button}>
            {lang.dashboard.button3}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

const useStyles = makeStyles(theme => ({
  button: {
    width: '100%',
    color: '#392f31'
  },
  grid: {
    padding: theme.spacing(1)
  }
}));

export default DashboardActions;
