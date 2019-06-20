import React, { useState } from 'react';
import AboutExperience from './AboutExperience';
import AboutEducation from './AboutEducation';
import AboutWork from './AboutWork';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';

const About = () => {
  const classes = useStyles();

  const [value, setValue] = useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <AppBar position='static' color='default'>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor='primary'
            textColor='primary'
            variant='fullWidth'>
            <Tab label='Experience' />
            <Tab label='Education' />
            <Tab label='Works' />
          </Tabs>
        </AppBar>
      </Grid>
      <Grid item xs={12}>
        <Paper>
          {value === 0 && <AboutExperience />}
          {value === 1 && <AboutEducation />}
          {value === 2 && <AboutWork username='ryanwooj' />}
        </Paper>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgorundColor: theme.palette.common.white
    }
  },
  root: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10)
  }
}));

export default About;
