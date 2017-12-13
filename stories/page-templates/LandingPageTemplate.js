import React from 'react';
import { storiesOf } from '@storybook/react';
import Layout01 from '../../src/Layout01';

const globalHeaderProps = {
  searchCallback: function() {},
  addNewCallback: function() {},
  notificationsCallback: function() {},
  logoutCallback: function() {},
};
const LandingPage = () => <Layout01 globalHeaderProps={globalHeaderProps} />;

storiesOf('Page Templates', module).add(
  '01 Landing Page Template',
  LandingPage
);
