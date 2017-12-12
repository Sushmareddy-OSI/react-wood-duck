import React from 'react';
import PageHeader from '../PageHeader.js';

import { shallow } from 'enzyme';
import './EnzymeSetup';

describe('<PageHeader />', () => {
  var input = {
    pageTitle: 'testPageTitle',
  };

  const pageHeader = shallow(<PageHeader />);
  const pageHeaderwithProps = shallow(<PageHeader {...input} />);

  it('renders the tag', () => {
    expect(pageHeader.type()).toBe('div');
  });

  it('verify the className', () => {
    expect(pageHeader.props().className).toBe('page-header-mast');
  });

  it('find element with tag', () => {
    expect(pageHeader.find('div').length).toEqual(6);
    expect(pageHeaderwithProps.find('button').length).toEqual(1);
  });

  it('find element with class and default props', () => {
    expect(pageHeader.find('.row').length).toEqual(1);
    expect(pageHeader.find('.page-title').props().className).toBe(
      'page-title text-left'
    );
  });

  it('check default props', () => {
    expect(pageHeader.instance().props.pageTitle).toEqual('CaseName');
  });

  it('find element with class and object passed as props', () => {
    expect(pageHeaderwithProps.find('.page-title').props().className).toBe(
      'page-title text-left'
    );
    expect(pageHeaderwithProps.find('.page-title').props().children).toEqual(
      'testPageTitle'
    );
    expect(pageHeaderwithProps.find('button').length).toBe(1);
  });

  describe('#handleScroll', () => {
    describe('with scrolling', () => {
      it('sets stickyHeader to true', () => {
        const currentWindow = { scrollY: 2 };
        const element = {
          getBoundingClientRect: () => {
            return { bottom: 101 };
          },
        };
        const currentDocument = {
          querySelector: () => {
            return element;
          },
        };

        pageHeaderwithProps
          .instance()
          .handleScroll(currentWindow, currentDocument);
        expect(pageHeaderwithProps.instance().state.stickyHeader).toEqual(true);
      });
    });

    describe('not scrolled', () => {
      it('sets stickyHeader to false', () => {
        const currentWindow = { scrollY: 0 };
        const element = {
          getBoundingClientRect: () => {
            return { bottom: 101 };
          },
        };
        const currentDocument = {
          querySelector: () => {
            return element;
          },
        };
        pageHeaderwithProps
          .instance()
          .handleScroll(currentWindow, currentDocument);
        expect(pageHeaderwithProps.instance().state.stickyHeader).toEqual(
          false
        );
      });
    });

    describe('less than 100 pixels from bottom ', () => {
      it('sets stickyHeader to false', () => {
        const currentWindow = { scrollY: 11 };
        const element = {
          getBoundingClientRect: () => {
            return { bottom: 99 };
          },
        };
        const currentDocument = {
          querySelector: () => {
            return element;
          },
        };
        pageHeaderwithProps
          .instance()
          .handleScroll(currentWindow, currentDocument);
        expect(pageHeaderwithProps.instance().state.stickyHeader).toEqual(
          false
        );
      });
    });
  });

  describe('#render', () => {
    describe('with stickyHeader', () => {
      it('adds a 0.000em style', () => {
        const pageHeaderElement = shallow(<PageHeader />);
        pageHeaderElement.setState({ stickyHeader: true });

        expect(pageHeaderElement.props().style).toEqual({ top: '0.000em' });
      });
    });

    describe('without stickyHeader', () => {
      it('adds a 0.000em style', () => {
        const pageHeaderElement = shallow(<PageHeader />);

        expect(pageHeaderElement.props().style).toEqual(undefined);
      });
    });
  });

  describe('#render page header button', () => {
    describe('default button', () => {
      it('displays default button', () => {
        const pageHeader = shallow(<PageHeader />);

        expect(pageHeader.find('button').length).toEqual(1);
      });
    });

    describe('customize button', () => {
      it('displays customize button', () => {
        const buttonCustomize = (
          <button type="button" className="primary-btn pull-right">
            Save Form
          </button>
        );
        const pageHeader = shallow(<PageHeader button={buttonCustomize} />);

        expect(pageHeader.find('button').length).toEqual(1);
        expect(pageHeader.find('button').text()).toEqual('Save Form');
      });
    });

    describe('no button', () => {
      it('displays no button', () => {
        const pageHeader = shallow(<PageHeader button={null} />);

        expect(pageHeader.find('button').length).toEqual(0);
      });
    });
  });
});
