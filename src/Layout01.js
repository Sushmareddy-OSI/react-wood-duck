import React from 'react';
import PropTypes from 'prop-types';
import GlobalHeader from './GlobalHeader.js';
import PageHeader from './PageHeader.js';

class Layout01 extends React.Component {
  render() {
    const { globalHeaderProps } = this.props;
    return (
      <div>
        <GlobalHeader {...globalHeaderProps} />
        <PageHeader />
        <div>{this.props.children}</div>
      </div>
    );
  }
}
Layout01.propTypes = {
  globalHeaderProps: PropTypes.object,
  children: PropTypes.any,
};
Layout01.defaultProps = {};

export default Layout01;
