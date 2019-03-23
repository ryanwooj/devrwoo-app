import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import { makeStyles } from '@material-ui/core/styles';
import Moment from 'react-moment';
import Spinner from '../layout/Spinner';
import DashboardActions from './DashboardActions';
import ModalComp from './ModalComp';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  lang,
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile, loading]);

  const classes = useStyles();
  return loading ? (
    <Spinner />
  ) : (
    <Container maxWidth='lg'>
      <Grid container direction='row' className={classes.root} spacing={2}>
        <Grid item xs={12}>
          {user && profile ? (
            <Grid container direction='row' justify='center'>
              <Grid item sm={5} md={4} className={classes.picField}>
                <Grid container justify='center'>
                  <Avatar
                    src={user && user.avatar}
                    alt='So random'
                    className={classes.avatar}
                  />
                </Grid>
              </Grid>
              <Grid item sm={7} md={8} className={classes.textField}>
                <Grid container direction='column'>
                  <Grid item>
                    <Typography variant='h4' className={classes.lowercase}>
                      {user && user.name.split(' ').join('')}
                    </Typography>
                    <DashboardActions lang={lang} />
                  </Grid>
                  <Grid container justify='center'>
                    <Button
                      variant='contained'
                      className={classes.eduExpButton}
                      component={Link}
                      to={`/dashboard/experience/${user._id}`}>
                      {lang.dashboard.button4}
                    </Button>
                    <Button
                      variant='contained'
                      className={classes.eduExpButton}
                      component={Link}
                      to={`/dashboard/education/${user._id}`}>
                      {lang.dashboard.button5}
                    </Button>
                  </Grid>
                  <Divider className={classes.divider} />
                  <Grid item>
                    <Typography variant='h6'>
                      {user.email.split('@')[0]}
                    </Typography>

                    <Typography variant='body1'>
                      {profile && profile.location}
                    </Typography>
                    <Typography>
                      <a className={classes.link} href={profile.website}>
                        {profile.website}
                      </a>
                    </Typography>
                    <Typography variant='body2'>
                      Registered:{' '}
                      <Moment format='MMMM Do YYYY, h:mm:ss a'>
                        {profile.date}
                      </Moment>
                    </Typography>
                    <Typography variant='body1'>
                      {profile.education &&
                        profile.education.length > 0 &&
                        profile.education[0].school}
                    </Typography>
                    <br />
                    <Typography variant='body1'>
                      {profile && profile.bio}
                    </Typography>
                  </Grid>
                  <br />
                  <Grid item>
                    <Grid container justify='flex-end'>
                      <Button
                        variant='contained'
                        color='secondary'
                        className={classes.delete}
                        onClick={e => deleteAccount()}>
                        <Icon>delete</Icon> {lang.dashboard.deleteButton}
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Divider />
            </Grid>
          ) : (
            <ModalComp />
          )}
        </Grid>
        <Grid item xs={4} />
      </Grid>
      <Grid container />
    </Container>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(9)
  },
  paper: {
    height: 140,
    width: 100
  },
  delete: {
    alignSelf: ''
  },
  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  link: {
    color: '#ffd400',
    textDecorationLine: 'none',
    textShadow: '0.5px 0.5px 0.5px #392f39'
  },
  avatar: {
    width: 160,
    height: 160,
    top: 50
  },
  picField: {
    padding: theme.spacing(2)
  },
  textField: { marginTop: theme.spacing(3), padding: theme.spacing(2) },
  lowercase: {
    textTransform: 'lowercase'
  },
  eduExpButton: {
    marginLeft: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width: '45%',
    backgroundColor: '#ffd700',
    color: '#392f31'
  },
  modalpaper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    outline: 'none'
  }
}));

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  appLang: PropTypes.object
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
  lang: state.language.currentLanguage
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, deleteAccount }
)(Dashboard);
