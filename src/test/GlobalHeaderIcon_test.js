import React from 'react';
import GlobalHeaderIcon from '../GlobalHeaderIcon';
import { shallow, mount } from 'enzyme';
import './EnzymeSetup';

describe('GlobalHeaderIcon', () => {
  const icon = <i className='fa fa-user' />
  const ariaLabel = 'test label';

  it('renders null when no callback property is given', () => {
    const globalHeaderIcon = shallow(<GlobalHeaderIcon icon={icon} ariaLabel={ariaLabel} />);
    expect(globalHeaderIcon.equals(null)).toBe(true);
  });

  describe('given callback property', () => {
    let callbackInstance;
    let globalHeaderIcon;
    beforeEach(function() {
      callbackInstance = { callback: function() {} };
      spyOn(callbackInstance, 'callback');
      globalHeaderIcon = shallow(<GlobalHeaderIcon icon={icon} ariaLabel={ariaLabel} callback={callbackInstance.callback} />);
    });

    it('renders given icon element', () => {
      expect(globalHeaderIcon.contains(icon)).toBe(true);
    });

    it('renders with given aria label', () => {
      expect((globalHeaderIcon.findWhere(n => n.prop('ariaLabel') == 'test label')).exists()).toBe(true);
    });

    it('invokes given callback on click', () => {
      globalHeaderIcon.find('a').simulate('click');
      expect(callbackInstance.callback).toHaveBeenCalled();
    });
  });
});
