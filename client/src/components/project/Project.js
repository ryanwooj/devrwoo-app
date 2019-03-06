import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import keyboard from '../../images/keyboard.jpg';
import emile from '../../images/emile.jpg';
import wooConnect from '../../images/wooConnect.png';
import wooStream from '../../images/wooStream.png';
import movieApp from '../../images/movieApp.png';

const Project = ({ lang: { loading, currentLanguage } }) => {
  const classes = useStyles();

  return (
    !loading && (
      <Container maxWidth='xl' className={classes.root}>
        <Carousel
          className={classes.carousel}
          autoPlay={true}
          showStatus={false}
          showThumbs={false}
          showIndicators={false}>
          <div>
            <img src={keyboard} alt='keyboard' />
            <p className='legend'>{currentLanguage.project.cover}</p>
          </div>
          <div>
            <img src={emile} alt='macbook code' />
            <p className='legend'>{currentLanguage.project.cover}</p>
          </div>
        </Carousel>
        <Grid
          container
          justify='flex-start'
          alignItems='center'
          className={classes.eachCont}>
          <Grid item sm={4} className={classes.textField}>
            <Typography variant='h4'>
              {currentLanguage.project.grid1title}
            </Typography>
          </Grid>
          <Grid item sm={6} className={classes.textField}>
            <Typography variant='subtitle1'>"Hello World"</Typography>
            <Typography variant='body1'>
              {currentLanguage.project.paper1text}
            </Typography>
          </Grid>
          <Hidden xsDown>
            <Grid item md={2} className={classes.textField}>
              <Button color='secondary' to='/about' component={Link}>
                {currentLanguage.project.paper1button}
              </Button>
            </Grid>
          </Hidden>
        </Grid>
        <Grid
          container
          justify='flex-start'
          alignItems='center'
          className={classes.eachCont}>
          <Grid item sm={12} md={4}>
            <Typography variant='h5'>
              {currentLanguage.project.paper2title}
            </Typography>
            <img
              src={wooConnect}
              alt='wooConnect'
              className={classes.imgField}
            />
          </Grid>
          <Grid item sm={12} md={6} className={classes.textField}>
            <Typography variant='body1'>
              {currentLanguage.project.paper2text1} <br />
              {currentLanguage.project.paper2text2} <br />
              {currentLanguage.project.paper2text3} <br />
              {currentLanguage.project.paper2text4} <br />
              {currentLanguage.project.paper2text5} <br />
              {currentLanguage.project.paper2text6} <br />
              {currentLanguage.project.paper2text7} <br />
              {currentLanguage.project.paper2text8}
            </Typography>
          </Grid>
          <Hidden xsDown>
            <Grid item md={2} className={classes.textField}>
              <Button color='secondary' href='https://www.940101.me'>
                {currentLanguage.project.paper2button}
              </Button>
            </Grid>
          </Hidden>
        </Grid>
        <Grid
          container
          justify='flex-start'
          alignItems='center'
          className={classes.eachCont}>
          <Grid item sm={12} md={4}>
            <Typography variant='h5'>
              {currentLanguage.project.paper3title}
            </Typography>
            <img src={wooStream} alt='woostream' className={classes.imgField} />
          </Grid>
          <Grid item sm={12} md={6} className={classes.textField}>
            <Typography variant='body1'>
              {currentLanguage.project.paper3text1}
              <br />
              {currentLanguage.project.paper3text2}
              <br />
              {currentLanguage.project.paper3text3}
              <br />
              {currentLanguage.project.paper3text4}
              <br />
              {currentLanguage.project.paper3text5}
              <br />
              {currentLanguage.project.paper3text6}
              <br />
              {currentLanguage.project.paper3text7}
            </Typography>
          </Grid>
          <Hidden xsDown>
            <Grid item md={2} className={classes.textField}>
              <Button
                color='secondary'
                href='https://github.com/ryanwooj/streams-client'>
                {currentLanguage.project.paper2button}
              </Button>
            </Grid>
          </Hidden>
        </Grid>
        <Grid
          container
          justify='flex-start'
          alignItems='center'
          className={classes.eachCont}>
          <Grid item sm={12} md={4}>
            <Typography variant='h5'>
              {currentLanguage.project.paper4title}
            </Typography>
            <div>
              <img src={movieApp} alt='movieApp' className={classes.imgField} />
            </div>
          </Grid>
          <Grid item sm={12} md={6} className={classes.textField}>
            <Typography variant='body1'>
              {currentLanguage.project.paper4text1}
              <br />
              {currentLanguage.project.paper4text2}
              <br />
              {currentLanguage.project.paper4text3}
              <br />
              {currentLanguage.project.paper4text4}
              <br />
              {currentLanguage.project.paper4text5}
            </Typography>
          </Grid>
          <Hidden smDown>
            <Grid item md={2} className={classes.textField}>
              <Button
                color='secondary'
                href='https://github.com/ryanwooj/movie-app'>
                {currentLanguage.project.paper2button}
              </Button>
            </Grid>
          </Hidden>
        </Grid>
      </Container>
    )
  );
};

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgorundColor: theme.palette.common.white
    }
  },
  root: {
    marginTop: theme.spacing(0)
  },
  carousel: {
    marginLeft: theme.spacing(-4),
    marginRight: theme.spacing(-4),
    marginBottom: theme.spacing(5)
  },
  textField: {
    padding: theme.spacing(1)
  },
  imgField: {
    width: '100%',
    marginTop: theme.spacing(2),
    padding: theme.spacing(2)
  },
  eachCont: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  }
}));

Project.propTypes = {
  lang: PropTypes.object
};

const mapStateToProps = state => ({
  lang: state.language
});

export default connect(
  mapStateToProps,
  {}
)(Project);
