import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap';

import { TopNavBarContainer } from './TopNavBar';
import { BottomNavBarContainer } from './BottomNavBar';
import { SplashContainer } from './Splash';
import { MapView } from '../components/MapView';
import { RiderItemList } from './RiderItemList';
import { ErrorMessage } from './Error';

import * as rideActions from '../actionCreators/ride';

function Main({
  user: { isLoggedIn, location, profile, isDriver, isRider, friends },
  ride: { riders, isMatched, match, directions, matchFlag, },
  resetMatchFlag,
}) {
  if (matchFlag) setTimeout(function () {resetMatchFlag();}, 6000);

  return (
    <div className="MainApp">
      <TopNavBarContainer />
      <ErrorMessage/>
      {
        matchFlag ?
        <Alert bsStyle="success"dismissAfter={5000}>
        <h4>You have been matched with  {friends.find((friend) => friend.user_id ===
          match.user_id).name} </h4>
        </Alert>
        : <div />
      }
      {
        !isDriver && !isRider ?
          <SplashContainer /> :
          <MapView match={match}
            location={location}
            friends={friends}
            riders={riders}
            directions={directions}
            isDriver={isDriver}
            isRider={isRider}
          />
      }
      {
        isDriver && !match ?
          <RiderItemList /> :
          <div className="empty" />
      }
      {
        isRider || (isDriver && isMatched) ?
        <BottomNavBarContainer /> :
        <div className="empty" />
      }
    </div>
  );
};

const mapStateToProps = function (state) {
  // console.log('main container mapStateToProps state:', state.toJS());
  return state.toJS();
};

const mapDispatchToProps = function (dispatch) {
  return {
    resetMatchFlag() {
      dispatch(rideActions.matchFlag(null));
    },
  };
};

export const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
