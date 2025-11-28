import type { Meta } from '@storybook/react-vite';
import packageJSON from '../../components-css/number-badge-css/package.json';
import { NumberBadge as NumberBadgeComponent } from '../../components-react/number-badge-react/src/number-badge';
import numberBadgeMeta from '@nl-design-system-candidate/number-badge-docs/stories/number-badge.css.meta';
import * as Stories from '@nl-design-system-candidate/number-badge-docs/stories/number-badge.stories';
import { mergeCssMeta } from '../src/helpers/merge-css-meta';
import { getExternalLinks } from '../src/helpers/external-links';

const externalLinks = getExternalLinks('https://nldesignsystem.nl/number-badge', packageJSON.homepage);

const meta = {
  ...mergeCssMeta(numberBadgeMeta, externalLinks),
  title: 'CSS Componenten/Number Badge',
  id: 'css-number-badge',
} satisfies Meta<typeof NumberBadgeComponent>;

export default meta;

export const NumberBadge = Stories.NumberBadge;
export const NumberBadgeMetValue = Stories.NumberBadgeMetValue;
export const NumberBadgeMetLabel = Stories.NumberBadgeMetLabel;
