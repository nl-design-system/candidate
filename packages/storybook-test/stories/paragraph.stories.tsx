import type { Meta, StoryObj } from '@storybook/react';
import packageJSON from '../../components-react/paragraph-react/package.json';
import { Paragraph } from '../../components-react/paragraph-react/src/css';

const meta = {
  argTypes: {
    children: { name: 'text', table: { category: 'API' } },
    purpose: {
      control: { labels: { undefined: '(undefined)' }, type: 'select' },
      options: [undefined, 'lead'],
      table: { category: 'API' },
      type: 'string',
    },
  },
  component: Paragraph,
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
    externalLinks: [
      {
        name: 'Open in Figma',
        url: 'https://www.figma.com/design/shhwGcqPLi2CapK0P1zz8O/NLDS---Voorbeeld---Bibliotheek?node-id=150-734',
      },
      {
        name: 'Open op GitHub',
        url: packageJSON.homepage,
      },
    ],
  },
  title: 'Componenten/Paragraph',
} satisfies Meta<typeof Paragraph>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Paragraph',
  args: {
    children: 'Op brute wĳze ving de schooljuf de quasi-kalme lynx.',
    purpose: undefined,
  },
  parameters: {
    docs: {
      description: {
        story: 'Een paragraaf bestaand uit één alinea.',
      },
    },
  },
};

export const ParagraphLead: Story = {
  name: 'Paragraph Lead',
  args: {
    children: 'Op brute wĳze ving de schooljuf de quasi-kalme lynx.',
    purpose: 'lead',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een lead paragraaf bestaand uit één alinea.',
      },
    },
  },
};

export const ParagraphLeadPlusParagraph: Story = {
  name: 'Paragraph Lead + Paragraph',
  args: {
    children:
      'Ditmaal hebben wij het in Friesland gezocht, en ik mag wel zeggen, wij hebben het er gevonden ook. Want dat gewest geeft een afwisseling van velerlei moois te water en te land, oud en nieuw.',
    purpose: 'lead',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Een fragment uit “Friesland” door Jac. P. Thijsse, gesplitst in een lead paragraaf en een gewone paragraaf.',
      },
    },
  },
  render({ children, ...restProps }) {
    return (
      <>
        <Paragraph {...restProps}>{children}</Paragraph>
        <Paragraph>
          Wij hebben er heel wat rondgezworven, maar zijn er zeker van, dat we nog menig mooi en belangrijk plekje
          gemist hebben. Dat is maar goed ook; nu hebben wij een reden, om nog dikwijls terug te keeren naar de
          plaatsen, waar het ons zoo goed bevallen is en waar wij nu nog nieuwe en frissche dingen kunnen ontdekken.
          Indien gij daar ook aan wilt doen, zult ge het u niet beklagen.
        </Paragraph>
      </>
    );
  },
};

export const ParagraphArabic: Story = {
  name: 'Paragraph (Arabic)',
  args: {
    children: 'هذه فقرة نصية. وهي ليست فقرة نصية طويلة جدًا، ولكنها فقرة نصية على أية حال.',
    dir: 'rtl',
    lang: 'ar',
    purpose: undefined,
  },
  parameters: {
    docs: {
      description: {
        story: 'Een paragraaf met één alinea Arabische tekst.',
      },
    },
  },
};

export const ParagraphLeadArabic: Story = {
  name: 'Paragraph Lead (Arabic)',
  args: {
    children: 'هذه فقرة نصية. وهي ليست فقرة نصية طويلة جدًا، ولكنها فقرة نصية على أية حال.',
    dir: 'rtl',
    lang: 'ar',
    purpose: 'lead',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een lead paragraaf met één alinea Arabische tekst.',
      },
    },
  },
};

export const ParagraphZoom400: Story = {
  name: 'Paragraph (zoom 400%)',
  args: {
    children: 'Knappekoppenbestuursoverlegorgaannotulen',
    purpose: undefined,
  },
  globals: {
    viewport: { value: undefined },
    zoom: 4,
  },
  parameters: {
    docs: {
      description: {
        story: 'Een paragraaf met een heel lang woord , gezoomed naar 400%.',
      },
    },
  },
};

export const ParagraphZoomSmallViewport: Story = {
  name: 'Paragraph (small viewport)',
  args: {
    children: 'Knappekoppenbestuursoverlegorgaannotulen',
    purpose: undefined,
  },
  globals: {
    viewport: { value: 'phone' },
    zoom: 1,
  },
  parameters: {
    docs: {
      description: {
        story: 'Een paragraaf met een heel lang woord , in een kleine viewport.',
      },
    },
  },
};

export const ParagraphZoom400SmallViewport: Story = {
  name: 'Paragraph (zoom 400%, small viewport)',
  args: {
    children: 'Knappekoppenbestuursoverlegorgaannotulen',
    purpose: undefined,
  },
  globals: {
    viewport: { value: 'phone' },
    zoom: 4,
  },
  parameters: {
    docs: {
      description: {
        story: 'Een paragraaf met een heel lang woord , gezoomed naar 400%.',
      },
    },
  },
};
