import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { BottomNavBarButton } from '../components/BottomNavBarButton';

import * as userAction from '../actionCreators/user';
import * as rideAction from '../actionCreators/ride';

require('../public/styles/normalize.css');
require('../public/styles/skeleton.css');

/* Jonathan: does this feel too clunky to you? I was debating passing down props and
pulling out the objects we need in each container (like: props.ride). Not sure... */
function BottomNavBar({ ride, onConfirmLocationButtonClick }) {
  return (
    <div className="BottomNavBarContainer row">
      <BottomNavBarButton {...ride}
        onConfirmLocationButtonClick={onConfirmLocationButtonClick} />
    </div>
  );
}

const mapStateToProps = function (state) {
  return state.toJS();
};

// jscs:disable
const mapDispatchToProps = function (dispatch) {
  return {
    onConfirmLocationButtonClick(location) {
      dispatch(rideAction.requestMatch(location))
    },
  };
};
// jscs:enable

export const BottomNavBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BottomNavBar);
