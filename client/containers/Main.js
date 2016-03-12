import { connect } from 'react-redux';

import { TopNavBarContainer } from './TopNavBar';
import { BottomNavBarContainer } from './BottomNavBar';
import { SplashContainer } from '../components/Splash';
import { MapView } from '../components/MapView';

function Main({ isDriver, isRider }) {
  console.log('isDriver, isRider:', isDriver, isRider);
  return (
    <div className="MainApp">
      <TopNavBarContainer />
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

export const MainContainer = connect(
  mapStateToProps
)(Main);
