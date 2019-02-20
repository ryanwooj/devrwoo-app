// import React, { useEffect } from 'react';
// import FacebookLogin from 'react-facebook-login';
// import { login, register, checkUser } from '../../actions/auth';
// import PropTypes from 'prop-types';
// import { Link, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';

// const Facebook = ({
//   isAuthenticated,
//   status,
//   register,
//   login,
//   checkUser,
//   loading
// }) => {
//   const responseFacebook = ({ name, email, userID }) => {
//     const password = userID;
//     checkUser({ email });
//     // console.log(name, email, register);
//     // console.log(response, register);

//     !loading
//       ? !Boolean(status)
//         ? register({ name, email, password })
//         : login({ email, password })
//       : console.log('hi');

//     // console.log(status);
//     // if (Boolean(status) === false) {
//     //   register({ name, email, password });
//     // }
//     // if (Boolean(status) === true) {
//     //   login({ email, password });
//     // }
//   };

//   if (isAuthenticated) {
//     return <Redirect to='/dashboard' />;
//   }
//   return (
//     <FacebookLogin
//       appId='482249872546915'
//       autoLoad={true}
//       fields='name,email,picture'
//       callback={responseFacebook}
//     />
//   );
// };

// Facebook.propTypes = {
//   login: PropTypes.func.isRequired,
//   register: PropTypes.func.isRequired,
//   checkUser: PropTypes.func.isRequired,
//   isAuthenticated: PropTypes.bool
// };

// const mapStateToProps = state => ({
//   isAuthenticated: state.auth.isAuthenticated,
//   status: state.auth.facebook,
//   loading: state.auth.loading
// });

// export default connect(
//   mapStateToProps,
//   { login, register, checkUser }
// )(Facebook);
