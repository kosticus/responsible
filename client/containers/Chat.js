import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { curry } from 'ramda';

import { ButtonInput } from 'react-bootstrap';

import { DriverItem } from '../components/DriverItem';
import { MessageItemList } from '../components/Chat/MessageItemList';

import * as chatAction from '../actionCreators/chat';

export function box({ isDriver, isPickedUp, user_id, match, friends, messages, addMessage }) {

  let friendPartner = friends.find((friend) => match.user_id === friend.user_id);

  return (
    <div className='chatbox'>
      <DriverItem
        isDriver={isDriver}
        isPickedUp={isPickedUp}
        name={friendPartner.name}
        avatar={friendPartner.avatar}
      />
      <MessageItemList user_id={user_id} messages={messages}/>
      <div className='textSubmit'>
        <form onSubmit={addMessage(user_id, match.user_id)}>
          <input className="messageText ten columns" defaultValue='' id="message"></input>
          <ButtonInput type="submit" className="messageSubmit button" value="Send" />
        </form>
      </div>
    </div>
  );
}

// jscs:disable
const mapDispatchToProps = function (dispatch) {
  return {
    addMessage: curry(function (user_id, partner_id, e) {
      e.preventDefault();
      let timeStamp = new Date();
      let currentTime = timeStamp.getHours() + ':' + timeStamp.getMinutes();
      let messageObject = {
        user_id: user_id,
        time: currentTime,
        text: e.target.firstChild.value,
      };

      e.target.firstChild.value = '';
      dispatch(chatAction.submitMessage(partner_id, messageObject));
    }),
  };
};
// jscs:enable

export const Chat = connect(
  null,
  mapDispatchToProps
)(box);
