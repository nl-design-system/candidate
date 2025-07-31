/* eslint-disable react/no-unescaped-entities */
import type { Meta, StoryObj } from '@storybook/react';
import packageJSON from '../../components-react/heading-react/package.json';
import { Heading } from '../../components-react/heading-react/src/css';
import { Paragraph } from '../../components-react/paragraph-react/src/css';

const meta = {
  argTypes: {
    appearance: {
      control: { labels: { undefined: '(undefined)' }, type: 'select' },
      options: [undefined, 'level-1', 'level-2', 'level-3', 'level-4', 'level-5', 'level-6'],
      table: { category: 'API' },
    },
    children: { table: { category: 'API' } },
    level: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6],
      table: { category: 'API' },
    },
  },
  component: Heading,
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
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const HeadingMultiline: Story = {
  name: 'Heading 1 met meerdere regels tekst',
  args: {
    children: (
      <>
        When the pawn hits the conflicts he thinks like a king
        <br />
        What he knows throws the blows when he goes to the fight
        <br />
        And he'll win the whole thing 'fore he enters the ring
        <br />
        There's no body to batter when your mind is your might
        <br />
        So when you go solo, you hold your own hand
        <br />
        And remember that depth is the greatest of heights
        <br />
        And if you know where you stand, then you know where to land
        <br />
        And if you fall it won't matter, cuz you'll know that you're right
      </>
    ),
    level: 1,
  },
  decorators: (Story) => (
    <>
      {Story()}
      <Paragraph>
        "When the Pawn..." is the second studio album by the American singer-songwriter Fiona Apple. Released by Epic
        Records in the United States on November 9, 1999, When the Pawn... was wholly written by Apple, with production
        by Jon Brion.
      </Paragraph>
      <Paragraph>
        Upon its release, "When the Pawn..." broke the record for longest album title at 444 characters (previously held
        by a volume in "The Best... Album in the World...Ever!"), though this record was subsequently broken.
      </Paragraph>
    </>
  ),
  globals: {
    dir: 'ltr',
    lang: 'en',
    title: 'When the Pawn...',
  },
  parameters: {
    docs: {
      description: {
        story: `Een Heading (level 1) met een tekst die met line breaks over meerder regels is verdeeld.

Bron: [When the Pawn... - Wikipedia](https://en.wikipedia.org/wiki/When_the_Pawn...)

Dit is een voorbeeld van een Heading met \`<br/>\` elementen, een situatie die soms voorkomt in de praktijk.

Dit voorbeeld voldoet niet aan de best practices van NL Design System om de tekst van de Heading niet te lang te maken.`,
      },
    },
    status: { type: [] },
  },
};
