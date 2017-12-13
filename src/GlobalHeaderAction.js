import React from 'react';
import PropTypes from 'prop-types';

const GlobalHeaderIcon = function(props) {
  const { icon, ariaLabel, callback } = props;
  if (!callback) return null;

  return (
    <li>
      <a ariaLabel={ariaLabel} href="#/" onClick={event => callback(event)}>
        {icon}
      </a>
    </li>
  );
};

GlobalHeaderIcon.propTypes = {
  /** Icon element to render */
  icon: PropTypes.node.isRequired,
  /** aria-label to use */
  ariaLabel: PropTypes.string.isRequired,
  /** callback to invoke onClick */
  callback: PropTypes.func,
};

export default GlobalHeaderIcon;
