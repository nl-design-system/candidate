import type { Meta } from '@storybook/react-vite';
import packageJSON from '../../components-react/icon-react/package.json';
import { Icon as IconComponent } from '@nl-design-system-candidate/icon-react';
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
  title: 'React Componenten/Icon',
  id: 'icon',
} satisfies Meta<typeof IconComponent>;

export default meta;

export const Icon = Stories.Icon;
