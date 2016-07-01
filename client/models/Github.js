var OAuth = require('../lib/oauth.min.js').OAuth;
var OAuthUser = require('../lib/oauth.min.js').User;

import { connect } from 'react-redux';
import * as userAction from '../actionCreators/user';

function nullFn(e) { console.log('you clicked me ' + e.target.className); };

//OAuth Key Registered to Facebook, Github and Google
OAuth.initialize('z7oz8f2CWDcLaaDjlXl4gH2NbHA');

const User = module.exports;

function Github({ onGithubClick = nullFn, }) {
  return (
    <div className='GitHubButton' onClick={onGithubClick}>
      <i className='fa fa-github'></i>&nbsp;GitHub
    </div>
  );
}

const mapDispatchToProps = function (dispatch) {
  return {
    onGithubClick() {
      var user;
      OAuth.popup('github', { cache: true })
        .done(function (githubToken) {
          console.warn('received githubtoken!:', githubToken);
          githubToken.me()
            .done(function (me) {
              console.warn('HERE I AM:', me);
              user = {
                username: me.alias,
                name: me.name,
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
        .fail(function (error) {
          console.log('error signing in with Github', error);
        });
    },
  };
};

export const GithubButton = connect(
  null,
  mapDispatchToProps
)(Github);

