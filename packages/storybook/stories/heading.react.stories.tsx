import type { Meta } from '@storybook/react-vite';
import packageJSON from '../../components-react/heading-react/package.json';
import { Heading as HeadingComponent } from '@nl-design-system-candidate/heading-react';
import headingMeta from '@nl-design-system-candidate/heading-docs/stories/heading.react.meta';
import * as Stories from '@nl-design-system-candidate/heading-docs/stories/heading.stories';

const meta = {
  ...headingMeta,
  parameters: {
    externalLinks: [
      {
        name: 'Open op NL Design System',
        url: 'https://nldesignsystem.nl/heading',
      },
      {
        name: 'Open op GitHub',
        url: packageJSON.homepage,
      },
    ],
  },
  title: 'Heading',
} satisfies Meta<typeof HeadingComponent>;

export default meta;

export const Heading1MetMeerdereRegelsTekst = Stories.Heading1MetMeerdereRegelsTekst;
