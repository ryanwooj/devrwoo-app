import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    paddingTop: '1rem',
    width: '100%',
    left: 0,
    bottom: 0,
    textTransform: 'capitalize',
    background: 'rgba(255, 255, 255, 0.9)',
    '&:hover': {
      background: '#fff',
      color: '#000'
    },
    color: '#000',
    textAlign: 'center'
  },
  root2: {
    paddingTop: '1rem',
    width: '100%',
    position: 'absolute',
    left: 0,
    bottom: 0,
    background: 'rgba(255, 255, 255, 0.9)',
    '&:hover': {
      background: '#fff',
      color: '#000'
    },
    color: '#000',
    textAlign: 'center'
  }
});

const Footer = ({ location, lang: { loading, currentLanguage } }) => {
  const classes = useStyles();

  const lang = currentLanguage;

  return (
    !loading && (
      <Paper
        className={
          location.pathname === '/dashboard' ? classes.root2 : classes.root
        }
        elevation={3}>
        <Container maxWidth='xl'>
          <Grid
            container
            direction='column'
            alignItems='flex-start'
            justify='flex-start'>
            <Grid container>
              <Grid item xs={9}>
                <Button>{lang.footer.one}</Button>
                <Button>{lang.footer.two}</Button>
                <Button>{lang.footer.three}</Button>
                <Button>{lang.footer.four}</Button>
              </Grid>
              <Grid item xs={3}>
                <Button>{lang.footer.five}</Button>
              </Grid>
            </Grid>
            <Grid
              container
              direction='row'
              justify='center'
              style={{ marginTop: '1rem', marginBottom: '1rem' }}>
              <Typography variant='body1'>{lang.footer.bottom}</Typography>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    )
  );
};

const mapStateToProps = state => ({
  lang: state.language
});
export default connect(mapStateToProps)(withRouter(Footer));
