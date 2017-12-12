import React from 'react';

import { storiesOf } from '@storybook/react';

import PageHeader from '../../src/PageHeader';

const PageHeaderStory = () => <PageHeader />;
const PageHeaderStoryHidden = () => <PageHeader button={null} />;

storiesOf('Components', module)
  .add('PageHeader - Default', PageHeaderStory)
  .add('PageHeader - Hidden Button', PageHeaderStoryHidden);
