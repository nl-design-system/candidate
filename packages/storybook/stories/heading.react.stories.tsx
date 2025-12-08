import type { Meta } from '@storybook/react-vite';
import packageJSON from '../../components-react/heading-react/package.json';
import { Heading as HeadingComponent } from '@nl-design-system-candidate/heading-react';
import headingMeta from '@nl-design-system-candidate/heading-docs/stories/heading.react.meta';
import * as Stories from '@nl-design-system-candidate/heading-docs/stories/heading.stories';
import { getExternalLinks } from '../src/helpers/external-links';

const externalLinks = getExternalLinks(
  'https://nldesignsystem.nl/heading',
  packageJSON.homepage,
  'https://www.npmjs.com/package/@nl-design-system-candidate/heading-react',
);

const meta = {
  ...headingMeta,
  ...externalLinks,
  title: 'React Componenten/Heading',
  id: 'heading',
} satisfies Meta<typeof HeadingComponent>;

export default meta;

export const Heading1MetMeerdereRegelsTekst = Stories.Heading1MetMeerdereRegelsTekst;
