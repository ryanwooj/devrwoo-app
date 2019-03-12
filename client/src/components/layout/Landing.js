import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import wallpaper from '../../images/wallpaper.jpg';
import tomasso from '../../images/tomasso.jpg';
import milada from '../../images/milada.jpg';

const Landing = ({ isAuthenticated, lang: { loading, currentLanguage } }) => {
  const classes = useStyles();
  const lang = currentLanguage;

  return (
    !loading && (
      <>
        <Grid
          container
          className={classes.media}
          justify='center'
          alignItems='center'>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Card>
              <Typography
                style={{
                  position: 'absolute',
                  top: '300px',
                  left: '20px',
                  color: '#ffffff',
                  fontWeight: 500,
                  fontSize: '30px'
                }}>
                {lang.landing.cover} <br />
                {lang.landing.cover2}
              </Typography>
              <CardMedia
                className={classes.media}
                image={wallpaper}
                title='Dark wallpaper'
              />
            </Card>
          </Grid>
        </Grid>
        <Container maxWidth='lg'>
          <Grid container direction='row' justify='flex-start'>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.cardInfo}>
                <CardActionArea>
                  <CardContent>
                    <Typography variant='subtitle1'>
                      {lang.landing.paper1title}
                    </Typography>
                    <Typography variant='h5' style={{ marginTop: '10px' }}>
                      {lang.landing.paper1subtitle}
                    </Typography>
                    <Typography variant='body2' style={{ marginTop: '10px' }}>
                      {lang.landing.paper1text}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size='small' color='primary' to='/' component={Link}>
                    {lang.landing.paper1button}
                  </Button>
                  <Button size='small' color='primary' to='/' component={Link}>
                    {lang.landing.paper1button2}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.cardInfo}>
                <CardActionArea>
                  <CardContent>
                    <Typography variant='subtitle1'>STOCK</Typography>
                    <Typography
                      variant='subtitle2'
                      style={{ marginTop: '20px' }}>
                      {lang.landing.paper2title}
                    </Typography>
                    <Typography variant='h4' style={{ display: 'flex' }}>
                      $ 1091.01{' '}
                      <Typography variant='body2' style={{ marginTop: '10px' }}>
                        <Icon className={classes.iconColor}>show_chart</Icon>
                        {'   '}
                        +11.91
                      </Typography>
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size='small' color='primary' to='/' component={Link}>
                    {lang.landing.paper2button}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.cardInfo}>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant='subtitle1'>
                      {lang.landing.paper3title}
                    </Typography>
                    <Typography
                      variant='caption'
                      style={{ marginTop: '20px', display: 'flex' }}>
                      {lang.landing.paper3text}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Container>

        <Container maxWidth='lg'>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Card className={classes.cardInfo}>
                <CardActionArea>
                  <Typography
                    style={{
                      position: 'absolute',
                      top: '15px',
                      left: '20px',
                      color: '#ffffff',
                      fontWeight: 500,
                      fontSize: '14px'
                    }}>
                    {lang.landing.grid2card1title}
                  </Typography>
                  <CardMedia
                    image={tomasso}
                    title='Desc Blog Picture'
                    className={classes.tomassoPic}
                  />
                  <CardContent>
                    <Typography gutterBottom variant='subtitle1'>
                      {lang.landing.grid2card1subtitle}
                    </Typography>
                    <Typography variant='subtitle1' color='primary'>
                      https://www.940101.me
                    </Typography>
                    <Typography>{lang.landing.grid2card1text}</Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size='small' color='primary'>
                    {lang.landing.grid2card1button}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card className={classes.cardInfo2}>
                <CardActionArea>
                  <Typography
                    style={{
                      position: 'absolute',
                      top: '15px',
                      left: '20px',
                      color: '#ffffff',
                      fontWeight: 500,
                      fontSize: '14px'
                    }}>
                    {lang.landing.grid2card2title}
                  </Typography>
                  <CardMedia
                    image={milada}
                    title='Desc Blog Picture'
                    className={classes.tomassoPic}
                  />
                  <CardContent>
                    <Typography gutterBottom variant='subtitle1'>
                      {lang.landing.grid2card2subtitle}
                    </Typography>
                    <Typography variant='subtitle1'>
                      {lang.landing.grid2card2text}
                      <Typography variant='body1' color='primary'>
                        https://www.github.com/ryanwooj/devrwooWeb
                      </Typography>
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size='small' color='primary'>
                    {lang.landing.grid2card2button}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </>
    )
  );
};

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  media: {
    height: '90vh',
    margin: 0,
    border: 0,
    padding: 0,
    maxHeight: 600,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    display: 'block',
    verticalAlign: 'top'
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  cardInfo: {
    marginTop: theme.spacing(7),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(5),
    minHeight: 150
  },
  cardInfo2: {
    marginTop: theme.spacing(10),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(25),
    minHeight: 150
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1)
  },
  avatarrr: {
    margin: 10,
    width: 90,
    height: 90
  },
  moveRight: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(3)
  },
  grid2: {
    margin: theme.spacing(2)
  },
  iconColor: {
    color: '#008000	',
    fontSize: '2rem'
  },
  tomassoPic: {
    height: 200,
    display: 'block',
    verticalAlign: 'top'
  }
}));

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
  lang: PropTypes.object
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  lang: state.language
});

export default connect(mapStateToProps)(Landing);
