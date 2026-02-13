import type { Meta } from '@storybook/react-vite';
import packageJSON from '../../components-css/heading-css/package.json';
import { Heading as HeadingComponent } from '@nl-design-system-candidate/heading-react';
import headingMeta from '@nl-design-system-candidate/heading-docs/stories/heading.css.meta';
import * as Stories from '@nl-design-system-candidate/heading-docs/stories/heading.stories';
import { mergeCssMeta } from '../src/helpers/merge-css-meta';
import { getExternalLinks } from '../src/helpers/external-links';
import description from '@nl-design-system-candidate/heading-docs/docs/description.md?raw';

const externalLinks = getExternalLinks(
  'https://nldesignsystem.nl/heading',
  packageJSON.homepage,
  'https://www.npmjs.com/package/@nl-design-system-candidate/heading-css',
);

const meta = {
  ...mergeCssMeta(headingMeta, externalLinks, {
    parameters: {
      docs: {
        subtitle: description,
      },
    },
  }),
  title: 'CSS Componenten/Heading',
  id: 'css-heading',
} satisfies Meta<typeof HeadingComponent>;

export default meta;

export const Heading = Stories.Heading;
export const HeadingLevel1 = Stories.HeadingLevel1;
export const HeadingLevel2 = Stories.HeadingLevel2;
export const HeadingLevel3 = Stories.HeadingLevel3;
export const HeadingLevel4 = Stories.HeadingLevel4;
export const HeadingLevel5 = Stories.HeadingLevel5;
export const HeadingLevel6 = Stories.HeadingLevel6;
export const Heading1MetMeerdereRegelsTekst = Stories.Heading1MetMeerdereRegelsTekst;
