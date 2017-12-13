import React from 'react';
import { shallow } from 'enzyme';
import './EnzymeSetup';
import GlobalHeaderAction from '../GlobalHeaderAction';

describe('GlobalHeaderIcon', () => {
  const icon = <i className="fa fa-user" />;
  const ariaLabel = 'test label';

  it('renders null when no callback property is given', () => {
    const globalHeaderAction = shallow(
      <GlobalHeaderAction icon={icon} ariaLabel={ariaLabel} />
    );
    expect(globalHeaderAction.equals(null)).toBe(true);
  });

  describe('given callback property', () => {
    let callbackInstance;
    let globalHeaderAction;
    beforeEach(function() {
      callbackInstance = { callback: function() {} };
      spyOn(callbackInstance, 'callback');
      globalHeaderAction = shallow(
        <GlobalHeaderAction
          icon={icon}
          ariaLabel={ariaLabel}
          callback={callbackInstance.callback}
        />
      );
    });

    it('renders given icon element', () => {
      expect(globalHeaderAction.contains(icon)).toBe(true);
    });

    it('renders with given aria label', () => {
      expect(
        globalHeaderAction
          .findWhere(n => n.prop('ariaLabel') === 'test label')
          .exists()
      ).toBe(true);
    });

    it('invokes given callback on click', () => {
      globalHeaderAction.find('a').simulate('click');
      expect(callbackInstance.callback).toHaveBeenCalled();
    });
  });
});
