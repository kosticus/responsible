/* This function will dispatch an action to change to Rider mode */
function nullFn(e) { console.log('you clicked me ' + e.target.className); };

export function CatchARideButton({
  onCatchARideButtonClick = nullFn,
}) {
  return (
    <div className='RideDiv' onClick={onCatchARideButtonClick}>
      <button className='CatchARideButton btn u-full-width' type='button'>Ride!</button>
    </div>
  );
}
