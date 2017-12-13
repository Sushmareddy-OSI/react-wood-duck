import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import GlobalHeader from '../../src/GlobalHeader';

const callback = function(event) {};

const GlobalHeaderStory = withInfo(
  `
    #### Usage
    - GlobalHeader component consists of
        * logo with optional callback
        * search
        * add
        * notifications
        * profileAvatar: visible when *profilId* or *logoutCallback* properties are provided. Clicking on ProfileAvatar toggles display of Logout button. Logout button is displayed only when *logoutCallback* property is provided. If *profileId* property is provided it will be passed to *logoutCallback*.
    - add, search, notifications (icons) are visible only when corresponding callback properties (*addIconCallback*, *searchIconCallback*, *notificationIconCallback*). If *profileId* property is provided, it will be passed to each of these callbacks.
    - GlobalHeader component depends on GlobalHeaderAction component to render add, search, notifications functionality.
    - GlobalHeader component depends on ProfileAvatar component to render Profile Avatar.
    - Please note that GlobalHeaderAction & ProfileAvatar components are kept as private components as they are not expected to be reused.
  `
)(() => (
  <GlobalHeader
    profileName="Profile Name"
    profileId="profile.id"
    logoCallback={callback}
    searchCallback={callback}
    addNewCallback={callback}
    notificationsCallback={callback}
    logoutCallback={callback}
  />
));

storiesOf('Components', module).add('GlobalHeader', GlobalHeaderStory);
