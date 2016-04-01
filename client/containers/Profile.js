import React from 'react';
import { connect } from 'react-redux';
import { curry } from 'ramda';

import { TopNavBarContainer } from './TopNavBar';
import { FriendItemList } from '../components/TopNavBar/Friends/FriendItemList';
import { UserImage } from '../components/UserImage';
import { ProfileItemList } from '../components/Profile/ProfileItemList';
import { Alert } from 'react-bootstrap';
import * as userAction from '../actionCreators/user';

function Profile({ user_id, friends, profile, onFriendClick, onAddressEdit,
  isChangingAddress, editAddress, address, resetAddressFlag, }) {

  /*
    Dear Kim,
      I've had a few drinks to drink and now I have a question to query.
      Is this address a piece of the user object (as opposed to the user.profile
      object)? We might be checking the wrong piece of state and resetting our address
      to null! NULL!!
    Sincerely,
      J$
  */
  if (address) setTimeout(resetAddressFlag, 6000);

  return (
    <div className="ProfileContainer">
      <TopNavBarContainer />
      {
        !profile.address ?
        <Alert bsStyle="warning"dismissAfter={5000}>
        <h4>Please add your address</h4>
        </Alert>
        : address ?
        <Alert bsStyle="success"dismissAfter={5000}>
        <h4>You successfully added your address: {address}</h4>
        </Alert>
        : <div />
      }
      <div className="profilePortraitContainer">
      <center>
        <UserImage {...profile} imageType="portrait" />
        <div className="nameContainer">
          <h2 className="profileItem">{profile.name}</h2>
        </div>

      <div className="profileAddress">
        <h3>Home Address:</h3>
        {
          isChangingAddress || !profile.address ?
          <form onSubmit={onAddressEdit(user_id)}>
            <input className="addressForm is-primary" defaultValue={profile.address}
              id="address"></input>
            <br />
            <input className="addressSubmit button is-primary" type="submit" />
          </form>
          :
          <div>
            <span className="profileAddress"> {profile.address}</span>
            <br />
            <button className="editAddress is-primary" onClick={editAddress}>Edit Address</button>
          </div>
        }
      </div>
      </center>
      </div>
    </div>
  );
}

const mapStateToProps = function (state) {
  return state.get('user').toJS();
};

const mapDispatchToProps = function (dispatch) {
  return {
    onAddressEdit: curry((user_id, e) => {
      e.preventDefault();
      let newAddress = e.target.firstChild.value;

      dispatch(userAction.changeAddress(user_id, newAddress));
    }),
    editAddress() {
      dispatch(userAction.changingAddress());
    },

    resetAddressFlag() {
      dispatch(userAction.changeAddressSuccess(null));
    },
  };
};

export const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
