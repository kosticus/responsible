var OAuth = require('../lib/oauth.min.js').OAuth;
var OAuthUser = require('../lib/oauth.min.js').User;

import { connect } from 'react-redux';
import * as userAction from '../actionCreators/user';

//OAuth Key Registered to Facebook, Github and Google
OAuth.initialize('z7oz8f2CWDcLaaDjlXl4gH2NbHA');

const User = module.exports;

function Google({ onGoogleClick }) {
  return (
    <div className='GoogleButton' onClick={onGoogleClick}>
      <i className='fa fa-google'/>&nbsp;Google
    </div>
  );
}

const mapDispatchToProps = function (dispatch) {
  return {
    onGoogleClick() {
      var user;
      /* Use OAuth.io to facilicate user authentication with Google
      Setting cache to true allows user credentials to be held in local storage */
      OAuth.popup('google', { cache: true })
      .done(function (data) {
        var userToken = data.access_token;
        /* data.get is how we get the user information such as name, picture, id */
        data.get('https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token='
          + userToken)
        .done(function (me) {
          user = {
            username: me.given_name,
            name: me.name,
            avatar: me.picture,
            /* OAuthVerify is to check against the database */
            OAuthVerify: me.id,
          };

          var toSend = {
            user: user,
          };
          dispatch(userAction.fetchUserInfo(toSend));
        });
      })
      .fail(function (error) {
        console.log('Error signing in with Google', error);
      });
    },
  };
};

export const GoogleButton = connect(
  null,
  mapDispatchToProps
)(Google);

