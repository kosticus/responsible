import { ProfileButton } from '../components/ProfileButton';
import { CancelRideButton } from '../components/CancelRideButton';

export function TopNavBarRightButton({ isMatched, isConfirmed, isWaitingForMatch, }) {
  return (
    <div className="topNavBarRightButton">
      {
        // // User has been matched
        isMatched !== null && isConfirmed === true && isWaitingForMatch === false ?
          <CancelRideButton /> :
          <ProfileButton />
      }
    </div>
  );
}
