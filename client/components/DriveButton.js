require('../public/styles/skeleton.css');
require('../public/styles/normalize.css');

export function DriveButton({ onMiddleButtonClick, }) {
  return (
    <div className='DriveButton' onClick={onMiddleButtonClick}>
      <button className='DriveButton btn three columns' type='button'>Drive!</button>
    </div>
  );
}
