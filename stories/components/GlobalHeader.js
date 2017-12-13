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
        * search icon: visible only when search callback (*searchIconCallback* property) is provided. If *profileId* property is provided it will be passed to *searchIconCallback*.
        * add icon: visible only when add callback (*addIconCallback* property) is provided. If *profileId* property is provided it will be passed to *addIconCallback*.
        * notifications icon: visible only when notifications callback (*notificationIconCallback*) property is provided. If *profileId* property is provided it will be passed to *notificationIconCallback*.
        * profileAvatar: visible when *profilId* or *logoutCallback* properties are provided. Clicking on ProfileAvatar toggles display of Logout button. Logout button is displayed only when *logoutCallback* property is provided. If *profileId* property is provided it will be passed to *logoutCallback*.
    - GlobalHeader component depends on GlobalHeaderIcon component to render add, search, notificaitons icons.
    - GlobalHeader component depends on ProfileAvatar component to render Profile Avatar.
    - Please note that GlobalHeaderIcon & ProfileAvatar components are kept as private components as they are not expected to be reused.
  `
)(() => (
  <GlobalHeader
    profileName="Profile Name"
    profileId="profile.id"
    logoCallback={callback}
    searchIconCallback={callback}
    addIconCallback={callback}
    notificationIconCallback={callback}
    logoutCallback={callback}
  />
));

storiesOf('Components', module).add('GlobalHeader', GlobalHeaderStory);
