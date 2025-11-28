import type { Meta } from '@storybook/react-vite';
import packageJSON from '../../components-css/mark-css/package.json';
import { Mark as MarkComponent } from '../../components-react/mark-react/src/mark';
import markMeta from '@nl-design-system-candidate/mark-docs/stories/mark.css.meta';
import * as Stories from '@nl-design-system-candidate/mark-docs/stories/mark.stories';
import '../../components-css/paragraph-css/src/paragraph.scss';
import { mergeCssMeta } from '../src/helpers/merge-css-meta';
import { getExternalLinks } from '../src/helpers/external-links';

const externalLinks = getExternalLinks('https://nldesignsystem.nl/mark', packageJSON.homepage);

const meta = {
  ...mergeCssMeta(markMeta, externalLinks),
  title: 'CSS Componenten/Mark',
  id: 'css-mark',
} satisfies Meta<typeof MarkComponent>;

export default meta;

export const Mark = Stories.Mark;
export const MarkInEenParagraph = Stories.MarkInEenParagraph;
