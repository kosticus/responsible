require('../public/styles/skeleton.css');
require('../public/styles/normalize.css');

// This function will dispatch action to change to Settings View
function nullFn(e) { console.log('you clicked me ' + e.target.className); };

export function SettingIcon({
  onSettingButtonClick = nullFn,
}) {
  return (
    <div className='SettingIcon' onClick={onSettingButtonClick}>
      <button className='SettingButton btn one-third column' type='button'>Settings!</button>
    </div>
  );
}
