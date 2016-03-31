const OAuth = require('../lib/oauth.min.js').OAuth;
const OAuthUser = require('../lib/oauth.min.js').User;
import { push } from 'react-router-redux';
import * as userAction from '../actionCreators/user';

export const authMiddleware = store => next => action => {
  const github = OAuth.create('github');
  const google = OAuth.create('google');
  const auths = [github, google];

  if (hasAccessToken(auths)) {
    if (isLoginRedirect(action)) {
      next(action);
    } else {
      store.dispatch(push('/login'));
    }
  } else {
    if (!isProcessingUser(action, store)) {
      store.dispatch(userAction.readProfile());
      next(action);
    } else {
      next(action);
    }
  }
};

function hasAccessToken(auths) {
  let verified = false;
  for (let strategy of auths) {
    if (strategy.access_token) verified = true;
  }

  return verified;
}

function isLoginRedirect(action) {
  return (action.payload && action.payload.args && action.payload.args[0] === '/login') ||
      (action.payload && action.payload.pathname === '/login');
}

function isProcessingUser(action, store) {
  return (action.type !== 'RECEIVE_USER_INFO' && action.type !== 'REQUEST_USER_INFO')
      && !store.getState().toJS().user.profile
      && typeof action !== 'function';
}
