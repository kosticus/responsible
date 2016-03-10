import { Link } from 'react-router';
require('../public/styles/skeleton.css');
require('../public/styles/normalize.css');

// This function will dispatch action to change to Profile View
function nullFn(e) { console.log('you clicked me ' + e.target.className); };

export function ProfileButton({
  onProfileButtonClick = nullFn,
}) {

  // Link to={`/profile/${user.id}`}
  return (
    <div className='ProfileButton' onClick={onProfileButtonClick}>
      <button className='ProfileButton btn'>
        <Link to="/profile">Profile</Link>
      </button>
    </div>
  );
}
