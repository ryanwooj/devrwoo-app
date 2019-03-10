import React from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const NotFound = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWindth='lg' className={classes.root}>
        <Grid container direction='column' justify='center' alignItems='center'>
          <Grid item>
            <Typography variant='h1'>PAGE NOT FOUND</Typography>
          </Grid>
          <Grid item>
            <Typography variant='h2' color='secondary'>
              404 ERROR...{' '}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='h3'>
              This page does not exist. Don't Come back!
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'beige'
  }
}));

export default NotFound;
