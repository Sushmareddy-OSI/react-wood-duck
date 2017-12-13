import React from 'react';
import PropTypes from 'prop-types';
import GlobalHeaderIcon from './GlobalHeaderIcon';
import ProfileAvatar from './ProfileAvatar';

const logo = 'CWDS';
const searchIcon = () => <i className="fa fa-search" />;
const addIcon = () => <i className="fa fa-plus" />;
const notificationIcon = () => <i className="fa fa-bell" />;

class GlobalHeader extends React.Component {
  render() {
    const {
      logoCallback,
      profileId,
      profileName,
      profileAvatar,
      searchIconCallback,
      addIconCallback,
      notificationIconCallback,
      logoutCallback,
    } = this.props;
    return (
      <header className="container-fluid" role="banner">
        <nav className="row">
          <div className="col-xs-12 col-sm-1">
            <div className="logo">
              <button
                className="btn btn-link"
                type="button"
                onClick={logoCallback}
              >
                {logo}
              </button>
            </div>
          </div>
          <div className="col-xs-12 col-sm-11">
            <div className="pull-right">
              <ul className="header-actions">
                <GlobalHeaderIcon
                  icon={searchIcon()}
                  ariaLabel="search"
                  callback={searchIconCallback}
                  profileId={profileId}
                />
                <GlobalHeaderIcon
                  icon={addIcon()}
                  ariaLabel="add new"
                  callback={addIconCallback}
                  profileId={profileId}
                />
                <GlobalHeaderIcon
                  icon={notificationIcon()}
                  ariaLabel="notifications"
                  callback={notificationIconCallback}
                  profileId={profileId}
                />
                <li>
                  <p className="profile">
                    {' '}
                    <a href="#/">{profileName}</a>
                  </p>
                </li>
                <li>
                  <ProfileAvatar
                    profileId={profileId}
                    profileAvatar={profileAvatar}
                    logoutCallback={logoutCallback}
                  />
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
  /** callback for logo (CWDS) */
  logoCallback: PropTypes.func,
  /** profile name / user name */
  profileName: PropTypes.string,
  /** profile avatar */
  profileAvatar: PropTypes.node,
  /** profile id OR user id if a user is logged in */
  profileId: PropTypes.string,
  /** callback to logout user */
  logoutCallback: PropTypes.func,
  /** callback to customize search functionality */
  searchIconCallback: PropTypes.func,
  /** callback to customize 'Add New' functionality */
  addIconCallback: PropTypes.func,
  /** notification callback to show notifications */
  notificationIconCallback: PropTypes.func,
};

GlobalHeader.defaultProps = {
  profileName: '',
};

export default GlobalHeader;
