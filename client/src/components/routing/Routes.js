import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../auth/Login';
import Register from '../auth/Register';
import Alert from '../layout/Alert';
import Dashboard from '../dashboard/Dashboard';
import PrivateRoute from '../routing/PrivateRoute';
import CreateProfile from '../profile-form/CreateProfile';
import EditProfile from '../profile-form/EditProfile';
import AddExperience from '../profile-form/AddExperience';
import AddEducation from '../profile-form/AddEducation';
import Education from '../dashboard/Education';
import Experience from '../dashboard/Experience';
import Practice from '../practice';
import Profiles from '../profiles/Profiles';
import Profile from '../profile/Profile';
import Posts from '../posts/Posts';
import Post from '../post/Post';
import NotFound from '../layout/NotFound';
import About from '../about/About';
import Project from '../project/Project';
import Contact from '../contact/Contact';

const Routes = () => {
  return (
    <section>
      <Alert />
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/practice' component={Practice} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/about' component={About} />
        <Route exact path='/project' component={Project} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/profiles' component={Profiles} />
        <Route exact path='/profile/:id' component={Profile} />
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <PrivateRoute exact path='/create-profile' component={CreateProfile} />
        <PrivateRoute exact path='/edit-profile' component={EditProfile} />
        <PrivateRoute exact path='/add-experience' component={AddExperience} />
        <PrivateRoute exact path='/add-education' component={AddEducation} />
        <PrivateRoute exact path='/posts' component={Posts} />
        <PrivateRoute exact path='/post/:id' component={Post} />
        <PrivateRoute
          exact
          path='/dashboard/experience/:id'
          component={Experience}
        />
        <PrivateRoute
          exact
          path='/dashboard/education/:id'
          component={Education}
        />
        <Route path='/' component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
