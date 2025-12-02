import type { Meta } from '@storybook/react-vite';
import packageJSON from '../../components-react/mark-react/package.json';
import { Mark as MarkComponent } from '../../components-react/mark-react/src/mark';
import markMeta from '@nl-design-system-candidate/mark-docs/stories/mark.react.meta';
import * as Stories from '@nl-design-system-candidate/mark-docs/stories/mark.stories';
import '../../components-css/paragraph-css/src/paragraph.scss';
import { getExternalLinks } from '../src/helpers/external-links';

const externalLinks = getExternalLinks('https://nldesignsystem.nl/mark', packageJSON.homepage);

const meta = {
  ...markMeta,
  ...externalLinks,
  component: MarkComponent,
  title: 'React Componenten/Mark',
  id: 'mark',
} satisfies Meta<typeof MarkComponent>;

export default meta;

export const Mark = Stories.Mark;
export const MarkInEenParagraph = Stories.MarkInEenParagraph;
