import React from 'react';
import PropTypes from 'prop-types';

const defaultSearchIcon = () => <i className="fa fa-search" />;
const defaultAddIcon = () => <i className="fa fa-plus" />;
const defaultBellIcon = () => <i className="fa fa-bell" />;

class GlobalHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
    };
    this._handleChange = this._handleChange.bind(this);
    this._renderToggle = this._renderToggle.bind(this);
  }
  _handleChange() {
    this.setState({
      isHidden: !this.state.isHidden,
    });
  }

  _renderToggle() {
    return (
      <ul className="c_dropdown">
        <li>
          <a href={this.props.logoutUrl}>Logout</a>
        </li>
      </ul>
    );
  }
  render() {
    const {
      logo,
      searchIcon,
      addIcon,
      notificationIcon,
      profileName,
      profileAvatar,
    } = this.props;
    return (
      <header className="container-fluid" role="banner">
        <nav className="row">
          <div className="col-xs-12 col-sm-1">
            <div className="logo">{logo}</div>
          </div>
          <div className="col-xs-12 col-sm-11">
            <div className="pull-right">
              <ul className="header-actions">
                <li>
                  <a aria-label="search" href="#/">
                    {searchIcon}
                  </a>
                </li>
                <li>
                  <a aria-label="add new" href="#/">
                    {addIcon}
                  </a>
                </li>
                <li>
                  <a aria-label="notifications" href="#/">
                    {notificationIcon}
                  </a>
                </li>
                <li>
                  <p className="profile">
                    {' '}
                    <a
                      href="#/"
                      onClick={this._handleChange}
                      onBlur={this._handleChange}
                    >
                      {profileName}
                    </a>
                  </p>
                  {!this.state.isHidden && this._renderToggle()}
                </li>
                <li>
                  <div className="profile-avatar">{profileAvatar}</div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

GlobalHeader.propTypes = {
  logo: PropTypes.string,
  profileName: PropTypes.string,
  profileAvatar: PropTypes.string,
  logoutUrl: PropTypes.string,
  searchIcon: PropTypes.any,
  addIcon: PropTypes.any,
  notificationIcon: PropTypes.any,
};

GlobalHeader.defaultProps = {
  logo: 'CWDS',
  profileName: 'Profile Name',
  profileAvatar: 'PN',
  logoutUrl: '/logout',
  searchIcon: defaultSearchIcon(),
  addIcon: defaultAddIcon(),
  notificationIcon: defaultBellIcon(),
};

export default GlobalHeader;
