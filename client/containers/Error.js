/*
  Kim! This is a great file and function to document :~)!
*/

import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap';

import * as userAction from '../actionCreators/user';
import * as rideAction from '../actionCreators/ride';
import * as driveAction from '../actionCreators/drive';
import * as chatAction from '../actionCreators/chat';

function message({
  user: { changeAddressError, requestUserError, },
  ride: { acceptRideError, driverAddError, messagesFetchError, rideRequestError, },
  resetAllErrors,
})
  {
  if (acceptRideError || changeAddressError || requestUserError || driverAddError ||
    messagesFetchError || rideRequestError) {
    setTimeout(function () {resetAllErrors();
  }, 5000);}

  return (
    <div>
    {
      changeAddressError || requestUserError || acceptRideError || driverAddError ||
        messagesFetchError || rideRequestError ?
        <Alert bsStyle="danger"dismissAfter={2000}>
        <h4>Something went wrong.</h4>
        </Alert>
        : <div />
    }
  </div>
  );
}

// jscs:disable
const mapDispatchToProps = function(dispatch) {
  return {
    resetAllErrors() {
      dispatch(rideAction.acceptRideError(null))
      dispatch(driveAction.addDriverError(null))
      dispatch(chatAction.requestMessagesError(null))
      dispatch(rideAction.requestRideError(null))
      dispatch(userAction.changeAddressError(false))
      dispatch(userAction.requestUserInfoError(false))
    },
  }
};
// jscs:enable

const mapStateToProps = function (state) {
  return state.toJS();
};

export const ErrorMessage = connect(
  mapStateToProps,
  mapDispatchToProps
)(message);
