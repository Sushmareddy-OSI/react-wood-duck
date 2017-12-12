import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import DropDownField from '../../src/DropDownField';

const CenterDecorator = storyFn => <div className="container">{storyFn()}</div>;

const stateTypes = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
];
class DropDownWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checkSelectedValue: '' };
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  handleOnChange(event) {
    this.setState({ checkSelectedValue: event.value });
  }
  render() {
    return (
      <DropDownField
        label="Select"
        gridClassName="col-md-12 col-sm-12 col-xs-12"
        selectedOption={this.state.checkSelectedValue}
        options={stateTypes}
        onChange={this.handleOnChange}
      />
    );
  }
}
const DropDownFieldStory = withInfo(
  `
    #### Usage
      - Use when a user needs to select a single option 
      out of a list of options (multi-select is also possible).
    
      - Use with a default selection if possible.
    
      - Do not use if there are fewer than 7 options. 
      Instead, consider radio buttons.
    
      - Do not use if typing is faster (Example: State 
        or Country).
    
      - Do not use dropdowns if the information is highly 
      familiar to user (Birth Date).
      
    #### Accessibility
    
      - Make sure your dropdown has a label. 
      Don’t replace it with the default menu option 
      (for example, removing the “State” label and 
      just having the dropdown read “Select a state” 
      by default).
      
      - Don’t use JavaScript to automatically 
      submit the form (or do anything else) when an 
      option is selected. Auto-submission disrupts 
      screen readers because they select each option 
      as they read them.
  `
)(() => <DropDownWrapper />);

storiesOf('Components', module)
  .addDecorator(CenterDecorator)
  .add('DropDownField', DropDownFieldStory);
