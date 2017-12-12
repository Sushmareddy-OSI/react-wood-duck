import { configure } from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';

function loadStories() {
  require('../stories');
}

setDefaults({
  header: false,
  inline: true,
});

configure(loadStories, module);
