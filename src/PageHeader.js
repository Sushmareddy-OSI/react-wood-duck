import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PageHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyHeader: false,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll(currentWindow = window, currentDocument = document) {
    var element = currentDocument.querySelector('.page-header-mast');
    var pageY = window.scrollY;
    pageY = currentWindow.scrollY;
    if (pageY !== 0 && element.getBoundingClientRect().bottom > 100) {
      this.setState({ stickyHeader: true });
    } else if (pageY === 0) {
      this.setState({ stickyHeader: false });
    }
  }
  render() {
    if (this.state.stickyHeader) {
      var stickyClass = {
        top: '0.000em',
      };
    }

    return (
      <div className="page-header-mast" style={stickyClass}>
        <div className="container">
          <div className="row">
            <div className="col-xs-9">
              <div className="page-title text-left">{this.props.pageTitle}</div>
            </div>
            <div className="col-xs-3">{this.props.button}</div>
          </div>
        </div>
      </div>
    );
  }
}

const buttonDefault = (
  <button type="button" className="primary-btn pull-right">
    Customize
  </button>
);
PageHeader.propTypes = {
  button: PropTypes.node,
  pageTitle: PropTypes.string,
};
PageHeader.defaultProps = {
  pageTitle: `CaseName`,
  button: buttonDefault,
};

export default PageHeader;
