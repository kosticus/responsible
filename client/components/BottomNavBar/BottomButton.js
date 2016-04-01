import { connect } from 'react-redux';

import { ConfirmLocationButton } from './ConfirmLocationButton';
import { Chat } from '../../containers/Chat';

import * as rideAction from '../../actionCreators/ride';

export function BottomButton({ isWaitingForMatch, isConfirmed, isMatched, isPickedUp,
  match, messages, user_id, friends, isDriver, confirmLocation, }) {

  let friendMatch;
  if (match) friendMatch = friends.find((friend) => friend.user_id === match.user_id);

  return (
    <div className="BottomNavBarRightButton">
    {
      !isWaitingForMatch && !isConfirmed
        ? <ConfirmLocationButton confirmLocation={confirmLocation} />
        : isConfirmed && isWaitingForMatch
          ? <div className='WaitingClick'>
              <section>
                <div>
                  <h2>
                  Waiting for a match
                  </h2>
                </div>
              </section>
            </div>
          : isMatched && !isPickedUp
            ? <Chat
                user_id={user_id}
                isDriver={isDriver}
                match={match}
                isPickedUp={isPickedUp}
                friends={friends}
                messages={messages}
              />
            : isDriver
              ? <h4>Thanks for taking {friendMatch.name} home.</h4>
              : <h3>{friendMatch.name} is taking you home.</h3>
    }
    </div>
  );
}
