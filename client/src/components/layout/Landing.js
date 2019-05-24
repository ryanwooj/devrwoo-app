import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>Ryan Woo Connector</h1>
          <p className='lead'>
            I would like to get to know you. Please Login to Access
          </p>
          <div className='buttons'>
            <Link to='/register' className='btn btn-primary'>
              Get In Touch
            </Link>
            <Link to='/login' className='btn btn-light'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
