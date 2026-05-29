import type { Meta } from '@storybook/react-vite';
import packageJSON from '../../components-css/alert-css/package.json';
import { type AlertProps } from '@nl-design-system-candidate/alert-react';
import alertMeta from '@nl-design-system-candidate/alert-docs/stories/alert.css.meta';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as Stories from '@nl-design-system-candidate/alert-docs/stories/alert.stories';
import '../../components-css/alert-css/src/test.scss';
import { mergeCssMeta } from '../src/helpers/merge-css-meta';
import { getExternalLinks } from '../src/helpers/external-links';
import description from '@nl-design-system-candidate/alert-docs/docs/description.md?raw';

const externalLinks = getExternalLinks(
  'https://nldesignsystem.nl/alert',
  packageJSON.homepage,
  'https://www.npmjs.com/package/@nl-design-system-candidate/alert-css',
);

const meta = {
  ...mergeCssMeta(alertMeta, externalLinks, {
    parameters: {
      docs: {
        subtitle: description,
      },
    },
  }),
  title: 'CSS Componenten/Alert',
  id: 'css-alert',
} satisfies Meta<AlertProps>;

export default meta;

// export const SomeStory = Stories.SomeStory;
