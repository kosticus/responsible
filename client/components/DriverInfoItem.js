import { UserImage } from './UserImage';

export function DriverInfoItem(props) {

  /* An object with a friend object gets send along, will probably need to refactor */
  return (
    <div className="driverInfoItem">
      <UserImage imageType="icon" avatar={drivers.avatar} />
      <span className="driverName">{drivers.fullName}</span>
    </div>
  );
};
