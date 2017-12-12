import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import SideBar from '../../src/SideBar';
import NavLinks from '../../src/NavLinks';
import NavLink from '../../src/NavLink';

const codeStyle = 'color:powderblue';
const navLinks = (
  <NavLinks>
    <NavLink text="Screener Summary" href="#screenerSummary" />
    <NavLink text="Allegations & Disposition" href="#allegations" />
    <NavLink text="People & Roles" href="#pplroles">
      <NavLinks nested={true}>
        <NavLink
          text="Tommy Cambell"
          href="#tommy"
          preIcon="fa fa-user"
          postIcon="fa fa-exclamation-triangle c-red"
          indentationLevel={1}
        />
        <NavLink
          text="Aubrey Cambell"
          href="#aubrey"
          preIcon="fa fa-user"
          indentationLevel={1}
        />
        <NavLink
          text="Chris Cambell"
          href="#chris"
          preIcon="fa fa-user"
          indentationLevel={1}
        />
      </NavLinks>
    </NavLink>
    <NavLink text="History of Involvement" href="#history" />
    <NavLink text="Relationships" href="#relactionships" />
    <NavLink text="Contacts" href="#contacts" />
    <NavLink text="Risk & Safety Assessment" href="#risk" />
    <NavLink text="Home Assessment" href="#homeAssessment" />
    <NavLink
      text="Decision"
      href="#decision"
      postIcon="fa fa-exclamation-triangle c-red"
    />
  </NavLinks>
);

const CenterDecorator = story => <div>{story()}</div>;
const SideBarStory = withInfo({
  inline: false,
  text: `
    #### Usage
    - A side navigation component serves as a generic component. It renders content passed as *children*. Below examples show how to render navigation links.

    - Width of SideBar component can be customized using *columnWidth* property. By default it is 3 column wide. An example is shown below.
            <code style=${codeStyle}>
               &lt;SideNav  columnWidth={4} &gt;
                   &lt;div&gt; Side Bar Here &lt;/div&gt;
               &lt;/SideNav&gt;
            </code>

    - To render a group of navigations links in Side Nav, it could look like :
            <code style=${codeStyle}>
               &lt;SideNav&gt;
                    &lt;NavLinks&gt;
                        &lt;NavLink text="Screener Summary" href="#screenerSummary" /&gt;
                        &lt;NavLink text="Allegations & Disposition" href="#allegations" /&gt;
                        &lt;NavLink text="History of Involvement" href="#history" /&gt;
                    &lt;/NavLinks&gt;
               &lt;/SideNav&gt;
           </code>

    - Please refer to "Navigation Components > NavLinks" menu to learn more on how to construct simple navigation links & nested navigation links.

 `,
})(() => (
  <div>
    <div className="row">
      <SideBar columnWidth={3}>{navLinks}</SideBar>
    </div>
  </div>
));

storiesOf('Components', module)
  .addDecorator(CenterDecorator)
  .add('SideBar', SideBarStory);
