import { UserImage } from './UserImage';

export function RiderInfoItem({ friends }) {

  /* An object with a friend object gets send along, will probably need to refactor */
  return (
    <div className="riderInfoItem">
      <UserImage imageType="icon" avatar={friends.avatar} />
      <span className="riderName">{friends.fullName}</span>
    </div>
  );
};
