import React from 'react';
import { storiesOf } from '@storybook/react';
import NavLink from '../../src/NavLink';
import NavLinks from '../../src/NavLinks';
import Layout03 from '../../src/Layout03';

const sideBarContent = (
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
const globalHeaderProps = {
  searchCallback: function() {},
  addNewCallback: function() {},
  notificationsCallback: function() {},
  logoutCallback: function() {},
};
const DetailPage = () => (
  <Layout03
    sideBarContent={sideBarContent}
    globalHeaderProps={globalHeaderProps}
  />
);

storiesOf('Page Templates', module).add('03 Detail Page Template', DetailPage);
