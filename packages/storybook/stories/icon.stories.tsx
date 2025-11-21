import type { Meta } from '@storybook/react-vite';
import packageJSON from '../../components-react/icon-react/package.json';
import { Icon } from '../../components-react/icon-react';
import iconMeta from '@nl-design-system-candidate/icon-docs/stories/icon.react.meta';
import * as Stories from '@nl-design-system-candidate/icon-docs/stories/icon.stories';

const meta = {
  ...iconMeta,
  parameters: {
    externalLinks: [
      {
        name: 'Open op NL Design System',
        url: 'https://nldesignsystem.nl/icon',
      },
      {
        name: 'Open op GitHub',
        url: packageJSON.homepage,
      },
    ],
  },
  title: 'Icon',
} satisfies Meta<typeof Icon>;

export default meta;

export const Default = Stories.Default;
