import React from 'react';
import Layout01 from '../Layout01.js';
import GlobalHeader from '../GlobalHeader.js';
import PageHeader from '../PageHeader.js';
import { shallow } from 'enzyme';
import './EnzymeSetup';

describe('Layout01', () => {
  const globalHeaderProps = {
    searchCallback: function() {},
    addNewCallback: function() {},
    notificationsCallback: function() {},
    logoutCallback: function() {},
  };
  const wrapper = shallow(<Layout01 globalHeaderProps={globalHeaderProps} />);

  it('contains matching elements', () => {
    expect(wrapper.containsMatchingElement(<PageHeader />)).toEqual(true);
    expect(wrapper.containsMatchingElement(<GlobalHeader {...globalHeaderProps} />)).toEqual(true);
  });
});
