import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import PostItem from '../posts/PostItem';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';
import { getPost } from '../../actions/post';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const Post = ({ getPost, post: { post, loading }, match }) => {
  const classes = useStyles();

  useEffect(() => {
    getPost(match.params.id);
  }, [getPost, match]);

  return loading || post === null ? (
    <Spinner />
  ) : (
    <Paper className={classes.paper}>
      <Button
        component={Link}
        to='/posts'
        variant='contained'
        color='primary'
        className={classes.button}>
        Back to Posts
      </Button>
      <div className={classes.postItem}>
        <PostItem post={post} showAction={false} />
      </div>
      =
      <CommentForm postId={post._id} />
      <Container className='comments'>
        {post.comments.map(comment => (
          <CommentItem
            key={comment._id}
            comment={comment}
            postId={Number(post._id)}
          />
        ))}
      </Container>
    </Paper>
  );
};

const useStyles = makeStyles(theme => ({
  paper: {
    margin: theme.spacing(3),
    marginTop: theme.spacing(16),
    marginBottom: theme.spacing(10),
    padding: theme.spacing(1),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(7)
  },
  button: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2)
  },
  postItem: {
    marginTop: theme.spacing(7),
    marginBottom: theme.spacing(1)
  }
}));

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPost }
)(Post);
