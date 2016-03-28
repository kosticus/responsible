 import { Button, ButtonToolbar } from 'react-bootstrap';

// This function will dispatch action to change to Settings View
function nullFn(e) { console.log('you clicked me ' + e.target.className); };

export function EndDrivingButton({
  onEndDriver = nullFn,
}) {
  return (
    <div className='endDrivingButton' onClick={onEndDriver}>
      <ButtonToolbar className="rightButton">
              <Button bsStyle="primary" block>End Driving</Button>
      </ButtonToolbar>
    </div>
  );
}
