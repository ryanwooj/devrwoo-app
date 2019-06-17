import React, { useState } from 'react';
import AboutExperience from './AboutExperience';
import AboutEducation from './AboutEducation';
import AboutWork from './AboutWork';

import Container from '@material-ui/core/Container';
import SwipeableViews from 'react-swipeable-views';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles, useTheme } from '@material-ui/core/styles';

function TabContainer({ children, dir }) {
  return (
    <Typography component='div' dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

const About = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [value, setValue] = useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }
  function handleChangeIndex(index) {
    setValue(index);
  }

  return (
    <Container maxWidth='lg' className={classes.root}>
      <div className={classes.root}>
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
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
          className={classes.contentContainer}>
          <TabContainer dir={theme.direction}>
            <AboutExperience />
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <AboutEducation />
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <AboutWork username='ryanwooj' />
          </TabContainer>
        </SwipeableViews>
      </div>
    </Container>
  );
};

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgorundColor: theme.palette.common.white
    }
  },
  root: {
    marginTop: theme.spacing(10)
  },
  contentContainer: {
    paddingBottom: theme.spacing(7)
  }
}));

export default About;
