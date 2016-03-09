import React from 'react';
import { TopNavBarMiddleButton } from '../components/TopNavBarMiddleButton';
import { SettingIcon } from '../components/SettingIcon';
import { ProfileButton } from '../components/ProfileButton';

export class TopNavBarContainer extends React.Component {
  constructor({ drivers, flags }) {
    super();
    this.drivers = drivers;
    this.flags = flags;
  }

  render() {
    return (
      <div className="TopNavBarContainer">
        <SettingIcon />
        <TopNavBarMiddleButton {...this.flags} drivers={this.drivers} />
        <ProfileButton />
      </div>
    );
  }
}
