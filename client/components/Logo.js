// This function will dispatch action to change to Home View (?)
function nullFn(e) { console.log('you clicked me ' + e.target.className); };

export function Logo({
  onLogoButtonClick = nullFn,
}) {
  return (
    <div className='Logo eight columns' onClick={onLogoButtonClick}>
      <button className='LogoButton btn u-full-width' type='button'>Responsiblé!</button>
    </div>
  );
}
