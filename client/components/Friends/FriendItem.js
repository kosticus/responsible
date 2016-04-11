import { UserImage } from '../../UserImage';

export function FriendItem({ avatar, name, onFriendItemClick }) {
  return (
    <div className="friendItem" onClick={onFriendItemClick}>
      <UserImage imageType="portrait" avatar={avatar} />
      <div className="friendName">{name}</div>
    </div>
  );
};
