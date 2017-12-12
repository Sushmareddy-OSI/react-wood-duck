import React from 'react';
import {shallow} from 'enzyme';
import './EnzymeSetup';

import ProfileAvatar from '../ProfileAvatar';

describe('ProfileAvatar', () => {
    const defaultProfileAvatar = <i className="fa fa-user" />;
    it('Default', () => {
      expect(shallow(<ProfileAvatar />).equals(null)).toBe(true);
    });

    describe('given profileId', () => {
       const profileAvatar = shallow(<ProfileAvatar profileId='profile.id' />);
       it('renders default avatar', () => {
          expect(profileAvatar.contains(defaultProfileAvatar)).toBe(true);
       });

       it('clicking on profile avatar does not render logout button', () => {
          profileAvatar.simulate('click');
          expect(profileAvatar.findWhere(n => n.text() == 'Logout').exists()).toBe(false);
       });
    });

    describe('given logoutCallback', () => {
        const callback = function() {};
        const spyCallback = jasmine.createSpy(callback);
        const profileAvatar = shallow(<ProfileAvatar logoutCallback={callback} />);
        it('renders default avatar', () => {
          expect(profileAvatar.contains(defaultProfileAvatar)).toBe(true);
       });

       it('clicking on profile avatar renders logout button', () => {
          profileAvatar.find('a').simulate('click');
          expect(profileAvatar.findWhere(n => n.text() == 'Logout').exists()).toBe(true);
       });

       it('clicking on profile avatar hides visible logout button', () => {
	        profileAvatar.setState({isHidden: false});
          profileAvatar.find('a').first().simulate('click');
          expect(profileAvatar.findWhere(n => n.text() == 'Logout').exists()).toBe(false);
       });

      it('click on logout invokes logoutCallback', () => {
        profileAvatar.setProps({logoutCallback: spyCallback});
        profileAvatar.setState({isHidden: false});
        profileAvatar.find('a').at(1).simulate('click');
        expect(spyCallback).toHaveBeenCalled();
      });
    });

    it('renders given profile avatar', () => {
       const avatar = <i className="fa fa-warning" />;
       const profileAvatar = shallow(<ProfileAvatar profileId='profile.id' profileAvatar={avatar}/>);
       expect(profileAvatar.contains(avatar)).toBe(true);
    });
});
