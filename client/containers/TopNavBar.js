import React from 'react';
import { connect } from 'react-redux';

import { TopNavBarMiddleButton } from '../components/TopNavBarMiddleButton';
import { SettingIcon } from '../components/SettingIcon';
import { ProfileButton } from '../components/ProfileButton';

export class TopNavBar extends React.Component {
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
};

const mapStateToProps = function (state) {
  return state.toJS();
};

const mapDispatchToProps = function (dispatch) {
  return {
    onSettingsButtonClick: function() {},
  };
};

export const TopNavBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopNavBar);
