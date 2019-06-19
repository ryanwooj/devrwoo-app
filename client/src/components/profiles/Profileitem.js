import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Icon from '@material-ui/core/Icon';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Profileitem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills
  },
  lang
}) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.topmama}>
      <Card className={classes.card}>
        <Grid container direction='column' justify='center' alignItems='center'>
          <CardMedia
            src={avatar}
            alt='user Avatar'
            className={classes.media}
            component='img'
          />
          <CardContent>
            <Typography variant='h5'>{name}</Typography>
            <Typography variant='body1' color='textSecondary'>
              {status} {company && <span> at {company}</span>}{' '}
            </Typography>
            <Typography variant='body1' color='textSecondary'>
              {location && <span>{location}</span>}
            </Typography>
          </CardContent>
          <Grid container align='center'>
            {skills.slice(0, 4).map((skill, index) => (
              <Grid item xs={6} key={index}>
                <Icon>check</Icon>
                {skill}
              </Grid>
            ))}
          </Grid>
          <CardActions>
            <Button
              to={`/profile/${_id}`}
              component={Link}
              color='primary'
              className={classes.button}>
              {lang.profiles.button}
            </Button>
          </CardActions>
        </Grid>
      </Card>
    </Grid>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  topmama: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3)
  },
  card: {
    margin: theme.spacing(1)
  },
  media: {
    height: 175
  },
  button: {
    right: 1
  }
}));

Profileitem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default Profileitem;
