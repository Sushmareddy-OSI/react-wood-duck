import React from 'react';
import NavLink from '../NavLink.js';
import NavLinks from '../NavLinks.js';
import SideBar from '../SideBar.js';
import Layout03 from '../Layout03.js';
import GlobalHeader from '../GlobalHeader.js';
import PageHeader from '../PageHeader.js';
import { shallow } from 'enzyme';
import './EnzymeSetup';

describe('Layout03', function() {
  const clickHandler = function() {};
  const globalHeaderProps = {
    searchCallback: function() {},
    addNewCallback: function() {},
    notificationsCallback: function() {},
    logoutCallback: function() {},
  };
  const sideBarContent = (
    <NavLinks>
      <NavLink
        text="Tommy Cambell"
        href="#tm"
        preIcon="fa fa-user"
        handleClick={clickHandler}
        active={true}
        key={1}
      />
      <NavLink
        text="Aubrey Cambell"
        href="#au"
        preIcon="fa fa-user"
        handleClick={clickHandler}
        key={2}
      />
    </NavLinks>
  );
  const sideBarWidth = 4;
  const wrapper = shallow(
    <Layout03
      globalHeaderProps={globalHeaderProps}
      sideBarContent={sideBarContent}
      sideBarColumnWidth={sideBarWidth}
    />
  );

  it('verify the no of "div" tags ', () => {
    expect(wrapper.find('div').length).toEqual(2);
  });

  it('contains matching elements', () => {
    expect(wrapper.containsMatchingElement(<PageHeader />)).toEqual(true);
    expect(
      wrapper.containsMatchingElement(<GlobalHeader {...globalHeaderProps} />)
    ).toEqual(true);
    expect(
      wrapper.containsMatchingElement(
        <SideBar columnWidth={sideBarWidth}>{sideBarContent}</SideBar>
      )
    ).toEqual(true);
  });
});
