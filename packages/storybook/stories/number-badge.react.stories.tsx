import type { Meta } from '@storybook/react-vite';
import packageJSON from '../../components-react/number-badge-react/package.json';
import { NumberBadge as NumberBadgeComponent } from '../../components-react/number-badge-react/src/number-badge';
import numberBadgeMeta from '@nl-design-system-candidate/number-badge-docs/stories/number-badge.react.meta';
import * as Stories from '@nl-design-system-candidate/number-badge-docs/stories/number-badge.stories';
import { getExternalLinks } from '../src/helpers/external-links';

const externalLinks = getExternalLinks('https://nldesignsystem.nl/number-badge', packageJSON.homepage);

const meta = {
  ...numberBadgeMeta,
  ...externalLinks,
  title: 'React Componenten/Number Badge',
  id: 'number-badge',
} satisfies Meta<typeof NumberBadgeComponent>;

export default meta;

export const NumberBadge = Stories.NumberBadge;
export const NumberBadgeMetValue = Stories.NumberBadgeMetValue;
export const NumberBadgeMetLabel = Stories.NumberBadgeMetLabel;
