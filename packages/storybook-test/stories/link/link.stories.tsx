import type { Meta, StoryObj } from '@storybook/react';
import packageJSON from '../../../components-react/link-react/package.json';
import { Link } from '../../../components-react/link-react/src/css';
import { Paragraph } from '../../../components-react/paragraph-react/src/css';
import componentMarkdown from '../../../docs/link-docs/docs/component.md?raw';
import tokens from '../../../tokens/link-tokens/tokens.json';

const meta = {
  argTypes: {
    children: { table: { category: 'API' }, type: 'string' },
    href: { table: { category: 'API' } },
    target: {
      control: { labels: { undefined: '(undefined)' }, type: 'select' },
      options: [undefined, '_blank', '_parent', '_self', '_top'],
      table: { category: 'API' },
    },
  },
  component: Link,
  parameters: {
    docs: {
      description: {
        component: componentMarkdown,
      },
    },
    externalLinks: [
      {
        name: 'Open in Figma',
        url: 'https://www.figma.com/design/shhwGcqPLi2CapK0P1zz8O/NLDS---Voorbeeld---Bibliotheek?node-id=153-1056',
      },
      {
        name: 'Open op GitHub',
        url: packageJSON.homepage,
      },
    ],
    tokens,
  },
  title: 'Componenten/Link',
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Link',
  args: {
    children: 'voorbeeldsite (opent in een nieuw venster)',
    href: 'https://example.com',
    target: '_blank',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een enkele Link.',
      },
    },
    status: { type: [] },
  },
};

export const ArabicLink: Story = {
  name: 'Link (Arabisch)',
  args: {
    children: 'الرابط التشعبي (يفتح في نافذة جديدة)',
    dir: 'rtl',
    href: 'https://example.com',
    lang: 'ar',
    target: '_blank',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een enkele Link in het Arabisch.',
      },
    },
    status: { type: [] },
  },
};

export const LinkInParagraph: Story = {
  name: 'Link (in Paragraph)',
  args: {
    children: 'voorbeeldsite (opent in een nieuw venster)',
    href: 'https://example.com',
    target: '_blank',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een Link in een Paragraph.',
      },
    },
    status: { type: [] },
  },
  render({ children, ...restProps }) {
    return (
      <Paragraph>
        In deze paragraaf staat een link naar <Link {...restProps}>{children}</Link>.
      </Paragraph>
    );
  },
};

export const LinkInGermanParagraph: Story = {
  name: 'Link (in Paragraph, Duits)',
  args: {
    children: 'eine Beispielsite (wird in einem neuen Fenster geöffnet)',
    href: 'https://example.com',
    target: '_blank',
  },
  globals: {
    lang: 'de',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een Link in een Paragraph in een container met een lang attribuut met als waarde "de".',
      },
    },
    status: { type: [] },
  },
  render({ children, ...restProps }) {
    return (
      <Paragraph>
        Dies ist ein Link in einem Absatz, der auf <Link {...restProps}>{children}</Link> verweist.
      </Paragraph>
    );
  },
};

export const ExtremelyLongLink: Story = {
  name: 'Link',
  args: {
    children:
      'Supercalifragilisticexpialidocioussupercalifragilisticexpialidocioussupercalifragilisticexpialidocioussupercalifragilisticexpialidocioussupercalifragilisticexpialidocioussupercalifragilisticexpialidocioussupercalifragilisticexpialidocious (opens in a new window)',
    href: 'https://example.com',
    lang: 'en',
    target: '_blank',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een link met een extreem lang woord.',
      },
    },
    status: { type: [] },
  },
};
