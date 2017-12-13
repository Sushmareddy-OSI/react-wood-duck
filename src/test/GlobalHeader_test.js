import React from 'react';
import { shallow } from 'enzyme';
import './EnzymeSetup';

import GlobalHeader from '../GlobalHeader';
import GlobalHeaderIcon from '../GlobalHeaderIcon';
import ProfileAvatar from '../ProfileAvatar';

describe('Global Header', () => {
  const searchIcon = <i className="fa fa-search" />;
  const addIcon = <i className="fa fa-plus" />;
  const notificationIcon = <i className="fa fa-bell" />;

  describe('With default properties', () => {
    const globalHeader = shallow(<GlobalHeader />);

    it('renders the tag', () => {
      expect(globalHeader.type()).toBe('header');
    });

    it('verify the className', () => {
      expect(globalHeader.props().className).toBe('container-fluid');
    });

    it('renders nav element', () => {
      expect(globalHeader.find('nav').length).toEqual(1);
    });

    it('renders logo', () => {
      expect(globalHeader.findWhere(n => n.text() === 'CWDS').exists()).toBe(true);
    });

    it('renders search icon without callback', () => {
      expect(
        globalHeader.contains(
          <GlobalHeaderIcon icon={searchIcon} ariaLabel="search" />
        )
      ).toBe(true);
    });

    it('renders add icon without callback', () => {
      expect(
        globalHeader.contains(
          <GlobalHeaderIcon icon={addIcon} ariaLabel="add new" />
        )
      ).toBe(true);
    });

    it('defines notification icon without callback', () => {
      expect(
        globalHeader.contains(
          <GlobalHeaderIcon icon={notificationIcon} ariaLabel="notifications" />
        )
      ).toBe(true);
    });

    it('renders empty profile name', () => {
      expect(globalHeader.find('.profile a').text()).toBe('');
    });
  });

  describe('With given properties', () => {
    var input = {
      logo: 'testlogo',
      logoCallback: function() {},
      profileId: 'user.id',
      profileName: 'testProfileName',
      profileAvatar: 'testProfileAvatar',
      searchIconCallback: function() {},
      addIconCallback: function() {},
      notificationIconCallback: function() {},
      logoutCallback: function() {},
    };
    let globalHeaderWithProps;
    beforeEach(function() {
      globalHeaderWithProps = shallow(<GlobalHeader {...input} />);
    });

    it('click on logo invokes logoCallback', () => {
      spyOn(input, 'logoCallback');
      globalHeaderWithProps.setProps({'logoCallback': input.logoCallback});
      globalHeaderWithProps
        .find('.logo')
        .find('button')
        .simulate('click');
      expect(input.logoCallback).toHaveBeenCalled();
    });

    it('renders search icon', () => {
      expect(
        globalHeaderWithProps.contains(
          <GlobalHeaderIcon
            icon={searchIcon}
            ariaLabel="search"
            callback={input.searchIconCallback}
            profileId={input.profileId}
          />
        )
      ).toBe(true);
    });

    it('renders add icon with callback', () => {
      expect(
        globalHeaderWithProps.contains(
          <GlobalHeaderIcon
            icon={addIcon}
            ariaLabel="add new"
            callback={input.addIconCallback}
            profileId={input.profileId}
          />
        )
      ).toBe(true);
    });

    it('renders notification icon with callback', () => {
      expect(
        globalHeaderWithProps.contains(
          <GlobalHeaderIcon
            icon={notificationIcon}
            ariaLabel="notifications"
            callback={input.notificationIconCallback}
            profileId={input.profileId}
          />
        )
      ).toBe(true);
    });

    it('renders empty profile name with callback', () => {
      expect(globalHeaderWithProps.find('.profile a').text()).toBe(
        input.profileName
      );
    });

    it('renders profile avatar with given profileAvatar property', () => {
      expect(
        globalHeaderWithProps.contains(
          <ProfileAvatar
            profileId={input.profileId}
            profileAvatar={input.profileAvatar}
            logoutCallback={input.logoutCallback}
          />
        )
      ).toBe(true);
    });
  });
});
