/* eslint-disable react/no-unescaped-entities */
import type { StoryObj } from '@storybook/react-vite';
import type { HeadingProps } from '@nl-design-system-candidate/heading-react';
import { Paragraph } from '@nl-design-system-candidate/paragraph-react/css';

type Story = StoryObj<HeadingProps>;

export const Heading: Story = {
  name: 'Heading',
  args: {
    children: 'Heading',
    level: 1,
  },
};

export const HeadingLevel1: Story = {
  name: 'Heading level 1',
  args: {
    children: 'Heading level 1',
    level: 1,
  },
  parameters: {
    docs: {
      description: {
        story: `Hoofdkop van een pagina.`,
      },
    },
  },
};

export const HeadingLevel2: Story = {
  name: 'Heading level 2',
  args: {
    children: 'Heading level 2',
    level: 2,
  },
  parameters: {
    docs: {
      description: {
        story: `Koptekst die volgt na de hoofdkop en in de koppenstructuur op het tweede niveau staat.`,
      },
    },
  },
};

export const HeadingLevel3: Story = {
  name: 'Heading level 3',
  args: {
    children: 'Heading level 3',
    level: 3,
  },
  parameters: {
    docs: {
      description: {
        story: `Koptekst die in de koppenstructuur op het derde niveau staat.`,
      },
    },
  },
};

export const HeadingLevel4: Story = {
  name: 'Heading level 4',
  args: {
    children: 'Heading level 4',
    level: 4,
  },
  parameters: {
    docs: {
      description: {
        story: `Koptekst die in de koppenstructuur op het vierde niveau staat.`,
      },
    },
  },
};

export const HeadingLevel5: Story = {
  name: 'Heading level 5',
  args: {
    children: 'Heading level 5',
    level: 5,
  },
  parameters: {
    docs: {
      description: {
        story: `Hoofdkop van een pagina.Koptekst die in de koppenstructuur op het vijfde niveau staat.`,
      },
    },
  },
};

export const HeadingLevel6: Story = {
  name: 'Heading level 6',
  args: {
    children: 'Heading level 6',
    level: 6,
  },
  parameters: {
    docs: {
      description: {
        story: `Koptekst die in de koppenstructuur op het zesde niveau staat.`,
      },
    },
  },
};

export const Heading1MetMeerdereRegelsTekst: Story = {
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
