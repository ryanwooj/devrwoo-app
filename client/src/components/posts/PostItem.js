import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../actions/post';
import { getPosts } from '../../actions/post';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';

const PostItem = ({
  auth,
  addLike,
  removeLike,
  deletePost,
  getPosts,
  post: { _id, text, name, avatar, user, likes, comments, date },
  showAction
}) => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction='row'
      alignItems='flex-start'
      className={classes.bigToSmall}>
      <Grid item xs={12} sm={3}>
        <Grid
          container
          direction='column'
          align='center'
          className={classes.avatarCont}>
          <Link to={`/profile/${user}`}>
            <Avatar className={classes.avatar} src={avatar} alt='user Avatar' />
          </Link>{' '}
          <Button to={`/profile/${user}`} component={Link} color='primary'>
            {name}
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={9}>
        <Grid item className={classes.userTextField}>
          <Typography variant='body1'>{text}</Typography>
          <Typography variant='body2'>
            Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
          </Typography>
        </Grid>

        <Grid item className={classes.userTextField}>
          {showAction && (
            <Grid
              container
              direction='row'
              justify='flex-start'
              alignItems='flex-end'>
              <Badge
                color='primary'
                badgeContent={likes.length > 0 ? likes.length : 0}>
                <Button onClick={e => addLike(_id)}>
                  <Icon>thumb_up</Icon>
                </Button>
              </Badge>
              <Button onClick={e => removeLike(_id)}>
                <Icon>thumb_down</Icon>
              </Button>
              <Badge
                color='primary'
                badgeContent={comments.length > 0 ? comments.length : 0}>
                <Button to={`/post/${_id}`} component={Link} variant='outlined'>
                  Comment
                </Button>
              </Badge>
              {!auth.loading && user === auth.user._id && (
                <Button
                  onClick={e => deletePost(_id)}
                  style={{ marginLeft: '5px' }}
                  type='button'
                  variant='contained'
                  color='secondary'>
                  <Icon>delete_forever</Icon>
                </Button>
              )}{' '}
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles(theme => ({
  avatar: {
    margin: 10,
    width: 100,
    height: 100
  },
  userTextField: {
    margin: theme.spacing(4),
    marginLeft: theme.spacing(3)
  },
  avatarCont: {
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(2)
  },
  controlCont: {
    marginTop: theme.spacing(2)
  },
  bigToSmall: {}
}));

PostItem.defaultProps = {
  showAction: true
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  getPosts: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  posts: state.post
});

export default connect(
  mapStateToProps,
  { addLike, removeLike, getPosts, deletePost }
)(PostItem);
