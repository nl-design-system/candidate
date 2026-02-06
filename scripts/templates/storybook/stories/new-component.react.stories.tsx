import type { Meta } from '@storybook/react-vite';
import packageJSON from '../../components-react/new-component-react/package.json';
import { NewComponent as NewComponentComponent } from '@nl-design-system-candidate/new-component-react';
import newComponentMeta from '@nl-design-system-candidate/new-component-docs/stories/new-component.react.meta';
// import * as Stories from '@nl-design-system-candidate/new-component-docs/stories/new-component.stories';
import { getExternalLinks } from '../src/helpers/external-links.js';

const externalLinks = getExternalLinks('https://nldesignsystem.nl/new-component', packageJSON.homepage);

const meta = {
  ...newComponentMeta,
  ...externalLinks,
  title: 'React Componenten/New Component',
  id: 'new-component',
} satisfies Meta<typeof NewComponentComponent>;

export default meta;

// export const SomeStory = Stories.SomeStory;
