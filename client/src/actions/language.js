import { setAlert } from './alert';

import { LANG_KOR, LANG_ENG, TOG_NAV, TOG_NAV2 } from './types';

export const changeLanguage = lang => async dispatch => {
  try {
    if (String(lang) === 'Korean') {
      dispatch({
        type: LANG_KOR
      });
    } else if (String(lang) === 'English') {
      dispatch({
        type: LANG_ENG
      });
    }
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};

export const getPath = () => async dispatch => {
  var thisPath = window.location.pathname;
  var something = 0;
  const allPath = [
    {
      name: '/project',
      offset: 600
    },
    {
      name: '/',
      offset: 600
    },
    {
      name: '/about',
      offset: 0
    },
    {
      name: '/contact',
      offset: 1000
    }
  ];

  allPath.map(path => {
    if (path.name === thisPath) {
      something = path.offset;
      return null;
    } else {
      return null;
    }
  });
  if (thisPath === '/' || thisPath === '/project' || thisPath === '/contact') {
    console.log('true');
    dispatch({
      type: TOG_NAV,
      payload: {
        offset: something
      }
    });
  } else {
    console.log('false');

    dispatch({
      type: TOG_NAV2,
      payload: {
        offset: something
      }
    });
  }
};
