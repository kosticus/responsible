var OAuth = require('../lib/oauth.min.js').OAuth;
var OAuthUser = require('../lib/oauth.min.js').User;

import { connect } from 'react-redux';
import * as userAction from '../actionCreators/user';

function nullFn(e) { console.log('you clicked me ' + e.target.className); };

//OAuth Key Registered to Facebook, Github and Google
OAuth.initialize('z7oz8f2CWDcLaaDjlXl4gH2NbHA');

const User = module.exports;

function Facebook({ onFacebookClick = nullFn, }) {
  return (
    <div className='FacebookButton' onClick={onFacebookClick}>
      <i className='fa fa-facebook'></i>&nbsp;Facebook
    </div>
  );
}

const mapDispatchToProps = function (dispatch) {
  return {
    onFacebookClick() {
      var user;
      OAuth.popup('facebook', { cache: true })
        .done(function (facebookToken) {
          facebookToken.me()
            .done(function (me) {
              user = {
                username: me.name,
                name: me.firstname,
                avatar: me.avatar,
                OAuthVerify: me.id,
              };

              var toSend = {
                // verifyBy: 'OAuthVerify',
                user: user,
              };

              dispatch(userAction.fetchUserInfo(toSend));
            });
        })
        .fail(function (err) {
          console.log('error', err);
        });
    },
  };
};

export const FacebookButton = connect(
  null,
  mapDispatchToProps
)(Facebook);

