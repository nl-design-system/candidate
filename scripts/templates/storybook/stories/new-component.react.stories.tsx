import type { Meta } from '@storybook/react-vite';
import { merge } from 'lodash-es';
import packageJSON from '../../components-react/new-component-react/package.json';
import type { NewComponentProps } from '@nl-design-system-candidate/new-component-react';
import newComponentMeta from '@nl-design-system-candidate/new-component-docs/stories/new-component.react.meta';
import '../../components-css/new-component-css/src/test.scss';
import { getExternalLinks } from '../src/helpers/external-links';
import description from '@nl-design-system-candidate/new-component-docs/docs/description.md?raw';

const externalLinks = getExternalLinks(
  'https://nldesignsystem.nl/new-component',
  packageJSON.homepage,
  'https://www.npmjs.com/package/@nl-design-system-candidate/new-component-react',
);

const meta = {
  ...merge(newComponentMeta, externalLinks, {
    parameters: {
      docs: {
        subtitle: description,
      },
    },
  }),
  title: 'React Componenten/New Component',
  id: 'new-component',
} satisfies Meta<NewComponentProps>;

export default meta;

// export const SomeStory = Stories.SomeStory;
