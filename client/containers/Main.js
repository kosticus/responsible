import { connect } from 'react-redux';

import { TopNavBarContainer } from './TopNavBar';
import { BottomNavBarContainer } from './BottomNavBar';
import { SplashContainer } from './Splash';
import { MapView } from '../components/MapView';
import { GithubButton } from '../models/Github';

import * as userAction from '../actionCreators/user';

function Main({ isDriver, isRider }) {
  return (
    <div className="MainApp">
      <TopNavBarContainer />
      <a className='button' onClick={User.facebook}>
        <i className='fa fa-facebook-official'>
        </i>&nbsp;Facebook
      </a>
      <a className='button' onClick={User.github}>
        <i className='fa fa-github'>
        </i>&nbsp;GitHub</a>
      <a className='button' onClick={User.google}>
        <i className='fa fa-google'>
        </i>&nbsp;Google</a>
      {
        !isDriver && !isRider ?
          <SplashContainer /> :
          <MapView />
      }
      {
        isRider ?
        <BottomNavBarContainer /> :
        <div className="empty" />
      }
    </div>
  );
};

const mapStateToProps = function (state) {
  // console.log('main container mapStateToProps state:', state.toJS());

  let userState = state.toJS().user;
  return {
    isRider: userState.isRider,
    isDriver: userState.isDriver,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    onGithubClick() {
      dispatch(userAction.fetchUserInfo({ username: 'panda' }));
    },
  };
};

export const MainContainer = connect(
  mapStateToProps
)(Main);
