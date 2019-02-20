import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts } from '../../actions/post';
import Spinner from '../layout/Spinner';
import PostItem from './PostItem';
import PostForm from './PostForm';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const Posts = ({ getPosts, posts: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts, loading]);
  const classes = useStyles();
  return loading ? (
    <Spinner />
  ) : (
    <Container maxWidth='lg'>
      <Paper className={classes.paper}>
        <Grid
          container
          direction='column'
          justify='flex-start'
          alignItems='flex-start'>
          <Typography variant='h1'>Posts</Typography>
          <PostForm />
          <Grid item>
            {posts.map(post => (
              <PostItem key={post._id} post={post} />
            ))}
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};
const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(16),
    padding: theme.spacing(3),
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(10),
    marginBottom: theme.spacing(16)
  }
}));

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  posts: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  posts: state.post
});

export default connect(
  mapStateToProps,
  { getPosts }
)(Posts);
