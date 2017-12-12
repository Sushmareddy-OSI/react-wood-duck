import React from 'react';
import PropTypes from 'prop-types';

const CheckboxRadioGroup = props => (
  <fieldset className="fieldset-inputs sans">
    <legend className="sr-only">{props.label}</legend>
    {props.options.map(opt => {
      return (
        <label key={opt}>
          <input
            id={props.id}
            className={props.fieldClassName}
            name={props.name}
            onChange={props.handleOnChange}
            value={opt}
            checked={props.selectedOptions.indexOf(opt) > -1}
            type={props.type}
          />
          <span>{opt}</span>
        </label>
      );
    })}
  </fieldset>
);

CheckboxRadioGroup.propTypes = {
  heading: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  fieldClassName: PropTypes.string,
  type: PropTypes.oneOf(['checkbox', 'radio']),
  name: PropTypes.string,
  options: PropTypes.array,
  selectedOptions: PropTypes.array,
  handleOnChange: PropTypes.func,
};

export default CheckboxRadioGroup;
