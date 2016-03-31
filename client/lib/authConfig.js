var OAuth = require('../lib/oauth.min.js').OAuth;
var OAuthUser = require('../lib/oauth.min.js').User;
import { push } from 'react-router-redux';
import * as userAction from '../actionCreators/user';

export const authMiddleware = store => next => action => {
  var github = OAuth.create('github');
  var google = OAuth.create('google');
  if (!github.access_token && !google.access_token) {
    if ((action.payload && action.payload.args && action.payload.args[0] === '/login') ||
      (action.payload && action.payload.pathname === '/login')) {
      next(action);
    } else {
      store.dispatch(push('/login'));
    }
  } else {
    if ((action.type !== 'RECEIVE_USER_INFO' && action.type !== 'REQUEST_USER_INFO')
      && !store.getState().toJS().user.profile
      && typeof action !== 'function') {

      store.dispatch(userAction.readProfile());

      next(action);
    } else {
      next(action);
    }
  }
};
