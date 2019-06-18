import React from 'react';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const Contact = ({ lang: { loading, currentLanguage } }) => {
  const classes = useStyles();

  const lang = currentLanguage;

  return (
    !loading && (
      <Container className={classes.root}>
        <Grid container direction='column' className={classes.palette}>
          <Typography variant='h1' className={classes.hText}>
            GET IN
          </Typography>
          <Typography variant='h1' className={classes.hText}>
            TOUCH
          </Typography>
          <Typography variant='h1' className={classes.hText2}>
            213.703.2104
          </Typography>

          <Grid container direction='row' className={classes.secondGrid}>
            <Grid item xs={12} sm={6} lg={4} className={classes.secondGrid}>
              <Typography variant='h5'>{lang.contact.grid1}</Typography>
              <Typography variant='h6'>devrwoo@gmail.com</Typography>
            </Grid>
            <Grid item xs={12} sm={6} lg={4} className={classes.secondGrid}>
              <Typography variant='h5'>{lang.contact.grid2}</Typography>
              <Typography variant='h6'>Los Angeles, CA</Typography>
            </Grid>
            <Grid item xs={12} className={classes.secondGrid}>
              <Typography variant='h5'>GITHUB</Typography>
              <a
                href='https://www.github.com/ryanwooj'
                className={classes.link}>
                <Typography variant='h6'>
                  https://www.g​ithub.com/ryanwooj
                </Typography>
              </a>
            </Grid>
          </Grid>
          <Grid container direction='row' className={classes.secondGrid}>
            <Typography variant='h3' className={classes.techSkill}>
              {lang.contact.grid3}
            </Typography>
            <Typography variant='h6' className={classes.secondGridContainer}>
              {lang.contact.grid4}
              <Typography variant='body1' className={classes.secondGrid2}>
                ES6 JavaScript, HTML5, CSS3, PHP, mySQL
              </Typography>
              {lang.contact.grid5}
              <Typography variant='body1' className={classes.secondGrid2}>
                React.js, Redux, Material-Ui, Bootstrap, Semantic-UI, Angular,
                Backbone, jQuery, axios
              </Typography>
              {lang.contact.grid6}
              <Typography variant='body1' className={classes.secondGrid2}>
                Node.js, Express.js, GraphQL, mongoose, bcrypt jsonwebtoken,
                compression
              </Typography>
              {lang.contact.grid7}
              <Typography variant='body1' className={classes.secondGrid2}>
                Git, npm, yarn, heroku, gitFlow, Accessibility, nodemon, pm2
                concurrently
              </Typography>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    )
  );
};

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.black
    }
  },
  root: {
    backgroundColor: theme.palette.common.black,
    color: '#ffffff'
  },
  palette: {
    paddingTop: theme.spacing(20),
    height: '90rem'
  },
  link: {
    color: '#fff',
    textDecorationLine: 'none'
  },
  hText: {
    fontSize: '12vw',
    fontWeight: 500
  },
  hText2: {
    fontSize: '12vw',
    fontWeight: 500,
    textAlign: 'right'
  },
  secondGrid: {
    marginTop: theme.spacing(4)
  },
  secondGrid2: {
    marginBottom: theme.spacing(4)
  },
  secondGridContainer: {
    paddingLeft: theme.spacing(5)
  },
  techSkill: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(15),
    textTransform: 'uppercase'
  }
}));

const mapStateToProps = state => ({
  lang: state.language
});

export default connect(mapStateToProps)(Contact);
