var OAuth = require('../lib/oauth.min.js').OAuth;
var OAuthUser = require('../lib/oauth.min.js').User;

import { connect } from 'react-redux';
import * as userAction from '../actionCreators/user';

function nullFn(e) { console.log('you clicked me ' + e.target.className); };

//OAuth Key Registered to Facebook, Github and Google
OAuth.initialize('z7oz8f2CWDcLaaDjlXl4gH2NbHA');

const User = module.exports;

function Google({ onGoogleClick = nullFn, }) {
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
      OAuth.popup('google', { cache: true })
      .done(function (data) {
        var userToken = data.access_token;
        data.get('https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token='
          + userToken)
        .done(function (me) {
          user = {
            username: me.given_name,
            name: me.name,
            avatar: me.picture,
            OAuthVerify: me.id,
          };

          var toSend = {
            // verifyBy: 'OAuthVerify'
            user: user,
          };
          dispatch(userAction.fetchUserInfo(toSend));
        });
      })
      .fail(function (err) {
        console.log('Error signing in with Google', error);
      });
    },
  };
};

export const GoogleButton = connect(
  null,
  mapDispatchToProps
)(Google);

