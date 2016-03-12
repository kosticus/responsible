import { Link } from 'react-router';

// This function will dispatch action to change to Profile View
function nullFn(e) { console.log('you clicked me ' + e.target.className); };

export function ProfileButton({
  onProfileButtonClick = nullFn,
}) {
  return (
    <div className='ProfileButtonDiv two columns' onClick={onProfileButtonClick}>
      <button className='ProfileButton btn u-full-width'>Profile</button>
    </div>
  );
}
