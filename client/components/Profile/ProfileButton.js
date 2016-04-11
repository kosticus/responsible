import { Button, ButtonToolbar } from 'react-bootstrap';

// This function will dispatch action to change to Profile View
function nullFn(e) { console.log('you clicked me ' + e.target.className); };

export function ProfileButton({
  onProfileButtonClick = nullFn,
}) {
  return (
    <div className='settingsDiv' onClick={onProfileButtonClick}>
			<section>
				<div>
          <ButtonToolbar className="settingsButton">
           <Button bsStyle="primary" block>Profile</Button>
          </ButtonToolbar>`
				</div>
			</section>
    </div>
  );
}
