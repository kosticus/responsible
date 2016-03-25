import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Nav, Navbar, NavDropdown, NavItem, MenuItem } from 'react-bootstrap';

import { SettingIcon } from '../components/TopNavBar/Settings/SettingIcon';
import { Logo } from '../components/TopNavBar/Logo';
import { TopNavBarRightButton } from '../components/TopNavBar/RightButton';

import * as userAction from '../actionCreators/user';
import * as rideAction from '../actionCreators/ride';
import * as driveAction from '../actionCreators/drive';

function TopNavBar({ onCancel, onEndDriver, onPickUp, onComplete, onHomeClick, ...props }) {
  let endDriver = onEndDriver.bind(null, props.user.user_id);

  let cancelClick;
  if (props.ride.match) {
    cancelClick = onCancel.bind(null, props.ride.match.user_id, props.ride.ride_id);
    onPickUp = onPickUp.bind(null, props.ride.match.user_id);
    onComplete = onComplete.bind(null, props.ride.match.user_id);
  } else
    cancelClick = onCancel.bind(null, props.user.user_id, null);

  return (
    <Navbar>
      <Navbar.Header className="mainHeader">
        <Navbar.Brand className="mainTitle">
          <a href="/" onClick={onHomeClick} bsClass="navHeader" >Fleet</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1} href="#"><SettingIcon {...props}/></NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#"> <TopNavBarRightButton
          {...props}
          onCancel={cancelClick}
          onEndDriver={endDriver}
          onPickUp={onPickUp}
          onComplete={onComplete}
          />
        </NavItem>
      </Nav>
    </Navbar>
  );
}

const mapStateToProps = function (state) {
  return state.toJS();
};

// jscs:disable
const mapDispatchToProps = function (dispatch) {
  return {
    onSettingsButtonClick() {
      dispatch(push('/settings'))
    },
    onProfileButtonClick() {
      dispatch(push('/profile'))
    },
    onCancel: (user_id, ride_id) => {
      // Our current approach is to modify onCancel in the rendering of our
      // component - a better approach might be to augment that here, where we have access
      // to the component's next props through the second parameter of mapDispatchToProps
      console.log('dispatching cancel:', user_id, ride_id);
      dispatch(rideAction.cancelRide({ user_id, ride_id }))
    },
    onEndDriver(user_id) {
      dispatch(driveAction.deleteDriver(user_id))
    },
    onPickUp(partner_id) {
      dispatch(rideAction.pickUp(partner_id))
    },
    onComplete(partner_id) {
      dispatch(rideAction.completeRide(partner_id))
    },
    onHomeClick() {
      dispatch(push('/'));
    }
  };
};
// jscs:enable

export const TopNavBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopNavBar);
