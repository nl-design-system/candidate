import type { Meta } from '@storybook/react-vite';
import packageJSON from '../../components-css/new-component-css/package.json';
import { type NewComponentProps } from '@nl-design-system-candidate/new-component-react';
import newComponentMeta from '@nl-design-system-candidate/new-component-docs/stories/new-component.css.meta';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as Stories from '@nl-design-system-candidate/new-component-docs/stories/new-component.stories';
import '../../components-css/new-component-css/src/test.scss';
import { mergeCssMeta } from '../src/helpers/merge-css-meta';
import { getExternalLinks } from '../src/helpers/external-links';
import description from '@nl-design-system-candidate/new-component-docs/docs/description.md?raw';

const externalLinks = getExternalLinks(
  'https://nldesignsystem.nl/new-component',
  packageJSON.homepage,
  'https://www.npmjs.com/package/@nl-design-system-candidate/new-component-css',
);

const meta = {
  ...mergeCssMeta(newComponentMeta, externalLinks, {
    parameters: {
      docs: {
        subtitle: description,
      },
    },
  }),
  title: 'CSS Componenten/New Component',
  id: 'css-new-component',
} satisfies Meta<NewComponentProps>;

export default meta;

// export const SomeStory = Stories.SomeStory;
