/* This function will dispatch an action to change to Rider mode */
function nullFn(e) { console.log('you clicked me ' + e.target.className); };

export function RideButton({
  onRideButtonClick = nullFn,
}) {
  return (
    <div className='RideDiv' onClick={onRideButtonClick}>
      <button className='RideButton btn u-full-width' type='button'>Ride!</button>
    </div>
  );
}