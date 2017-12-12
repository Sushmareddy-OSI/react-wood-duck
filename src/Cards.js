import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Cards = props => {
  const {
    children,
    cardbgcolor,
    wrapContainer,
    columnXsmallWidth,
    offsetMediumValue,
    columnMediumWidth,
    columnLargeWidth,
  } = props;
  const classField = classNames(
    cardbgcolor,
    wrapContainer,
    `col-lg-${columnLargeWidth}`,
    `col-md-${columnMediumWidth}`,
    `col-md-offset-${offsetMediumValue}`,
    `col-xs-${columnXsmallWidth}`
  );
  let editClass = '';
  if (props.editable) {
    editClass = 'edit';
  } else {
    editClass = '';
  }
  return (
    <div className={classField}>
      <div className={`card ${editClass} double-gap-top`}>
        <div className="card-header">
          <span>{props.cardHeaderText}</span>
        </div>
        <div className="card-body">
          {children}
          <div className="clearfix" />
        </div>
      </div>
    </div>
  );
};

Cards.propTypes = {
  cardHeaderText: PropTypes.string,
  children: PropTypes.any,
  cardbgcolor: PropTypes.string,
  columnLargeWidth: PropTypes.number,
  columnMediumWidth: PropTypes.number,
  offsetMediumValue: PropTypes.number,
  columnXsmallWidth: PropTypes.number,
  wrapContainer: PropTypes.string,
  editable: PropTypes.bool,
};

Cards.defaultProps = {
  cardbgcolor: 'bg-light-grey',
  columnLargeWidth: 12,
  columnMediumWidth: 12,
  offsetMediumValue: 0,
  columnXsmallWidth: 12,
  wrapContainer: 'container-fluid',
  editable: false,
};

export default Cards;
