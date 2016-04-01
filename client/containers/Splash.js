import { connect } from 'react-redux';

import { DriveButton } from '../components/Splash/DriveButton';
import { RideButton } from '../components/Splash/RideButton';
import * as userAction from '../actionCreators/user';
import * as driverAction from '../actionCreators/drive';
import { End } from '../components/End';

function Splash(props) {
  let onDriveClick = props.onDriveClick.bind(null, props.user.user_id, props.user.location);

  return (
    <div className='splash'>
      <DriveButton onDriveClick={onDriveClick}/>
      <RideButton {...props} />
      <End />
    </div>
  );
}

// jscs:disable
const mapDispatchToProps = function(dispatch) {
  return {
    onDriveClick(user_id, location) {
      dispatch(userAction.setDriver(true));
      dispatch(driverAction.createDriver(user_id, location))
    },
    onRideButtonClick() {
      dispatch(userAction.setRider(true));
    }
  };
};
// jscs:enable

const mapStateToProps = function (state) {
  return state.toJS();
};

export const SplashContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
