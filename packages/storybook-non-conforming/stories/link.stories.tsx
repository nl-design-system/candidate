import { Paragraph } from '@nl-design-system-candidate/paragraph-react/css';
import { ExampleBodyTextDecorator } from '@nl-design-system-candidate/storybook-shared/src/ExampleBodyTextDecorator';
import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../components-css/link-css/src/link.scss';
import packageJSON from '../../components-react/link-react/package.json';
import { Link } from '../../components-react/link-react/src/link';
import componentMarkdown from '../../docs/link-docs/docs/component.md?raw';

const meta = {
  argTypes: {
    children: { control: 'text', table: { category: 'API' } },
  },
  component: Link,
  decorators: [ExampleBodyTextDecorator],
  parameters: {
    docs: {
      description: {
        component: componentMarkdown,
      },
    },
    externalLinks: [
      {
        name: 'Open op NL Design System',
        url: 'https://nldesignsystem.nl/link',
      },
      {
        name: 'Open op GitHub',
        url: packageJSON.homepage,
      },
    ],
  },
  title: 'Componenten/Link',
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LinkOnlyColorLine: Story = {
  name: 'Fout: Link en Paragraph verschillen alleen in kleur, doordat de link niet onderstreept is',
  decorators: ExampleBodyTextDecorator,
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  args: {
    href: 'https://example.com/',
  },
  parameters: {
    docs: {
      description: {
        story: `Een Link in een Paragraph. De Link en Paragraph verschillen visueel, maar kleur is het enige verschil: de Paragraph is rood en de Link is groen.

De design token \`nl.link.text-decoration-line\` is ingesteld op \`none\`, waardoor de Link niet onderstreept is.

Dit voorbeeld voldoet niet aan WCAG SC 1.4.1.`,
      },
    },
  },
  render: ({ href }) => (
    <Paragraph
      style={{
        '--nl-link-color': 'green',
        '--nl-link-text-decoration-color': 'green',
        '--nl-link-text-decoration-line': 'none',
        '--nl-paragraph-color': 'red',
      }}
    >
      {'Het verschil tussen een link naar '}
      <Link href={href}>example.com</Link>
      {' en de tekst "example.com" is alleen met kleur te zien.'}
    </Paragraph>
  ),
};

export const LinkOnlyColorThickness: Story = {
  name: 'Fout: Link en Paragraph verschillen alleen in kleur, waardoor de onderstreping van de Link niet zichtbaar is',
  decorators: ExampleBodyTextDecorator,
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  args: {
    href: 'https://example.com/',
  },
  parameters: {
    docs: {
      description: {
        story: `Een Link in een Paragraph. De Link en Paragraph verschillen visueel, maar kleur is het enige verschil: de Paragraph is rood en de Link is groen.

De design token \`nl.link.text-decoration-line-color\` is ingesteld op \`transparent\`, waardoor de onderstreping van de Link niet zichtbaar is.

Dit voorbeeld voldoet niet aan WCAG SC 1.4.1.`,
      },
    },
  },
  render: ({ href }) => (
    <Paragraph
      style={{
        '--nl-link-color': 'green',
        '--nl-link-text-decoration-color': 'transparent',
        '--nl-link-text-decoration-thickness': '3px',
        '--nl-paragraph-color': 'red',
      }}
    >
      {'Het verschil tussen een link naar '}
      <Link href={href}>example.com</Link>
      {' en de tekst "example.com" is alleen met kleur te zien.'}
    </Paragraph>
  ),
};

export const LinkUnderlineContrast: Story = {
  name: 'Fout: Link en Paragraph verschillen visueel alleen door een streep met onvoldoende contrast',
  decorators: ExampleBodyTextDecorator,
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  args: {
    href: 'https://example.com/',
  },
  parameters: {
    docs: {
      description: {
        story: `Een Link in een Paragraph. De Link en Paragraph verschillen niet alleen van kleur, maar de kleur van de onderlijning heeft onvoldoende contrast met de achtergrondkleur.

Dit voorbeeld voldoet niet aan WCAG SC 1.4.11.`,
      },
    },
  },
  render: ({ href }) => (
    <Paragraph
      style={{
        '--nl-link-color': 'rgb(0 0 0)',
        '--nl-link-text-decoration-color': 'rgb(149 149 149)',
        '--nl-link-text-decoration-thickness': '4px',
        '--nl-paragraph-color': 'rgb(0 0 0)',
      }}
    >
      {'Het verschil tussen een link naar '}
      <Link href={href}>example.com</Link>
      {' en de tekst "example.com" is alleen met kleur te zien.'}
    </Paragraph>
  ),
};
