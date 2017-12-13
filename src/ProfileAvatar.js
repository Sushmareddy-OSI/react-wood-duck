import React from 'react';
import PropTypes from 'prop-types';

class ProfileAvatar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
    };
    this._handleChange = this._handleChange.bind(this);
    this._handleBlur = this._handleBlur.bind(this);
    this._renderToggle = this._renderToggle.bind(this);
  }

  _handleChange() {
    this.setState({
      isHidden: !this.state.isHidden,
    });
  }

  _handleBlur() {
    this.setState({
      isHidden: true,
    });
  }

  _renderToggle() {
    return (
      <ul className="c_dropdown">
        <li>
          <a
            href="#/"
            onClick={event =>
              this.props.logoutCallback(this.props.profileId, event)}
          >
            Logout
          </a>
        </li>
      </ul>
    );
  }

  render() {
    const { profileId, profileAvatar, logoutCallback } = this.props;
    if (!profileId && !logoutCallback) return null;
    return (
      <div className="profile-avatar">
        <a
          href="#/"
          onClick={this._handleChange}
          tabIndex="0"
          onBlur={this._handleBlur}
        >
          {profileAvatar}
        </a>
        {logoutCallback && !this.state.isHidden && this._renderToggle()}
      </div>
    );
  }
}

ProfileAvatar.propTypes = {
  /** profile id OR user id if a user is logged in */
  profileId: PropTypes.string,
  /** profile avatar */
  profileAvatar: PropTypes.node,
  /** callback for logout */
  logoutCallback: PropTypes.func,
};

ProfileAvatar.defaultProps = {
  profileAvatar: <i className="fa fa-user" />,
};

export default ProfileAvatar;
