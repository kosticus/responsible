import { Alert } from 'react-bootstrap';
import { FriendItem } from './FriendItem';

function nullFn(e) { console.log('you clicked me ' + e.target.className); };

export function FriendItemList({ friends, onFriendClick=nullFn }) {
  return (
    <div className="friendList">
    {
      (friends.length === 0) ?
        <Alert bsStyle="warning">
        <h4>Add friends to start saving lives</h4>
        </Alert>
        : <h2>Friends</h2>
    }
    {
      friends.map(function (friend) {
        return <FriendItem
          key={friend.id}
          onFriendItemClick={onFriendClick}
          {...friend}
        />;
      })
    }
    </div>
  );
};
