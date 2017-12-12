import React from 'react';
import PropTypes from 'prop-types';

const TextArea = props => (
  <div className="form-group">
    <div className={props.gridClassName}>
      <label className="form-label" htmlFor={props.name}>
        {props.label}
        <textarea
          id={props.id}
          className={props.labelClassName}
          style={props.resize ? null : { resize: 'none' }}
          name={props.name}
          rows={props.rows}
          value={props.value}
          onChange={props.handleOnChange}
          placeholder={props.placeholder}
        />
      </label>
    </div>
  </div>
);

TextArea.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  rows: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  labelClassName: PropTypes.string,
  gridClassName: PropTypes.string,
  resize: PropTypes.bool,
  placeholder: PropTypes.string,
  handleOnChange: PropTypes.func,
};

export default TextArea;
