import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { changeLanguage, getPath } from '../../actions/language';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './Navbar.css';

const Navbar = ({
  location,
  auth: { isAuthenticated },
  logout,
  changeLanguage,
  getPath,
  appLang: { currentLanguage, loading, decide, offset }
}) => {
  const classes = useStyles();

  const [state, setState] = useState({
    toggle: false
  });
  const [langSwitch, setLanguage] = useState({
    toggle: false
  });
  const [scrollChange, setChange] = useState({
    toggle: true
  });

  window.onscroll = function() {
    if (window.pageYOffset > offset + 1) {
      setChange({ ...state, toggle: false });
    } else if (window.pageYOffset < offset - 1) {
      setChange({ ...state, toggle: true });
    }
  };

  useEffect(() => {
    langSwitch.toggle ? changeLanguage('Korean') : changeLanguage('English');
    getPath();
  }, [changeLanguage, langSwitch.toggle, getPath, location]);

  const toggleDrawer = status => {
    setState({ toggle: status });
  };

  const handleChange = name => event => {
    setLanguage({ ...state, toggle: event.target.checked });
  };

  const AuthLinks = ({ lang }) => (
    <Grid container justify='center' alignItems='center'>
      <Button to='/about' component={Link}>
        <Typography
          variant='body1'
          className={
            decide && scrollChange.toggle ? classes.links : classes.links2
          }>
          {lang.navtext.about}
        </Typography>
      </Button>
      <Button to='/project' component={Link}>
        <Typography
          variant='body1'
          className={
            decide && scrollChange.toggle ? classes.links : classes.links2
          }>
          {lang.navtext.project}
        </Typography>
      </Button>
      <Button to='/profiles' component={Link}>
        <Typography
          variant='body1'
          className={
            decide && scrollChange.toggle ? classes.links : classes.links2
          }>
          {lang.navtext.careers}
        </Typography>
      </Button>
      <Button to='/contact' component={Link}>
        <Typography
          variant='body1'
          className={
            decide && scrollChange.toggle ? classes.links : classes.links2
          }>
          {lang.navtext.support}
        </Typography>
      </Button>
      <Button to='/posts' component={Link}>
        <Typography
          variant='body1'
          className={
            decide && scrollChange.toggle ? classes.links : classes.links2
          }>
          {lang.navtext.posts}
        </Typography>
      </Button>
      <Button onClick={logout}>
        <Typography
          variant='body1'
          className={
            decide && scrollChange.toggle ? classes.links : classes.links2
          }>
          {lang.navtext.listseven}
        </Typography>
      </Button>
    </Grid>
  );

  const GuestLinks = ({ lang }) => (
    <Grid container justify='center' alignItems='center'>
      <Button to='/about' component={Link}>
        <Typography
          variant='body1'
          className={
            decide && scrollChange.toggle ? classes.links : classes.links2
          }>
          {lang.navtext.about}
        </Typography>
      </Button>
      <Button to='/project' component={Link}>
        <Typography
          variant='body1'
          className={
            decide && scrollChange.toggle ? classes.links : classes.links2
          }>
          {lang.navtext.project}
        </Typography>
      </Button>
      <Button to='/contact' component={Link}>
        <Typography
          variant='body1'
          className={
            decide && scrollChange.toggle ? classes.links : classes.links2
          }>
          {lang.navtext.support}
        </Typography>
      </Button>
      <Button to='/login' component={Link}>
        <Typography
          variant='body1'
          className={
            decide && scrollChange.toggle ? classes.links : classes.links2
          }>
          {lang.navtext.listfour}
        </Typography>
      </Button>
    </Grid>
  );

  const GuestToggle = () => (
    <>
      <Button to='/register' component={Link} className={classes.buttonLogo}>
        <Icon
          className={
            decide && scrollChange.toggle ? classes.icons : classes.icons2
          }>
          how_to_reg
        </Icon>
      </Button>
      <Button to='/login' component={Link} className={classes.buttonLogo}>
        <Icon
          className={
            decide && scrollChange.toggle ? classes.icons : classes.icons2
          }>
          vpn_key
        </Icon>
      </Button>
    </>
  );
  const ToggleGuest = ({ lang }) => (
    <Grid
      className={classes.list}
      role='presentation'
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}>
      <div className='ryan'>
        <div className='ear left' />
        <div className='ear right' />
        <div className='face'>
          <div className='eyebrow left' />
          <div className='eyebrow right' />
          <div className='eye left' />
          <div className='eye right' />
          <div className='nose' />
          <div className='mouth left' />
          <div className='mouth right' />
        </div>
      </div>
      <List>
        <ListItem button to='/' component={Link}>
          <ListItemIcon>
            <Icon>home</Icon>
          </ListItemIcon>
          <ListItemText>{lang.navtext.listone}</ListItemText>
        </ListItem>

        <Divider variant='middle' />
        <ListItem button to='/about' component={Link}>
          <ListItemIcon>
            <Icon>folder_shared</Icon>
          </ListItemIcon>
          <ListItemText>{lang.navtext.about}</ListItemText>
        </ListItem>

        <Divider variant='middle' />
        <ListItem button to='/project' component={Link}>
          <ListItemIcon>
            <Icon>folder_shared</Icon>
          </ListItemIcon>
          <ListItemText>{lang.navtext.project}</ListItemText>
        </ListItem>

        <Divider variant='middle' />
        <ListItem button to='/register' component={Link}>
          <ListItemIcon>
            <Icon>how_to_reg</Icon>
          </ListItemIcon>
          <ListItemText>{lang.navtext.listthree}</ListItemText>
        </ListItem>

        <Divider variant='middle' />
        <ListItem button to='/login' component={Link}>
          <ListItemIcon>
            <Icon>vpn_key</Icon>
          </ListItemIcon>
          <ListItemText>{lang.navtext.listfour}</ListItemText>
        </ListItem>
      </List>
    </Grid>
  );

  const ToggleAuth = ({ lang }) => (
    <Grid
      className={classes.list}
      role='presentation'
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}>
      <div className='ryan'>
        <div className='ear left' />
        <div className='ear right' />
        <div className='face'>
          <div className='eyebrow left' />
          <div className='eyebrow right' />
          <div className='eye left' />
          <div className='eye right' />
          <div className='nose' />
          <div className='mouth left' />
          <div className='mouth right' />
        </div>
      </div>
      <List>
        <ListItem button to='/' component={Link}>
          <ListItemIcon>
            <Icon>home</Icon>
          </ListItemIcon>
          <ListItemText>{lang.navtext.listone}</ListItemText>
        </ListItem>

        <Divider variant='middle' />
        <ListItem button to='/profiles' component={Link}>
          <ListItemIcon>
            <Icon>folder_shared</Icon>
          </ListItemIcon>
          <ListItemText>{lang.navtext.listtwo}</ListItemText>
        </ListItem>

        <Divider variant='middle' />
        <ListItem button to='/posts' component={Link}>
          <ListItemIcon>
            <Icon>comment</Icon>
          </ListItemIcon>
          <ListItemText>{lang.navtext.listfive}</ListItemText>
        </ListItem>

        <Divider variant='middle' />
        <ListItem button to='/dashboard' component={Link}>
          <ListItemIcon>
            <Icon>dashboard</Icon>
          </ListItemIcon>
          <ListItemText>{lang.navtext.listsix}</ListItemText>
        </ListItem>

        <Divider variant='middle' />
        <ListItem button onClick={logout}>
          <ListItemIcon>
            <Icon>clear</Icon>
          </ListItemIcon>
          <ListItemText>{lang.navtext.listseven}</ListItemText>
        </ListItem>
      </List>
    </Grid>
  );

  return (
    <AppBar
      position='sticky'
      color='default'
      elevation={1}
      className={decide && scrollChange.toggle ? classes.root2 : classes.root}>
      {!loading ? (
        <Toolbar>
          <Drawer open={state.toggle} onClose={() => toggleDrawer(false)}>
            {isAuthenticated ? (
              <ToggleAuth lang={currentLanguage} />
            ) : (
              <ToggleGuest lang={currentLanguage} />
            )}
          </Drawer>
          <Grid container direction='row'>
            <Grid item xs={6} md={3}>
              <Button onClick={() => toggleDrawer(true)}>
                {decide && scrollChange.toggle ? (
                  <Icon className={classes.icons}>menu</Icon>
                ) : (
                  <Icon className={classes.icons2}>menu</Icon>
                )}
              </Button>
              <Button to='/' component={Link}>
                <div className={classes.ryan}>
                  <div className='ryan2'>
                    <div className='ear2 left2' />
                    <div className='ear2 right2' />
                    <div className='face2'>
                      <div className='eyebrow2 left2' />
                      <div className='eyebrow2 right2' />
                      <div className='eye2 left2' />
                      <div className='eye2 right2' />
                      <div className='nose2' />
                      <div className='mouth2 left2' />
                      <div className='mouth2 right2' />
                    </div>
                  </div>
                </div>
                <Typography
                  className={
                    decide && scrollChange.toggle ? classes.name : classes.name2
                  }>
                  {currentLanguage.navtext.title}
                </Typography>
              </Button>
            </Grid>
            <Grid item md={6} className={classes.linkNavi}>
              {!loading && isAuthenticated ? (
                <AuthLinks lang={currentLanguage} />
              ) : (
                <GuestLinks lang={currentLanguage} />
              )}
            </Grid>
            <Grid item xs={6} md={3} className={classes.lastGrid}>
              <Grid container alignItems='center' justify='flex-end'>
                {!loading && !isAuthenticated && <GuestToggle />}
                <FormControlLabel
                  control={
                    <Switch
                      checked={langSwitch.toggle}
                      onChange={handleChange('toggle')}
                      value='currentLanguage'
                      color='primary'
                    />
                  }
                  label={currentLanguage.current}
                />
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      ) : (
        <div> Loading</div>
      )}
    </AppBar>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    color: '#000',
    background: '#fffffe',
    '&:hover': {
      background: '#ffffff',
      color: '#000000'
    },
    zIndex: 700,
    position: 'fixed'
  },
  root2: {
    color: '#fff',
    background: 'rgba(255, 255, 255, 0)',
    '&:hover': {
      background: 'rgb(0, 0, 0, 0.8)',
      color: '#fff'
    },
    zIndex: 700,
    position: 'fixed'
  },
  title: {
    flexGrow: 1
  },
  icons: {
    fontSize: '1.5rem',
    color: '#fff'
  },
  icons2: {
    fontSize: '1.5rem',
    color: '#000'
  },
  links: {
    color: '#fff',
    textTransform: 'capitalize',
    fontWeight: 400
  },
  links2: {
    color: '#000',
    textTransform: 'capitalize',
    fontWeight: 400
  },
  link: {
    display: 'none'
  },
  name: {
    fontSize: '1.5rem',
    color: '#fff',
    fontWeight: 400,
    textTransform: 'lowercase'
  },
  name2: {
    fontSize: '1.5rem',
    color: '#000',
    fontWeight: 400,
    textTransform: 'lowercase'
  },
  list: {
    width: 300,
    marginTop: theme.spacing(5),
    paddingTop: theme.spacing(2)
  },
  fullList: {
    width: 'auto'
  },
  linkNavi: {
    alignSelf: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  lastGrid: {
    alignSelf: 'center'
  },
  ryan: {
    marginRight: theme.spacing(1)
  }
}));

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  changeLanguage: PropTypes.func.isRequired,
  appLang: PropTypes.object.isRequired,
  getPath: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  appLang: state.language
});
export default withRouter(
  connect(
    mapStateToProps,
    { logout, changeLanguage, getPath }
  )(Navbar)
);
