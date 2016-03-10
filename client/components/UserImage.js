// require('../public/styles/profile.css');
require('../public/styles/skeleton.css');
require('../public/styles/normalize.css');

export function UserImage({ avatar, imageType }) {
  return (
    <div className="avatar">
    {
      imageType === 'portrait' ?
        <img className="userPortrait" src={ avatar /*  portrait size */ } /> :
        <img className="userIcon" src={ avatar /*  icon size  */ } />
    }
    </div>
  );
}
