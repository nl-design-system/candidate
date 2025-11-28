import type { Meta } from '@storybook/react-vite';
import packageJSON from '../../components-css/heading-css/package.json';
import { Heading as HeadingComponent } from '@nl-design-system-candidate/heading-react';
import headingMeta from '@nl-design-system-candidate/heading-docs/stories/heading.css.meta';
import * as Stories from '@nl-design-system-candidate/heading-docs/stories/heading.stories';
import { mergeCssMeta } from '../src/helpers/merge-css-meta';
import { getExternalLinks } from '../src/helpers/external-links';

const externalLinks = getExternalLinks('https://nldesignsystem.nl/heading', packageJSON.homepage);

const meta = {
  ...mergeCssMeta(headingMeta, externalLinks),
  title: 'CSS Componenten/Heading',
  id: 'css-heading',
} satisfies Meta<typeof HeadingComponent>;

export default meta;

export const Heading1MetMeerdereRegelsTekst = Stories.Heading1MetMeerdereRegelsTekst;
