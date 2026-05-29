import type { Meta } from '@storybook/react-vite';
import { merge } from 'lodash-es';
import packageJSON from '../../components-react/alert-react/package.json';
import {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Alert as AlertComponent,
  type AlertProps,
} from '@nl-design-system-candidate/alert-react';
import alertMeta from '@nl-design-system-candidate/alert-docs/stories/alert.react.meta';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as Stories from '@nl-design-system-candidate/alert-docs/stories/alert.stories';
import '../../components-css/alert-css/src/test.scss';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useArgs } from 'storybook/preview-api';
import { getExternalLinks } from '../src/helpers/external-links';
import description from '@nl-design-system-candidate/alert-docs/docs/description.md?raw';

const externalLinks = getExternalLinks(
  'https://nldesignsystem.nl/alert',
  packageJSON.homepage,
  'https://www.npmjs.com/package/@nl-design-system-candidate/alert-react',
);

const meta = {
  ...merge(alertMeta, externalLinks, {
    parameters: {
      docs: {
        subtitle: description,
      },
    },
  }),
  title: 'React Componenten/Alert',
  id: 'alert',
} satisfies Meta<AlertProps>;

export default meta;

// export const SomeStory = Stories.SomeStory;
