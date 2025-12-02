import type { Meta } from '@storybook/react-vite';
import packageJSON from '../../components-react/icon-react/package.json';
import { Icon as IconComponent } from '@nl-design-system-candidate/icon-react';
import iconMeta from '@nl-design-system-candidate/icon-docs/stories/icon.react.meta';
import * as Stories from '@nl-design-system-candidate/icon-docs/stories/icon.stories';
import { getExternalLinks } from '../src/helpers/external-links';

const externalLinks = getExternalLinks('https://nldesignsystem.nl/icon', packageJSON.homepage);

const meta = {
  ...iconMeta,
  ...externalLinks,
  title: 'React Componenten/Icon',
  id: 'icon',
} satisfies Meta<typeof IconComponent>;

export default meta;

export const Icon = Stories.Icon;
