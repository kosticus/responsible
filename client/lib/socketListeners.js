import { prop } from 'ramda';

import { store } from './storeConfig';

import * as chatActions from '../actionCreators/chat';
import * as rideActions from '../actionCreators/ride';
import * as userActions from '../actionCreators/user';

const dispatch = store.dispatch;

/**
 *  Handle socket configuration and messaging.
**/
export function configureListeners(socket) {

  // Example (first) socket listener. When we see the 'receive_message' event,
  // dispatch an addMessage action with the new message data.
  socket.on('new_message', function (data) {
    console.log('received message from server!:', data);
    dispatch(chatActions.addMessage(data));
  });

  // expects data: { user_id, location }
  socket.on('add_rider', function (data) {
    console.log('received a new friend rider!', data);
    dispatch(rideActions.addRider(data));
  });

  // expects data: { avatar, user_id, name, address }
  socket.on('new_friend', function (data) {
    console.log('Someone likes us!', data);
    dispatch(userActions.receiveFriendInfo(data));
  });

  // TODO: does not actually remove rider BUT SHOULD
  // Event listened to by drivers - alerts them if their current ride is cancelled.
  socket.on('cancel_ride', function (data) {
    console.log('received socket event to cancel ongoing ride', data);
    dispatch(rideActions.cancelRideSuccess());
  });

  // Must check implementation
  // Event listened to by drivers - alerts them when a user no longer needs a ride.
  // expects data: riderId <Number>
  socket.on('remove_rider', function (data) {
    console.log('received socket event to remove rider:', data);
    dispatch(rideActions.removeRider(data));
  });

  // received on a partner emitting an updated location
  // expects data: { entry: { lat, lng } }
  socket.on('new_location', function (data) {
    dispatch(rideActions.setMatchLocation(data));
  });

  // A driver has decided to give us a ride.
  // expects data: { match: { user_id, location }}
  socket.on('confirm_driver', function (data) {
    console.log("We've found a driver!", data);

    let user = store.getState().get('user').toJS();
    let friendIds = user.friends.map(prop('user_id'));
    let user_id = user.user_id;
    dispatch(rideActions.matchRider(user_id, friendIds, data));
  });

  // Riders has been picked up by driver
  socket.on('picked_up', function () {
    console.log("We've been picked up!");
    dispatch(rideActions.pickedUp());
  });

  // Rider has been dropped off by driver
  socket.on('dropped_off', function () {
    console.log("We've been dropped off!");
    dispatch(rideActions.droppedOff());
  });
  
};
