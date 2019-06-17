import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getGithubRepos } from '../../actions/profile';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

const AboutWork = ({ username, getGithubRepos, repos }) => {
  useEffect(() => {
    getGithubRepos(username);
  }, [getGithubRepos, username]);

  const classes = useStyles();
  return (
    <>
      {repos.length > 0 ? (
        <Paper className={classes.githubPaper}>
          <Grid
            container
            direction='row'
            alignItems='stretch'
            justify='flex-start'>
            <Grid item xs={12} className={classes.title}>
              <Typography variant='h4'>Github Repos</Typography>
            </Grid>
            {repos === null ? (
              <Spinner />
            ) : (
              repos.map(repo => {
                return (
                  <Grid item sm={12} md={6} lg={4} key={repo.id}>
                    <Grid
                      container
                      direction='column'
                      justify='space-evenly'
                      alignItems='center'
                      className={classes.gridItem}>
                      <Grid item>
                        <Typography variant='h4' color='primary'>
                          <Button href={repo.html_url} color='primary'>
                            {repo.name}
                          </Button>
                        </Typography>
                      </Grid>
                      <Grid item>
                        {repo.language && (
                          <Typography>Language: {repo.language} </Typography>
                        )}
                        {repo.created_at && (
                          <Typography>Created at 02/18/2019</Typography>
                        )}
                      </Grid>
                      <Grid item>
                        <Button
                          href={repo.html_url}
                          color='secondary'
                          className={classes.noCaps}>
                          https://www.github.com/
                          {repo.full_name}
                        </Button>
                      </Grid>
                      <Grid container justify='space-evenly'>
                        <Grid item className={classes.iconCenter}>
                          <Icon className={classes.starIcon}>star</Icon>
                          <Typography>
                            {' '}
                            Stars: {repo.stargazers_count}
                          </Typography>
                        </Grid>
                        <Grid item className={classes.iconCenter}>
                          <Icon className={classes.eyeIcon}>
                            remove_red_eye
                          </Icon>
                          <Typography>
                            Watchers: {repo.watchers_count}
                          </Typography>
                        </Grid>
                        <Grid item className={classes.iconCenter}>
                          <Icon className={classes.setIcon}>
                            settings_input_component
                          </Icon>
                          <Typography>Forks: {repo.forks_count}</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Divider className={classes.divider} />
                  </Grid>
                );
              })
            )}
          </Grid>
        </Paper>
      ) : (
        <Typography variant='h5'>Empty Repository</Typography>
      )}
    </>
  );
};

const useStyles = makeStyles(theme => ({
  gridItem: {
    minHeight: '220px'
  },
  title: {
    marginLeft: theme.spacing(3)
  },
  noCaps: {
    textTransform: 'lowercase'
  },
  starIcon: {
    color: '#ffea00'
  },
  eyeIcon: {
    color: '#673ab7'
  },
  setIcon: {
    color: 'black'
  },
  iconCenter: {
    textAlign: 'center'
  },
  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  githubPaper: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    width: '100%'
  }
}));

AboutWork.propTypes = {
  getGithubRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  repos: state.profile.repos
});

export default connect(
  mapStateToProps,
  { getGithubRepos }
)(AboutWork);
